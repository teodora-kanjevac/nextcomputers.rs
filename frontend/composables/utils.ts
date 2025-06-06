import dayjs from 'dayjs'

export const sanitizeId = (str: String) => str.replace(/[^a-zA-Z0-9-_]/g, '-')

export const roundDecimal = (rating: number) => Math.floor(rating * 10) / 10

export const formatPrice = (price: number): string => {
    return price.toLocaleString('de-DE')
}

export const formatShortDate = (date: any, hour: boolean = false): string => {
    date = new Date(date)
    if (hour) {
        return dayjs(date).format('DD.MM.YYYY. HH:mm')
    }
    return dayjs(date).format('DD.MM.YYYY.')
}

export const formatLongDate = (date: any, hour: boolean = false): string => {
    date = new Date(date)
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }
    if (hour) {
        options.hour = '2-digit'
        options.minute = '2-digit'
        options.hourCycle = 'h23'
    }
    return date.toLocaleDateString('sr-Latn', options)
}

export const checkUser = (isLoggedIn: boolean): void => {
    if (!isLoggedIn) {
        navigateTo('/login')
        return
    }
}
