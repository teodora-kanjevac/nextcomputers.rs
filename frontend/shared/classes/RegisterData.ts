export class RegisterData {
    public firstName: string
    public lastName: string
    public email: string
    public address: string
    public city: string
    public phone: string
    public password: string
    public confirmPassword: string
    public termsAccepted: boolean

    constructor(data: any) {
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.email = data.email
        this.address = data.address
        this.city = data.city
        this.phone = data.phone
        this.password = data.password
        this.confirmPassword = data.confirmPassword
        this.termsAccepted = data.termsAccepted
    }
}
