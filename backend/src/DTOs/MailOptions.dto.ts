import { IMailOptionsDTO } from '~/src/DTOs/interfaces/IMailOptions.dto'

export class MailOptionsDTO implements IMailOptionsDTO {
    from: string
    to: string
    bcc?: string
    subject: string
    text: string
    html: string

    constructor(mailOptions: any) {
        this.from = mailOptions.from
        this.to = mailOptions.to
        this.bcc = mailOptions.bcc
        this.subject = mailOptions.subject
        this.text = mailOptions.text
        this.html = mailOptions.html
    }
}
