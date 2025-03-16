import { ContactDataDTO } from "~/src/DTOs/ContactData.dto"

export const contactForm = async (contactData: ContactDataDTO): Promise<any> => {
    return {
        fullname: contactData.fullname,
        email: contactData.email,
        comment: contactData.comment,
    }
}