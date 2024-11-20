import { Product } from '~/scraper/types/Product'
import { ProcessedImage } from '~/scraper/types/ProcessedImage'
import { Specifications } from '~/scraper/types/Specifications'
import prisma from '~/src/utils/prisma'

export const filterProducts = (products: Product[]): Product[] => {
    return products.filter(product => {
        return !product.isExcluded() && product.imageUrl && product.imageUrl.length > 0
    })
}

export const deleteNonExistantProducts = async (validEans: any): Promise<number> => {
    const allDatabaseProducts = await prisma.product.findMany({
        select: { ean: true },
    })

    const productsToDelete = allDatabaseProducts.filter(product => !validEans.has(product.ean))

    const deleteOperations = productsToDelete.map(product =>
        prisma.product.delete({
            where: { ean: product.ean },
        })
    )

    await Promise.all(deleteOperations)

    return productsToDelete.length
}

export const processSpecifications = (specification: any[]): Specifications => {
    const specs: Specifications = {}

    specification.forEach(specGroup => {
        specGroup.filterSet.forEach((filter: { acFilterSet: string; filters: string }) => {
            specs[filter.acFilterSet] = filter.filters
        })
    })

    return specs
}

export const processImages = (imageUrl: any[]): ProcessedImage[] => {
    const sortImagesByConvention = (images: { image: string; thumbnail: string }[]) => {
        return images.sort((a, b) => {
            const getSuffixValue = (filename: string) => {
                const suffix = filename.match(/_(v|\d+)\.jpg$/i)
                if (!suffix) return Number.MAX_SAFE_INTEGER
                return suffix[1] === 'v' ? -1 : parseInt(suffix[1])
            }

            return getSuffixValue(a.image) - getSuffixValue(b.image)
        })
    }

    const processedImages = imageUrl
        .filter(imageObj => imageObj.acType !== '3D' && imageObj.acType !== 'video')
        .map(imageObj => ({
            image: imageObj.acImage,
            thumbnail: imageObj.acThumbnail,
        }))

    return sortImagesByConvention(processedImages)
}

export const calculateSalePrice = (price: number, paymentAdvance: number): number => {
    const markupPercentage = 
        price < 10000 ? 10 : 
        price < 20000 ? 8 : 
        price < 40000 ? 6 : 
        price < 100000 ? 4 : 3

    const salePrice = (price - price * (paymentAdvance / 100)) * (1 + markupPercentage / 100)
    const remainder = salePrice % 1000

    return salePrice - remainder + (remainder < 490 ? 490 : 990)
}
