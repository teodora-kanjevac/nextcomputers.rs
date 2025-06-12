export class ResetPasswordData {
    public password: string
    public confirmPassword: string

    constructor(data: any) {
        this.password = data.password
        this.confirmPassword = data.confirmPassword
    }
}
