import { IUserFullnameDTO } from './interfaces/IUserFullname.dto'

export class UserFullnameDTO implements IUserFullnameDTO {
    firstName: string
    lastName: string

    constructor(user: any) {
        this.firstName = user.first_name
        this.lastName = user.last_name
    }
}
