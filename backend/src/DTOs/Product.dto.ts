import { IProductDTO } from '~/src/DTOs/interfaces/IProduct.dto'

export class ProductDTO implements IProductDTO {
    id: number
    name: string
    price: number
    brand: string
    specification?: any
    ean: string
    country?: string;
    supplier?: string;
    discountPrice?: number;
    subcategoryId?: number;

    constructor(product: any) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.brand = product.brand;
        this.specification = product.specification;
        this.ean = product.ean
        this.country = product.country
        this.supplier = product.supplier
        this.discountPrice = product.discountPrice
        this.subcategoryId = product.subcategoryId
    }
    
    getFormattedPrice(): string {
        return `${this.price.toFixed(2)}`;
    }
}
