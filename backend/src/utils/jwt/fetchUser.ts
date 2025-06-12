import jwt from 'jsonwebtoken'

export const fetchUserId = (token: string): string => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }
    return decoded.id
}
