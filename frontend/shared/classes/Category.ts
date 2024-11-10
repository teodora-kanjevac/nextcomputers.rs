import type { SubcategoryDTO, CategoryDTO } from '../types/CategoryDTO'

export class Category {
    public name: string
    public subcategories: Subcategory[]

    constructor(category: CategoryDTO) {
        this.name = category.name
        this.subcategories = category.subcategories.map(subcategory => new Subcategory(subcategory))
    }
}

export class Subcategory {
    public id: number
    public name: string

    constructor(subcategory: SubcategoryDTO) {
        this.id = subcategory.id
        this.name = subcategory.name
    }
}
