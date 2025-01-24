const categoryOrder = [
    'Računari i komponente',
    'Display, Televizori, Projektori, Audio',
    'Štampači, skeneri i potrošni',
    'Mobilni telefoni i oprema',
    'Bela tehnika',
    'Klima uređaji i grejna tela',
    'Kućni aparati i posuđe',
    'Nega tela i zdravlje',
    'Sigurnosna oprema',
    'Fitnes, sport, zabava',
    'Alati i baštenska oprema',
]

export const sortCategories = (mappedCategories: any) => {
    return mappedCategories.sort((a, b) => {
        const indexA = categoryOrder.indexOf(a.name)
        const indexB = categoryOrder.indexOf(b.name)

        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB
        }

        if (indexA !== -1) return -1
        if (indexB !== -1) return 1

        return a.name.localeCompare(b.name)
    })
}
