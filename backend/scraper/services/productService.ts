import prisma from '~/src/utils/prisma'
import IsEqual from 'fast-deep-equal'
import { Product } from '~/scraper/types/Product'
import { deleteNonExistantProducts, filterProducts } from '~/scraper/utils/productUtils'

const BATCH_SIZE = 100

export const storeProducts = async (products: Product[]): Promise<void> => {
    try {
        const validProducts = filterProducts(products)
        const validEans = new Set(validProducts.map(product => product.ean))

        let inserted = 0
        let updated = 0

        for (let i = 0; i < validProducts.length; i += BATCH_SIZE) {
            const batch = validProducts.slice(i, i + BATCH_SIZE)

            const eanList = batch.map(product => product.ean).filter((ean): ean is string => ean !== undefined)

            const existingProducts = await prisma.product.findMany({
                where: { ean: { in: eanList } },
                select: {
                    ean: true,
                    stock: true,
                    price: true,
                    retail_price: true,
                    image_url: true,
                },
            })

            const existingProductsMap = Object.fromEntries(existingProducts.map(product => [product.ean, product]))

            const productsToInsert = batch.filter(product => !existingProductsMap[product.ean])
            const productsToUpdate = batch.filter(product => {
                const existingProduct = existingProductsMap[product.ean]
                return (
                    existingProduct &&
                    (existingProduct.stock !== product.stock ||
                        existingProduct.price.toNumber() !== parseFloat(product.price.toFixed(2)) ||
                        existingProduct.retail_price.toNumber() !== parseFloat(product.retailPrice.toFixed(2)) ||
                        !IsEqual(existingProduct.image_url, product.imageUrl))
                )
            })

            inserted += productsToInsert.length
            updated += productsToUpdate.length

            const updateOperations = productsToUpdate.map(product =>
                prisma.product.update({
                    where: { ean: product.ean },
                    data: {
                        stock: product.stock,
                        price: product.price,
                        retail_price: product.retailPrice,
                        image_url: product.imageUrl,
                    },
                })
            )

            const insertOperations = prisma.product.createMany({
                data: productsToInsert.map(product => ({
                    name: product.name,
                    stock: product.stock,
                    price: product.price,
                    retail_price: product.retailPrice,
                    brand: product.brand,
                    supplier: product.supplier,
                    country: product.country,
                    subcategory_id: product.subcategoryId,
                    ean: product.ean,
                    image_url: product.imageUrl,
                    specification: product.specification,
                })),
                skipDuplicates: true,
            })

            await prisma.$transaction([insertOperations, ...updateOperations])
        }

        const deleted = await deleteNonExistantProducts(validEans)

        console.log('Products stored successfully.')
        console.log('Total products inserted:', inserted)
        console.log('Total products updated:', updated)
        console.log('Total products deleted:', deleted)
    } catch (error) {
        console.error('Error storing products:', error)
        throw error
    }
}
