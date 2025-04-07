import { ILoginUserDTO } from '~/src/DTOs/interfaces/ILoginUser.dto'

export class LoginUserDTO implements ILoginUserDTO {
    email: string
    password: string

    constructor(user: any) {
        this.email = user.email
        this.password = user.password
    }
}