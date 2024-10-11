export function useRatings(totalReviews: number) {
    const calculatePercentage = (ratingCount: number): number => (ratingCount / totalReviews) * 100

    return calculatePercentage
}
