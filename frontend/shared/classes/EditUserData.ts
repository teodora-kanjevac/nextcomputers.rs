export class EditUserData {
    public firstName: string
    public lastName: string
    public address: string
    public city: string
    public phone: string
    public zipcode: string

    constructor(data: any) {
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.address = data.address
        this.city = data.city
        this.phone = data.phone
        this.zipcode = data.zipcode
    }
}
