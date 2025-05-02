import prisma from '~/src/utils/prisma'
import { client } from '~/src/utils/meiliClient'

export const setupSearchEngine = async () => {
    try {
        const products = await prisma.product.findMany({
            where: { available: true },
            select: { product_id: true, name: true, ean: true },
        })

        if (products.length === 0) {
            console.log('No products found to index.')
            return
        }

        const meilisearchProducts = products.map(product => ({
            product_id: product.product_id.toString(),
            name: product.name,
            ean: product.ean,
        }))

        const index = client.index('products')

        await index.update({ primaryKey: 'product_id' })

        await index.updateSettings({
            rankingRules: ['exactness', 'attribute', 'words', 'proximity'],
            searchableAttributes: ['name', 'ean', 'product_id'],
            typoTolerance: {
                enabled: true,
                minWordSizeForTypos: {
                    oneTypo: 5,
                    twoTypos: 9,
                },
                disableOnAttributes: ['product_id', 'ean'],
            },
        })

        await index.addDocuments(meilisearchProducts)

        console.log('Indexing Successful!')
    } catch (error) {
        console.error('Error setting up Meilisearch:', error)
    }
}
