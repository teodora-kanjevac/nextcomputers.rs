import type { DeclarationDTO } from '../types/ProductDTO'

export class Declaration {
    public productName: string
    public supplier: string
    public originCountry: string
    public ean: string

    constructor({ productName, supplier, originCountry, ean }: DeclarationDTO) {
        this.productName = productName
        this.supplier = supplier
        this.originCountry = originCountry
        this.ean = ean
    }
}
