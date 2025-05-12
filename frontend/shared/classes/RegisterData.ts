export class RegisterData {
    public fullname: string
    public link: string
    public email: string

    constructor(data: any) {
        this.fullname = data.fullname
        this.link = data.link
        this.email = data.email
    }
}
