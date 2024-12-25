export class OrderProduct {
    public id: number
    public name: string
    public ean: string
    public thumbnail: string

    constructor(product: any) {
        this.id = product.id
        this.name = product.name
        this.ean = product.ean
        this.thumbnail = product.thumbnail
    }
}