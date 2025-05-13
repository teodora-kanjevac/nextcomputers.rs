import { Product } from '~/scraper/types/Product'
import { ProcessedImage } from '~/scraper/types/ProcessedImage'
import { parseEWEImages, sortImagesByConvention } from '~/scraper/utils/eweAPI/parseUtils'
import { parseUsponAndDSCImages } from '~/scraper/utils/uspon&dscAPI/parseUtils'
import { BLACKLISTED_PRODUCTS, FIXED_SHIPPING_PRICE, SHIPPING_SUBCATEGORIES } from '~/scraper/constants/constantValues'

export const filterProducts = (products: Product[]): Product[] => {
    return products.filter(product => {
        return (
            !product.isExcluded() &&
            product.imageUrl &&
            product.imageUrl.length > 0 &&
            product.ean &&
            !BLACKLISTED_PRODUCTS.has(product.ean)
        )
    })
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

export const calculateShippingPrice = (price: number, subcategoryId: number): number => {
    if (SHIPPING_SUBCATEGORIES.has(subcategoryId)) {
        return FIXED_SHIPPING_PRICE
    }

    return price >= 10000 ? 0 : 490
}
