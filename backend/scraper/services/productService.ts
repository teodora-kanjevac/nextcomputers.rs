import prisma from '~/src/utils/prisma'
import { Product } from '~/scraper/types/Product'
import { filterProducts } from '~/scraper/utils/productUtils'

const BATCH_SIZE = 100

export const storeProducts = async (products: Product[]): Promise<void> => {
    try {
        const validProducts = filterProducts(products)

        for (let i = 0; i < validProducts.length; i += BATCH_SIZE) {
            const batch = validProducts.slice(i, i + BATCH_SIZE)

            const eanList = batch.map(product => product.ean).filter((ean): ean is string => ean !== undefined)

            const existingProducts = await prisma.product.findMany({
                where: { ean: { in: eanList } },
                select: { ean: true },
            })

            const existingEans = existingProducts.map(product => product.ean)

            const productsToUpdate = batch.filter(product => existingEans.includes(product.ean))
            const productsToInsert = batch.filter(product => !existingEans.includes(product.ean))

            const updateOperations = productsToUpdate.map(product =>
                prisma.product.update({
                    where: { ean: product.ean },
                    data: {
                        name: product.name,
                        stock: product.stock,
                        price: product.price,
                        retail_price: product.retailPrice,
                        brand: product.brand,
                        supplier: product.supplier,
                        country: product.country,
                        subcategory_id: product.subcategoryId,
                        image_url: product.imageUrl,
                        specification: product.specification,
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

            await prisma.$transaction([...updateOperations, insertOperations])
        }

        console.log('Products stored successfully.')
    } catch (error) {
        console.error('Error storing products:', error)
        throw error
    }
}
