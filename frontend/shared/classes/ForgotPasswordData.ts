export class ForgotPasswordData {
    email: string
    resetLink: string

    constructor(data: any) {
        this.email = data.email
        this.resetLink = data.resetLink
    }
}
