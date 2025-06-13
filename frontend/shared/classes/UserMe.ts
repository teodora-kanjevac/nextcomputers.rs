export class UserMe {
    public id: string
    public cartId: string
    public email: string
    public isVerified: boolean

    constructor(user: any) {
        this.id = user.id
        this.cartId = user.cartId
        this.email = user.email
        this.isVerified = user.isVerified
    }
}
