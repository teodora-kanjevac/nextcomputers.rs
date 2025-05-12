import { IRegisterDataDTO } from './interfaces/IRegisterData.dto'

export class RegisterDataDTO implements IRegisterDataDTO {
    fullname: string
    email: string
    link: string

    constructor(data: any) {
        this.fullname = data.fullname
        this.email = data.email
        this.link = data.link
    }
}
