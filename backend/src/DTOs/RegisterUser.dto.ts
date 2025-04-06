import { IRegisterUserDTO } from "./interfaces/IRegisterUser.dto"

export class RegisterUserDTO implements IRegisterUserDTO {
    email: string
    firstName: string
    lastName: string
    address: string
    phoneNumber: string
    password: string

    constructor(registerUser: any) {
        this.email = registerUser.email
        this.firstName = registerUser.firstName
        this.lastName = registerUser.lastName
        this.address = registerUser.address
        this.phoneNumber = registerUser.phoneNumber
        this.password = registerUser.password
    }
}