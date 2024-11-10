export class Subcategory {
    public id: number
    public name: string
    public categoryId: number

    constructor(subcategory: any) {
        this.id = subcategory.subcategory_id
        this.name = subcategory.name
        this.categoryId = subcategory.category_id
    }
}
