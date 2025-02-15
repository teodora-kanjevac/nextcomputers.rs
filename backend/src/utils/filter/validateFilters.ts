export const handleFilterValidation = (filters: any): any => {
    if (!filters || typeof filters !== 'object') {
        throw new Error('Invalid filters')
    }

    return filters
}
