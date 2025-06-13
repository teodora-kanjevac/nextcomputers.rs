import { IUserStatisticsDTO } from './interfaces/IUserStatistics.dto'

export class UserStatisticsDTO implements IUserStatisticsDTO {
    public userId: string
    public wishlistItems: number
    public orders: number
    public reviews: number
    public canceledOrders: number

    constructor(statistics: any) {
        this.userId = statistics.userId
        this.wishlistItems = statistics.wishlistItems
        this.orders = statistics.orders
        this.reviews = statistics.reviews
        this.canceledOrders = statistics.canceledOrders
    }
}
