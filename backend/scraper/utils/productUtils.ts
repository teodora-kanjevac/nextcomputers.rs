import { Product } from '~/scraper/types/Product'
import { ProcessedImage } from '~/scraper/types/ProcessedImage'
import { Specifications } from '~/scraper/types/Specifications'
import prisma from '~/src/utils/prisma'
import { JSDOM } from 'jsdom'
import { parseDocument } from 'htmlparser2'
import { DomUtils } from 'htmlparser2'
import { decode } from 'html-entities'

export const filterProducts = (products: Product[]): Product[] => {
    return products.filter(product => {
        return !product.isExcluded() && product.imageUrl && product.imageUrl.length > 0
    })
}

export const hideNonExistantProducts = async (identifiers: any): Promise<number> => {
    const allDatabaseProducts = await prisma.product.findMany({
        select: { ean: true },
    })

    const productsToHide = allDatabaseProducts.filter(product => !identifiers.has(product.ean))

    await prisma.product.updateMany({
        where: {
            ean: { in: productsToHide.map(product => product.ean) },
        },
        data: { available: false },
    })

    return productsToHide.length
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

export const processImages = (imageUrl: any): ProcessedImage[] => {
    const sortImagesByConvention = (images: ProcessedImage[]) => {
        return images.sort((a, b) => {
            const getSuffixValue = (filename: string) => {
                const suffix = filename.match(/_(v|\d+)\.jpg$/i)
                if (!suffix) return Number.MAX_SAFE_INTEGER
                return suffix[1] === 'v' ? -1 : parseInt(suffix[1])
            }

            return getSuffixValue(a.image) - getSuffixValue(b.image)
        })
    }

    const processFirstAPIImages = (imageData: any[]): ProcessedImage[] => {
        return imageData
            .filter(imageObj => imageObj.acType !== '3D' && imageObj.acType !== 'video')
            .map(imageObj => ({
                image: imageObj.acImage,
                thumbnail: imageObj.acThumbnail,
            }))
    }

    const processSecondAPIImages = (imageData: { slika: string[] }): ProcessedImage[] => {
        if (!imageData.slika) return []
        const imageUrls = Array.isArray(imageData.slika) ? imageData.slika : [imageData.slika]

        return imageUrls.map(imageUrl => ({
            image: imageUrl,
            thumbnail: imageUrl,
        }))
    }

    if (Array.isArray(imageUrl) && imageUrl.every(item => 'acImage' in item)) {
        const processedImages = processFirstAPIImages(imageUrl)
        return sortImagesByConvention(processedImages)
    } else if (
        (typeof imageUrl === 'object' &&
            'slika' in imageUrl &&
            (typeof imageUrl.slika === 'string' || Array.isArray(imageUrl.slika))) ||
        typeof imageUrl === 'string'
    ) {
        return processSecondAPIImages(imageUrl)
    } else {
        console.error('Unknown image data format:', imageUrl)
        return []
    }
}

export const calculateSalePrice = (price: number, paymentAdvance: number): number => {
    if (paymentAdvance > 0) {
        const markupPercentage = price < 10000 ? 10 : price < 20000 ? 8 : price < 40000 ? 6 : price < 100000 ? 4 : 3

        const salePrice = (price - price * (paymentAdvance / 100)) * (1 + markupPercentage / 100)
        const remainder = salePrice % 1000

        return salePrice - remainder + (remainder < 490 ? 490 : 990)
    }
    return price
}

export const calculateAdvance = (flag: number): number => {
    return flag === 0 ? 2 : 0
}

export function parseDeclaration(declaration: string): { supplier: string; country?: string } {
    let supplier: string = ''
    let country: string = ''

    if (declaration) {
        const dom = new JSDOM(declaration)
        const rows = dom.window.document.querySelectorAll('tr')

        rows.forEach(row => {
            const cells = row.querySelectorAll('td')
            if (cells.length === 2) {
                const key = cells[0].textContent?.trim()
                const value = cells[1].textContent?.trim()

                if (key === 'Uvoznik') {
                    supplier = value
                }
                if (key === 'Zemlja porekla') {
                    country = value
                }
            }
        })
    }

    return { supplier, country }
}

export function parseSpecifications(html: string): Specifications {
    const document = parseDocument(html)
    const table = DomUtils.findOne(el => el.tagName === 'table', document.children)

    if (!table) return {}

    const rows = DomUtils.findAll(el => el.tagName === 'tr', table.children)
    const specifications: Specifications = {}

    for (const row of rows) {
        const cells = DomUtils.findAll(el => el.tagName === 'td', row.children)

        if (cells.length === 2) {
            let key = DomUtils.textContent(cells[0]).trim()
            let value = DomUtils.textContent(cells[1]).trim()

            if (key.endsWith(':')) {
                key = key.slice(0, -1).trim()
            }

            key = decode(key)
            value = decode(value)

            if (key && value) {
                specifications[key] = value
            }
        }
    }

    return specifications
}