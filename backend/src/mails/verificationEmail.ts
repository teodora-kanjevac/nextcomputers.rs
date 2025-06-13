import { RegisterDataDTO } from '~/src/DTOs/RegisterData.dto'

export const registerForm = async (registerData: RegisterDataDTO): Promise<any> => {
    return {
        userFullName: registerData.fullname,
        registrationLink: registerData.link,
    }
}
