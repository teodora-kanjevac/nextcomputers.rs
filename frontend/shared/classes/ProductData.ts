export class ProductData {
    public id: number
    public name: string
    public thumbnail: string

    constructor(product: any) {
        this.id = product.id
        this.name = product.name
        this.thumbnail = product.thumbnail
    }
}
