export class LogInData {
    public email: string
    public password: string
    public rememberMe: boolean

    constructor(data: any) {
        this.email = data.email
        this.password = data.password
        this.rememberMe = data.rememberMe
    }
}
