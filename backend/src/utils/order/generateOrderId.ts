import { randomUUID } from 'crypto'

export function generateOrderIdWithUUID(): string {
    const uuid = randomUUID().replace(/-/g, '')
    const part1 = uuid.slice(0, 3).toUpperCase()
    const part2 = uuid.slice(3, 10).toUpperCase()
    return `${part1}-${part2}`
}
