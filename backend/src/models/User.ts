export class User {
    public id: string
    public email: string
    public createdAt: Date
    public firstName: string
    public lastName: string
    public address: string
    public city: string
    public phoneNumber: string
    public passwordHash: string

    constructor(user: any) {
        this.id = user.user_id
        this.email = user.email
        this.createdAt = user.created_at
        this.firstName = user.first_name
        this.lastName = user.last_name
        this.address = user.address
        this.city = user.city
        this.phoneNumber = user.phone_number
        this.passwordHash = user.password_hash
    }
}
