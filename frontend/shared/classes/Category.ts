export class Category {
    public name: string
    public subcategories: Subcategory[]

    constructor(category: any) {
        this.name = category.name
        this.subcategories = category.subcategories.map((subcategory: any) => new Subcategory(subcategory))
    }
}

export class Subcategory {
    public id: number
    public name: string

    constructor(subcategory: any) {
        this.id = subcategory.id
        this.name = subcategory.name
    }
}
