import { IUserMeDTO } from './interfaces/IUserMe.dto'

export class UserMeDTO implements IUserMeDTO {
    id: string
    email: string

    constructor(user: any) {
        this.id = user.user_id
        this.email = user.email
    }
}
