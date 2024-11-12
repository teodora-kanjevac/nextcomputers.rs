export class User {
    public id: string
    public username: string
    public email: string
    public createdAt: Date
    public firstName: string
    public lastName: string
    public address: string
    public phoneNumber: string

    constructor(user: any) {
        this.id = user.user_id
        this.username = user.username
        this.email = user.email
        this.createdAt = user.created_at
        this.firstName = user.first_name
        this.lastName = user.last_name
        this.address = user.address
        this.phoneNumber = user.phone_number
    }
}
