export interface IMailOptionsDTO {
    from: string
    to: string
    bcc?: string
    subject: string
    text: string
    html: string
}
