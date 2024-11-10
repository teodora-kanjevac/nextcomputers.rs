const excludedName = 'Outlet'

export const isExcluded = (name: string): boolean => {
    return name === excludedName
}

const renameMap: Map<string, string> = new Map([['Računari EWE', 'Računari']])

export const renameCategory = (name: string): string => {
    if (renameMap.has(name)) {
        return renameMap.get(name) as string
    }
    return name
}
