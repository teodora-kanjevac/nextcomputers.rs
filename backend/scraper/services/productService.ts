import prisma from '~/src/utils/prisma'
import IsEqual from 'fast-deep-equal'
import { Product } from '~/scraper/types/Product'
import {
    calculateSalePrice,
    filterProducts,
    getCheapestPrice,
    hideNonExistantProducts,
} from '~/scraper/utils/productUtils'

const BATCH_SIZE = 100

export const storeProducts = async (products: Product[]): Promise<void> => {
    try {
        const validProducts = filterProducts(products)
        const validIdentifiers = new Set(validProducts.map(product => product.ean ?? product.name))
        const productDistributor = new URL(validProducts[0].imageUrl[0].image).hostname

        let inserted = 0
        let updated = 0
        let markedUnavailable = 0

        for (let i = 0; i < validProducts.length; i += BATCH_SIZE) {
            const batch = validProducts.slice(i, i + BATCH_SIZE)
            const identifiers = batch.map(product => product.ean ?? product.name)

            const existingProducts = await prisma.product.findMany({
                where: { OR: [{ ean: { in: identifiers } }, { name: { in: identifiers } }] },
                select: {
                    product_id: true,
                    ean: true,
                    name: true,
                    available: true,
                    stock: true,
                    price: true,
                    retail_price: true,
                    sale_price: true,
                    image_url: true,
                },
            })

            const existingProductsMap = Object.fromEntries(
                existingProducts.map(product => [product.ean ?? product.name, product])
            )

            const productsToInsert = batch.filter(product => !existingProductsMap[product.ean ?? product.name])

            const productsToUpdate = batch.filter(product => {
                const existingProduct = existingProductsMap[product.ean ?? product.name]
                return (
                    existingProduct &&
                    (!existingProduct.available ||
                        existingProduct.stock !== product.stock ||
                        existingProduct.price.toNumber() !== parseFloat(product.price.toFixed(2)) ||
                        existingProduct.retail_price.toNumber() !== parseFloat(product.retailPrice.toFixed(2)) ||
                        existingProduct.sale_price.toNumber() !== parseFloat(product.salePrice.toFixed(2)) ||
                        !IsEqual(existingProduct.image_url, product.imageUrl))
                )
            })

            inserted += productsToInsert.length
            updated += productsToUpdate.length

            const updateOperations = productsToUpdate.map(product => {
                const productKey = product.ean ?? product.name
                const existingProduct = existingProductsMap[productKey]
                const productId = existingProduct.product_id

                const currentDistributorHasProduct = JSON.stringify(existingProduct.image_url).includes(
                    productDistributor
                )

                const newPrice = parseFloat(product.price.toFixed(2))
                const existingPrice = parseFloat(existingProduct.price.toFixed(2))

                const cheapestPrice = getCheapestPrice(
                    newPrice,
                    product.stock,
                    existingPrice,
                    existingProduct.stock,
                    productDistributor
                )

                const commonData: any = {
                    available: true,
                    price: cheapestPrice,
                    retail_price: product.retailPrice,
                    sale_price: calculateSalePrice(cheapestPrice),
                }

                if (product.stock > 0) {
                    commonData.stock = product.stock
                }

                if (currentDistributorHasProduct) {
                    return prisma.product.update({
                        where: { product_id: productId },
                        data: {
                            ...commonData,
                            image_url: product.imageUrl,
                        },
                    })
                }

                return prisma.product.update({
                    where: { product_id: productId },
                    data: commonData,
                })
            })

            const insertOperations = prisma.product.createMany({
                data: productsToInsert.map(product => ({
                    name: product.name,
                    stock: product.stock,
                    price: product.price,
                    retail_price: product.retailPrice,
                    sale_price: product.salePrice,
                    payment_advance: product.paymentAdvance,
                    brand: product.brand,
                    supplier: product.supplier,
                    country: product.country,
                    subcategory_id: product.subcategoryId,
                    ean: product.ean,
                    image_url: product.imageUrl,
                    specification: product.specification,
                    available: true,
                })),
                skipDuplicates: true,
            })

            await prisma.$transaction([insertOperations, ...updateOperations])
        }

        markedUnavailable = await hideNonExistantProducts(validIdentifiers, productDistributor)

        console.log('Distributor:', productDistributor)
        console.log('Total products inserted:', inserted)
        console.log('Total products updated:', updated)
        console.log('Total products marked unavailable:', markedUnavailable)
    } catch (error) {
        console.error('Error storing products:', error)
        throw error
    }
}
