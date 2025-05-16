export class UserMe {
    public id: string
    public email: string

    constructor(user: any) {
        this.id = user.id
        this.email = user.email
    }
}
