import { decode } from 'html-entities'
import { DomUtils, parseDocument } from 'htmlparser2'
import { ProcessedImage } from '~/scraper/types/ProcessedImage'
import { Specifications } from '~/scraper/types/Specifications'

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
                if (key.toLowerCase() !== 'ean') {
                    specifications[key] = value
                }
            }
        }
    }

    return specifications
}

export const parseUsponAndDSCImages = (imageData: { slika: string[] }): ProcessedImage[] => {
    if (!imageData.slika) return []
    const imageUrls = Array.isArray(imageData.slika) ? imageData.slika : [imageData.slika]

    return imageUrls.map(imageUrl => ({
        image: imageUrl,
        thumbnail: imageUrl,
    }))
}
