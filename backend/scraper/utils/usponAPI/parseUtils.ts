import { ProcessedImage } from '~/scraper/types/ProcessedImage'
import { JSDOM } from 'jsdom'
import { Specifications } from '~/scraper/types/Specifications'
import { DomUtils, parseDocument } from 'htmlparser2'
import { decode } from 'html-entities'

export const calculateUsponB2BPrice = (flag: number, price: number): number => {
    return flag === 0 ? price * 1.2 * 0.98 : price * 1.2
}

export const calculateAdvance = (flag: number): number => {
    return flag === 0 ? 2 : 0
}

export const parseUsponImages = (imageData: { slika: string[] }): ProcessedImage[] => {
    if (!imageData.slika) return []
    const imageUrls = Array.isArray(imageData.slika) ? imageData.slika : [imageData.slika]

    return imageUrls.map(imageUrl => ({
        image: imageUrl,
        thumbnail: imageUrl,
    }))
}

export function parseUsponDeclaration(declaration: string): { supplier: string; country?: string } {
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

export function parseUsponSpecifications(html: string): Specifications {
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
