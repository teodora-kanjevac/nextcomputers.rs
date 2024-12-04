export const calculateDiscountPercentage = (salePrice: number, discountPrice: number | undefined): number | undefined => {
    if (discountPrice) {
        return Math.round(((salePrice - discountPrice) / salePrice) * 100)
    }
}