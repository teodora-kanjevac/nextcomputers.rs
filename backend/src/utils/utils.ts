export const calculateOffset = (page: number, pageSize: number): number => {
    return Math.max((page - 1) * pageSize, 0)
}
