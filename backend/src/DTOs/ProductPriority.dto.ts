import { IProductPriorityDTO } from '~/src/DTOs/interfaces/IProductPriority.dto'

export class ProductPriorityDTO implements IProductPriorityDTO {
    productId: number
    newPriority: number

    constructor(productPriority: any) {
        this.productId = productPriority.productId
        this.newPriority = productPriority.newPriority
    }
}