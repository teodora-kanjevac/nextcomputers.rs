import { JSDOM } from 'jsdom'

export const calculateUsponB2BPrice = (flag: number, price: number): number => {
    return flag === 0 ? price * 1.2 * 0.98 : price * 1.2
}

export const calculateUsponAdvance = (flag: number): number => {
    return flag === 0 ? 2 : 0
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