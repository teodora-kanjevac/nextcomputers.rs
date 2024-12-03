export const sanitizeId = (str: String) => str.replace(/[^a-zA-Z0-9-_]/g, '-')

export const roundDecimal = (rating: number) => Math.floor(rating * 10) / 10

export const formatPrice = (price: number): string => {
    return price.toLocaleString('de-DE')
}