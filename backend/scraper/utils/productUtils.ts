import { Product } from '~/scraper/types/Product'
import { ProcessedImage } from '~/scraper/types/ProcessedImage'
import prisma from '~/src/utils/prisma'
import { parseEWEImages, sortImagesByConvention } from '~/scraper/utils/eweAPI/parseUtils'
import { parseUsponImages } from '~/scraper/utils/usponAPI/parseUtils'

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
        },
    })

    const productsToHide = allDatabaseProducts.filter(
        product => JSON.stringify(product.image_url).includes(distributor) && !identifiers.has(product.ean)
    )

    await prisma.product.updateMany({
        where: {
            ean: { in: productsToHide.map(product => product.ean) },
        },
        data: { available: false },
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
        return parseUsponImages(imageUrl)
    } else {
        console.error('Unknown image data format:', imageUrl)
        return []
    }
}

export const getCheapestPrice = (newPrice: number, existingPrice: number, productDistributor: string): number => {
    if (productDistributor === 'resource.ewe.rs') {
        return newPrice
    }

    return newPrice < existingPrice ? newPrice : existingPrice
}

export const calculateSalePrice = (price: number): number => {
    const getMarkupPercentage = (price: number): number => {
        switch (true) {
            case price < 10000:
                return 9
            case price < 20000:
                return 7
            case price < 40000:
                return 5
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
    const salePrice = price * (1 + markupPercentage / 100)

    return roundToNearestPricing(salePrice)
}
