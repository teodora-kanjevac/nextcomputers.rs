import FlexSearch from 'flexsearch'
import { Subcategory } from '~/src/models/Subcategory'
import prisma from '~/src/utils/prisma'
import { synonymMap } from '~/scraper/utils/uspon&dscAPI/synonymMap'

export const fetchCategories = async (): Promise<Subcategory[]> => {
    const subcategories = await prisma.subcategory.findMany({
        select: {
            subcategory_id: true,
            name: true,
        },
    })

    return subcategories.map(subcategory => new Subcategory(subcategory))
}

const normalizeName = (name: string): string =>
    name
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')

export const setupFlexSearch = (subcategories: Subcategory[]): FlexSearch.Document<any> => {
    const index = new FlexSearch.Document({
        document: {
            id: 'id',
            index: ['name'],
        },
        tokenize: 'full',
        cache: true,
        preset: 'match',
        optimize: true,
        context: true,
    })

    subcategories.forEach(subcategory => {
        const normalizedSubcategoryName = normalizeName(subcategory.name)

        index.add({
            id: subcategory.id,
            name: normalizedSubcategoryName,
        })

        for (const [category, synonyms] of Object.entries(synonymMap)) {
            const normalizedCategory = normalizeName(category)
            const normalizedSynonyms = synonyms.map(normalizeName)

            if (
                normalizedSubcategoryName === normalizedCategory ||
                normalizedSynonyms.includes(normalizedSubcategoryName)
            ) {
                normalizedSynonyms.forEach(synonym => {
                    index.add({
                        id: subcategory.id,
                        name: synonym,
                    })
                })
            }
        }
    })

    return index
}

const findMappedCategory = (names: string[]): string | null => {
    for (const name of names) {
        for (const [category, synonyms] of Object.entries(synonymMap)) {
            const normalizedCategory = normalizeName(category)
            const normalizedSynonyms = synonyms.map(normalizeName)
            const normalizedName = normalizeName(name)

            if (
                normalizedName.includes(normalizedCategory) ||
                normalizedSynonyms.some(synonym => normalizedName.includes(synonym))
            ) {
                return category
            }
        }
    }
    return null
}

export const findClosestCategory = (
    index: FlexSearch.Document<any>,
    subcategories: Subcategory[],
    names: string[]
): string | null => {
    for (const name of names) {
        const results = index.search(normalizeName(name), { limit: 1 })
        if (results.length > 0) {
            const bestMatchId = results[0].result[0]
            const matchedSubcategory = subcategories.find(sub => sub.id === bestMatchId)
            if (matchedSubcategory) {
                return matchedSubcategory.name
            }
        }
    }
    return null
}

export const processSubcategory = async (
    subcategory: string,
    category: string,
    productName: string
): Promise<string | null> => {
    const subcategories = await fetchCategories()
    const index = setupFlexSearch(subcategories)

    const namesToCheck = [subcategory, category, productName]
    const mappedCategory = findMappedCategory(namesToCheck)

    if (mappedCategory) {
        return mappedCategory
    }

    const closestCategory = findClosestCategory(index, subcategories, namesToCheck)

    return closestCategory ?? null
}
