export function useRatings(totalReviews: number) {
    const calculateStarPercentage = (ratingCount: number): number => (ratingCount / totalReviews) * 100

    return calculateStarPercentage
}
