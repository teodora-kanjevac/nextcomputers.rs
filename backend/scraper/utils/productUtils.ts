import { Product } from '~/scraper/types/Product'
import { ProcessedImage } from '~/scraper/types/ProcessedImage'
import { Specifications } from '~/scraper/types/Specifications'

export const filterProducts = (products: Product[]): Product[] => {
    return products.filter(product => {
        return !product.isExcluded()
    })
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
