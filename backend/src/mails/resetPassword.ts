import { ResetPasswordDataDTO } from '~/src/DTOs/ResetPasswordData.dto'

export const resetPasswordForm = async (resetPasswordData: ResetPasswordDataDTO): Promise<any> => {
    return {
        resetPasswordLink: resetPasswordData.resetLink,
    }
}
