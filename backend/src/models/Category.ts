import { Subcategory } from "~/src/models/Subcategory"

export class Category {
    public id: number
    public name: string
    public subcategories: Subcategory[]

    constructor(category: any) {
        this.id = category.category_id
        this.name = category.name
        this.subcategories = category.subcategory.map((sub: any) => new Subcategory(sub))
    }
}
