const excludedName = 'Outlet'

export const isExcluded = (name: string): boolean => {
    return name.toLowerCase().includes(excludedName.toLowerCase())
}

const renameMap: Map<string, string> = new Map([
    ['Računari EWE', 'Računari'],
    ['IT', 'Računari i komponente'],
])

export const renameCategory = (name: string): string => {
    if (renameMap.has(name)) {
        return renameMap.get(name) as string
    }
    return name
}
