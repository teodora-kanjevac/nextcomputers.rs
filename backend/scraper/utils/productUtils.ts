import { Product } from '~/scraper/types/Product'
import { ProcessedImage } from '~/scraper/types/ProcessedImage'
import prisma from '~/src/utils/prisma'
import { parseEWEImages, sortImagesByConvention } from '~/scraper/utils/eweAPI/parseUtils'
import { parseUsponAndDSCImages } from '~/scraper/utils/uspon&dscAPI/parseUtils'

export const filterProducts = (products: Product[]): Product[] => {
    return products.filter(product => {
        return !product.isExcluded() && product.imageUrl && product.imageUrl.length > 0
    })
}

export const hideNonExistantProducts = async (identifiers: any, distributor: string): Promise<number> => {
    const allDatabaseProducts = await prisma.product.findMany({
        select: {
            ean: true,
            image_url: true,
            stock: true,
        },
    })

    const productsNotInApi = allDatabaseProducts.filter(
        product => JSON.stringify(product.image_url).includes(distributor) && !identifiers.has(product.ean)
    )

    const productsWithZeroStock = allDatabaseProducts.filter(
        product =>
            JSON.stringify(product.image_url).includes(distributor) &&
            identifiers.has(product.ean) &&
            product.stock === 0
    )

    const toHide = [...productsNotInApi, ...productsWithZeroStock]
    const productsToHide = [...new Map(toHide.map(item => [item.ean, item])).values()]

    await prisma.product.updateMany({
        where: {
            ean: { in: productsToHide.map(product => product.ean) },
        },
        data: { available: false, stock: 0 },
    })

    return productsToHide.length
}

export const parseImages = (imageUrl: any): ProcessedImage[] => {
    if (Array.isArray(imageUrl) && imageUrl.every(item => 'acImage' in item)) {
        const processedImages = parseEWEImages(imageUrl)
        return sortImagesByConvention(processedImages)
    } else if (
        (typeof imageUrl === 'object' &&
            'slika' in imageUrl &&
            (typeof imageUrl.slika === 'string' || Array.isArray(imageUrl.slika))) ||
        typeof imageUrl === 'string'
    ) {
        return parseUsponAndDSCImages(imageUrl)
    } else {
        console.error('Unknown image data format:', imageUrl)
        return []
    }
}

export const getCheapestPrice = (
    newPrice: number,
    newStock: number,
    existingPrice: number,
    existingStock: number,
    productDistributor: string
): number => {
    if (productDistributor === 'resource.ewe.rs' || existingStock === 0) {
        return newPrice
    }

    return newPrice < existingPrice && newStock > 0 ? newPrice : existingPrice
}

export const calculateSalePrice = (price: number): number => {
    const getMarkupPercentage = (price: number): number => {
        switch (true) {
            case price < 10000:
                return 10
            case price < 20000:
                return 7
            case price < 40000:
                return 6
            case price < 70000:
                return 4.5
            case price < 100000:
                return 4
            default:
                return 3
        }
    }

    const roundToNearestPricing = (salePrice: number): number => {
        const remainder = salePrice % 1000
        return salePrice - remainder + (remainder < 490 ? 490 : 990)
    }

    const markupPercentage = getMarkupPercentage(price)
    let salePrice = price * (1 + markupPercentage / 100)

    if (markupPercentage === 3) {
        salePrice += 490
    }

    return roundToNearestPricing(salePrice)
}
