import { client } from '~/src/utils/meiliClient'

export async function fetchMatchedProductIds(searchTerm: string): Promise<number[]> {
    const searchResults = await client.index('products').search(searchTerm, {
        matchingStrategy: 'all',
        limit: 10000,
        attributesToRetrieve: ['product_id'],
    })

    if (searchResults.hits.length === 0) {
        return []
    }

    return searchResults.hits.map(p => Number(p.product_id))
}
