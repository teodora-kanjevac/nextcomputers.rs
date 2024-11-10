import { ISubcategoryDTO } from '~/src/DTOs/interfaces/ISubcategory.dto'

export class SubcategoryDTO implements ISubcategoryDTO {
    id: number
    name: string
    categoryId: number
    categoryName: string

    constructor(subcategory: any) {
        this.id = subcategory.subcategory_id
        this.name = subcategory.name
        this.categoryId = subcategory.category_id
        this.categoryName = subcategory.category.name
    }
}
