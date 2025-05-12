export const resetPasswordForm = async (email: string, link:string): Promise<any> => {
    return {
        email: email,
        link: link
    }
}
