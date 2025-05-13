export class CheckoutData {
    public fullname: string
    public email: string
    public address: string
    public city: string
    public zipcode: string
    public phone: string
    public pib: string

    constructor(data: any) {
        this.fullname = data.fullname
        this.email = data.email
        this.address = data.address
        this.city = data.city
        this.zipcode = data.zipcode
        this.phone = data.phone
        this.pib = data.pib
    }
}
