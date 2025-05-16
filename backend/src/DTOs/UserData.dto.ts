import { IUserDataDTO } from './interfaces/IUserData.dto'

export class UserDataDTO implements IUserDataDTO {
    firstName: string
    lastName: string
    phone: string
    address: string
    city: string
    zipcode: string

    constructor(user: any) {
        this.firstName = user.first_name
        this.lastName = user.last_name
        this.phone = user.phone_number
        this.address = user.address
        this.city = user.city
        this.zipcode = user.zipcode
    }
}
