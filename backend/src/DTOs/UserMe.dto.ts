import { IUserMeDTO } from './interfaces/IUserMe.dto'

export class UserMeDTO implements IUserMeDTO {
    id: string
    cartId: string
    email: string

    constructor(user: any) {
        this.id = user.user_id
        this.cartId = user.cart[0].cart_id
        this.email = user.email
    }
}
