import prisma from '~/src/utils/prisma'
import { Product } from '~/scraper/types/Product'
import { calculateSalePrice, calculateShippingPrice } from './productUtils'
import { BATCH_SIZE } from '~/scraper/constants/constantValues'

export const updateDistributorPrices = async (products: Product[], distributorIdentifier: string): Promise<void> => {
    const distributor = await prisma.distributor.findFirst({
        where: { identifier: distributorIdentifier },
    })

    if (!distributor) {
        throw new Error(`Distributor not found: ${distributorIdentifier}`)
    }

    const distributorId = distributor.distributor_id

    const scrapedEANs = products.map(p => p.ean)

    await prisma.distributorprice.deleteMany({
        where: {
            distributor_id: distributorId,
            NOT: {
                ean: {
                    in: scrapedEANs,
                },
            },
        },
    })

    await Promise.all(
        products.map(async product => {
            try {
                await prisma.distributorprice.upsert({
                    where: {
                        ean_distributor_id: {
                            ean: product.ean,
                            distributor_id: distributorId,
                        },
                    },
                    update: {
                        price: product.price,
                        stock: product.stock,
                        updated_at: new Date(),
                    },
                    create: {
                        ean: product.ean,
                        price: product.price,
                        stock: product.stock,
                        distributor_id: distributorId,
                    },
                })
            } catch (error) {
                console.error(`Error while upserting distributor price for ${product.ean}:`, error)
                throw error
            }
        })
    )
}

export const updateProductsWithBestPrice = async (): Promise<void> => {
    let offset = 0
    let markedUnavailable = 0

    while (true) {
        const products = await prisma.product.findMany({
            skip: offset,
            take: BATCH_SIZE,
            select: {
                product_id: true,
                ean: true,
                subcategory_id: true,
            },
        })

        if (products.length === 0) break

        const updatePromises = products.map(async product => {
            const bestOffer = await prisma.distributorprice.findFirst({
                where: {
                    ean: product.ean,
                    stock: {
                        gt: 0,
                    },
                },
                orderBy: {
                    price: 'asc',
                },
                include: {
                    distributor: {
                        select: {
                            name: true,
                        },
                    },
                },
            })

            if (!bestOffer) {
                await prisma.product.update({
                    where: {
                        product_id: product.product_id,
                    },
                    data: {
                        available: false,
                        stock: 0,
                    },
                })
                markedUnavailable++
                return
            }

            const bestPrice = parseFloat(bestOffer.price.toFixed(2))
            const salePrice = calculateSalePrice(bestPrice)

            await prisma.product.update({
                where: {
                    product_id: product.product_id,
                },
                data: {
                    price: bestPrice,
                    sale_price: salePrice,
                    shipping_price: calculateShippingPrice(salePrice, product.subcategory_id ?? 0),
                    stock: bestOffer.stock,
                    price_distributor: bestOffer.distributor.name,
                },
            })
        })

        await Promise.all(updatePromises)

        offset += BATCH_SIZE
    }

    console.log('Total products marked unavailable:', markedUnavailable)
    console.log('Product prices updated from best distributor offers.')
}
