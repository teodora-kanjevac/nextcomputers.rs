import { IResetPasswordDataDTO } from '~/src/DTOs/interfaces/IResetPasswordData.dto'

export class ResetPasswordDataDTO implements IResetPasswordDataDTO {
    email: string
    resetLink: string

    constructor(data: any) {
        this.email = data.email
        this.resetLink = data.resetLink
    }
}
