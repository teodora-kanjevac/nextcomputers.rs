export class Declaration {
    public productName: string
    public supplier?: string
    public originCountry?: string
    public ean: string

    constructor(product: any) {
        this.productName = product.name
        this.supplier = product.supplier
        this.originCountry = product.country
        this.ean = product.ean
    }
}
