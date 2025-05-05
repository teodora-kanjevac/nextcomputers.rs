import { IRegisterUserDTO } from '~/src/DTOs/interfaces/IRegisterUser.dto'

export class RegisterUserDTO implements IRegisterUserDTO {
    email: string
    firstName: string
    lastName: string
    address: string
    city: string
    phoneNumber: string
    password: string

    constructor(user: any) {
        this.email = user.email
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.address = user.address
        this.city = user.city
        this.phoneNumber = user.phoneNumber
        this.password = user.password
    }
}
