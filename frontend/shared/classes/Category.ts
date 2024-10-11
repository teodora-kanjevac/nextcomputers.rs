import type { SubcategoryDTO, CategoryDTO } from '../types/CategoryDTO'

export class Category {
    public name: string
    public subcategories: Subcategory[]

    constructor({ name, subcategories }: CategoryDTO) {
        this.name = name
        this.subcategories = subcategories.map(subcategory => new Subcategory(subcategory))
    }
}

export class Subcategory {
    public id: number
    public name: string

    constructor({ id, name }: SubcategoryDTO) {
        this.id = id
        this.name = name
    }
}
