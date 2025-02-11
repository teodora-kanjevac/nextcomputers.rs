import FlexSearch from 'flexsearch'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'

export const setupFlexProductSearch = (products: any[]): FlexSearch.Document<any> => {
    const index = new FlexSearch.Document({
        document: {
            id: 'id',
            index: [
                {
                    field: 'name',
                    tokenize: 'full',
                    resolution: 5,
                    preset: 'match',
                    cache: true,
                    optimize: true,
                    context: true,
                },
                {
                    field: 'ean',
                    tokenize: 'strict',
                    optimize: true,
                },
                {
                    field: 'id',
                    tokenize: 'strict',
                    optimize: true,
                },
            ],
        },
    })

    products.forEach(product => {
        index.add({
            id: product.product_id,
            name: product.name.toLowerCase(),
            ean: product.ean,
        })
    })

    return index
}

export const searchProducts = (index: FlexSearch.Document<any>, products: any[], query: string): any[] => {
    const results = index.search(query, { limit: 100, suggest: true })

    if (results.length > 0) {
        const matchedIds = new Set(results.flatMap(result => result.result))

        return products.filter(product => matchedIds.has(product.product_id))
    }

    return []
}
