import { IIPSOptionsDTO } from '~/src/DTOs/interfaces/IIPSOptions.dto'

export class IPSOptionsDTO implements IIPSOptionsDTO {
    K: string
    V: string
    C: string
    R: string
    N: string
    I: string
    SF: string
    S: string

    constructor(ipsOptions: any) {
        this.K = 'PR'
        this.V = '01'
        this.C = '1'
        this.R = process.env.ACC_NUMBER as string
        this.N = 'NEMANJA STOJANOVIC PREUZETNIK NIS (PALILULA)'
        this.I = `RSD${ipsOptions.prices.totalPrice},00`
        this.SF = '289'
        this.S = ipsOptions.orderId
    }
}
