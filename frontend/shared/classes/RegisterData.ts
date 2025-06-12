export class RegisterData {
    public fullname: string
    public email: string

    constructor(data: any) {
        this.fullname = data.fullname
        this.email = data.email
    }
}
