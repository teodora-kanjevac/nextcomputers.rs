import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import { ProductDetailsDTO } from '~/src/DTOs/ProductDetails.dto'
import { ProductRatingDTO } from '~/src/DTOs/ProductRating.dto'
import {
    buildRatingsByProduct,
    fetchRatingsData,
    getDefaultProductRatings,
} from '~/src/utils/product/productRatingUtils'

export const mapRatingsToProductCards = async (products: any): Promise<ProductCardDTO[]> => {
    const ratingsData = await fetchRatingsData()
    const ratingsByProduct = buildRatingsByProduct(ratingsData)

    return products.map(product => {
        const productRatings = ratingsByProduct[product.product_id] || getDefaultProductRatings()
        return {
            ...new ProductCardDTO(product),
            ratings: new ProductRatingDTO(productRatings),
        }
    })
}

export const mapRatingsToProduct = async (product: any): Promise<ProductDetailsDTO> => {
    const ratingsData = await fetchRatingsData()
    const ratingsByProduct = buildRatingsByProduct(ratingsData)
    const productRatings = ratingsByProduct[product.product_id] ?? getDefaultProductRatings()

    return {
        ...new ProductDetailsDTO(product),
        ratings: new ProductRatingDTO(productRatings),
    }
}
