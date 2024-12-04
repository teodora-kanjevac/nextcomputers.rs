export const handleFilterValidation = (
    filters: any,
    sortBy: string,
    order: string,
    allowedSortBy: string[] = ['name', 'discountPercentage', 'sale_price', 'rating'],
    allowedOrder: string[] = ['asc', 'desc'],
    defaultSortBy: string = 'name',
    defaultOrder: string = 'asc'
): { filters: any; sortBy: string; order: string } => {
    if (!filters || typeof filters !== 'object') {
        throw new Error('Invalid filters')
    }

    if (!allowedSortBy.includes(sortBy) || !sortBy.trim()) {
        sortBy = defaultSortBy
    }

    if (!allowedOrder.includes(order) || !order.trim()) {
        order = defaultOrder
    }

    return { filters, sortBy, order }
}
