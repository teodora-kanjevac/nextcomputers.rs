export class ContactData {
    public fullname: string
    public email: string
    public comment: string

    constructor(data: any) {
        this.fullname = data.fullname
        this.email = data.email
        this.comment = data.comment
    }
}
