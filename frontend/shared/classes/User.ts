export class User {
    public id: string
    public email: string
    public firstName: string
    public lastName: string
    public address: string
    public city: string
    public phone: string

    constructor(user: any) {
        this.id = user.id
        this.email = user.email
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.address = user.address
        this.city = user.city
        this.phone = user.phone
    }
}
