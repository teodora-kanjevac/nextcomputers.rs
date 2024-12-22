import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { htmlToText } from 'html-to-text'
import { MailOptionsDTO } from '~/src/DTOs/MailOptions.dto'
import { orderConfirmationData } from '~/src/mails/orderConfirmation'
import { template } from '~/src/mails/templates/orderConfirmationTemplate'
import { OrderDataDTO } from '~/src/DTOs/OrderData.dto'
import { fetchQRCode } from '~/src/handler/IPSApiHandler'
import { IPSOptionsDTO } from '~/src/DTOs/IPSOptions.dto'

dotenv.config()

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST_TEST as string,
    port: Number(process.env.MAIL_PORT_TEST),
    secure: false,
    auth: {
        user: process.env.MAIL_USER_TEST as string,
        pass: process.env.MAIL_PASS_TEST as string,
    },
})

export async function sendOrderConfirmationEmail(orderData: OrderDataDTO): Promise<any> {
    let qrAttachment: { filename: string; content: Buffer; contentType: string } | null = null

    if (orderData.paymentMethod === 'advance') {
        const qrImage = await fetchQRCode(new IPSOptionsDTO(orderData))
        qrAttachment = {
            filename: 'uplata-qr-code.png',
            content: qrImage,
            contentType: 'image/png',
        }
    }

    const formattedOrderData = await orderConfirmationData(orderData)

    const htmlContent = template(formattedOrderData)

    const emailOptions: MailOptionsDTO = {
        from: process.env.MAIL_FROM as string,
        to: orderData.form.email,
        bcc: [process.env.MAIL_TO as string, process.env.MAIL_FROM as string].join(', '),
        subject: `Potvrda narudžbine - ${orderData.orderId}`,
        text: htmlToText(htmlContent),
        html: htmlContent,
        ...(qrAttachment ? { attachments: [qrAttachment] } : {}),
    }

    const mailInfo = await sendAMail(emailOptions)
    return mailInfo
}

async function sendAMail(mailOptions: MailOptionsDTO): Promise<any> {
    const info = await transporter.sendMail(mailOptions)
    return info
}
