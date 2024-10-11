export const sanitizeId = (str: String) => str.replace(/[^a-zA-Z0-9-_]/g, '-')

export const RoundDecimal = (rating: number) => Math.floor(rating * 10) / 10
