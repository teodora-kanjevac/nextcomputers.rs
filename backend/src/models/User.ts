export class User {
    public id: string
    public email: string
    public firstName: string
    public lastName: string
    public phone: string
    public address: string
    public city: string
    public zipcode: string
    public passwordHash: string
    public createdAt: Date

    constructor(user: any) {
        this.id = user.user_id
        this.email = user.email
        this.firstName = user.first_name
        this.lastName = user.last_name
        this.phone = user.phone_number
        this.address = user.address
        this.city = user.city
        this.zipcode = user.zipcode
        this.passwordHash = user.password_hash
        this.createdAt = user.created_at
    }
}
