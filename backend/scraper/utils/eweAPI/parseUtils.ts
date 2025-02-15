import { ProcessedImage } from '~/scraper/types/ProcessedImage'
import { Specifications } from '~/scraper/types/Specifications'

export const calculateEWEB2BPrice = (advance: number, price: number): number => {
    return advance > 0 ? price - price * (advance / 100) : price
}

export const parseEWEImages = (imageData: any[]): ProcessedImage[] => {
    return imageData
        .filter(imageObj => imageObj.acType !== '3D' && imageObj.acType !== 'video')
        .map(imageObj => ({
            image: imageObj.acImage,
            thumbnail: imageObj.acThumbnail,
        }))
}

export const parseEWESpecifications = (specification: any[]): Specifications => {
    const specs: Specifications = {}

    specification.forEach(specGroup => {
        specGroup.filterSet.forEach((filter: { acFilterSet: string; filters: string }) => {
            specs[filter.acFilterSet] = filter.filters
        })
    })

    return specs
}

export const sortImagesByConvention = (images: ProcessedImage[]) => {
    return images.sort((a, b) => {
        const getSuffixValue = (filename: string) => {
            const suffix = filename.match(/_(v|\d+)\.jpg$/i)
            if (!suffix) return Number.MAX_SAFE_INTEGER
            return suffix[1] === 'v' ? -1 : parseInt(suffix[1])
        }

        return getSuffixValue(a.image) - getSuffixValue(b.image)
    })
}
