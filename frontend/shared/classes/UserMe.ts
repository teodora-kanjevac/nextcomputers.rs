export class UserMe {
    public id: string
    public cartId: string
    public email: string

    constructor(user: any) {
        this.id = user.id
        this.cartId = user.cartId
        this.email = user.email
    }
}
