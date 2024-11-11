import prisma from '~/src/utils/prisma'
import { StarRatingDTO } from '~/src/DTOs/StarRating.dto'

export const fetchRatingsData = async () => {
    return prisma.review.groupBy({
        by: ['product_id', 'rating'],
        _count: { rating: true },
    })
}

export const buildRatingsByProduct = (ratingsData: any[]) => {
    return ratingsData.reduce((acc, { product_id, rating, _count }) => {
        if (!acc[product_id]) {
            acc[product_id] = getDefaultProductRatings()
        }

        acc[product_id].totalReviews += _count.rating
        updateStarRating(acc[product_id].starRatings, rating, _count.rating)

        return acc
    }, {} as Record<number, { totalReviews: number; starRatings: StarRatingDTO[] }>)
}

export const getDefaultProductRatings = () => ({
    totalReviews: 0,
    starRatings: [5, 4, 3, 2, 1].map(star => new StarRatingDTO({ star, amount: 0 })),
})

const updateStarRating = (starRatings: StarRatingDTO[], rating: number, count: number) => {
    const starRating = starRatings.find(s => s.star === rating)
    if (starRating) {
        starRating.amount += count
    }
}
