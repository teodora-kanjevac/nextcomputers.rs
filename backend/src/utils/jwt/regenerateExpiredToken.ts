import { generateToken } from "~/src/services/authService"
import jwt from 'jsonwebtoken'

export const regenerateExpiredEmailToken = async (token: string): Promise <void> => {
        const decoded = jwt.decode(token) as { id: string }
        const newToken = generateToken(decoded?.id, process.env.EMAIL_VERIFY_SECRET as string)
        console.log(newToken)
        //Ovde stavi funkciju da se posalje mail :'D
}

export const regenerateExpiredPasswordToken = async (token: string): Promise <void> => {
    const decoded = jwt.decode(token) as { id: string }
    const newToken = generateToken(decoded?.id, process.env.PASSWORD_VERIFY_SECRET as string)
    console.log(newToken)
    //Ovde stavi funkciju da se posalje mail :'D
}