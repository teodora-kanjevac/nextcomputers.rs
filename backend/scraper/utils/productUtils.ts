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
    return imageUrl
        .filter(imageObj => imageObj.acType !== '3D' && imageObj.acType !== 'video')
        .map(imageObj => ({
            image: imageObj.acImage,
            thumbnail: imageObj.acThumbnail,
        }))
}
