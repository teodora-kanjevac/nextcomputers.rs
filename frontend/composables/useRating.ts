import type { Rating } from '~/shared/types/rating';

export function useRatings(ratings: Rating[], totalReviews: number) {
    const averageRating = computed(() =>
        ratings.reduce((total, rating) => total + (rating.stars * rating.count), 0) / totalReviews
    );

    const calculatePercentage = (ratingCount: number): number =>
        (ratingCount / totalReviews) * 100;

    return { averageRating, calculatePercentage };
}