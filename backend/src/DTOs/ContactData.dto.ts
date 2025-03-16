import { IContactDataDTO } from "~/src/DTOs/interfaces/IContactData.dto"

export class ContactDataDTO implements IContactDataDTO {
    fullname: string
    email: string
    comment: string

    constructor(data: any) {
        this.fullname = data.fullname
        this.email = data.email
        this.comment = data.comment
    }
}
