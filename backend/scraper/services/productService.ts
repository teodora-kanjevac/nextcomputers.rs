import prisma from '~/src/utils/prisma'
import IsEqual from 'fast-deep-equal'
import { Product } from '~/scraper/types/Product'
import { filterProducts } from '~/scraper/utils/productUtils'
import { updateDistributorPrices } from '~/scraper/utils/distributorUtils'
import { BATCH_SIZE } from '~/scraper/constants/constantValues'

export const storeProducts = async (products: Product[]): Promise<void> => {
    try {
        const validProducts = filterProducts(products)
        const productDistributor = new URL(validProducts[0].imageUrl[0].image).hostname

        let inserted = 0
        let updated = 0

        for (let i = 0; i < validProducts.length; i += BATCH_SIZE) {
            const batch = validProducts.slice(i, i + BATCH_SIZE)
            const identifiers = batch.map(product => product.ean)

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
                    specification: true,
                    image_url: true,
                },
            })

            const existingProductsMap = Object.fromEntries(existingProducts.map(product => [product.ean, product]))

            const productsToInsert = batch.filter(product => !existingProductsMap[product.ean])

            const productsToUpdate = batch.filter(product => {
                const existingProduct = existingProductsMap[product.ean]
                return (
                    existingProduct &&
                    (!existingProduct.available ||
                        existingProduct.stock !== product.stock ||
                        existingProduct.retail_price.toNumber() !== parseFloat(product.retailPrice.toFixed(2)) ||
                        !IsEqual(existingProduct.specification, product.specification) ||
                        !IsEqual(existingProduct.image_url, product.imageUrl))
                )
            })

            inserted += productsToInsert.length
            updated += productsToUpdate.length

            const updateOperations = productsToUpdate.map(product => {
                const productKey = product.ean
                const existingProduct = existingProductsMap[productKey]
                const productId = existingProduct.product_id

                const currentDistributorHasProduct = JSON.stringify(existingProduct.image_url).includes(
                    productDistributor
                )

                const commonData: any = {
                    available: true,
                    stock: product.stock,
                    retail_price: product.retailPrice,
                }

                if (currentDistributorHasProduct) {
                    return prisma.product.update({
                        where: { product_id: productId },
                        data: {
                            ...commonData,
                            specification: product.specification,
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
                    shipping_price: product.shippingPrice,
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

        await updateDistributorPrices(validProducts, productDistributor)

        console.log('Distributor:', productDistributor)
        console.log('Total products inserted:', inserted)
        console.log('Total products updated:', updated)
    } catch (error) {
        console.error('Error storing products:', error)
        throw error
    }
}
