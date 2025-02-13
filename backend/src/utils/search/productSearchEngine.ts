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
            id: product.product_id,
            name: product.name,
            ean: product.ean || '',
        }))

        await client.index('products').updateSettings({
            rankingRules: ['exactness', 'words', 'proximity'],
            searchableAttributes: ['name', 'ean', 'id'],
            typoTolerance: {
                enabled: true,
                minWordSizeForTypos: {
                    oneTypo: 5,
                    twoTypos: 9,
                },
                disableOnAttributes: ['id', 'ean'],
            },
        })

        const response = await client.index('products').addDocuments(meilisearchProducts)
        console.log('Meilisearch Indexing Response:', response)
    } catch (error) {
        console.error('Error setting up Meilisearch:', error)
    }
}
