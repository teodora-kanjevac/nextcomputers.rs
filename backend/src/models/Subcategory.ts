export class Subcategory {
    public id?: number
    public name: string
    public categoryId?: number

    constructor(id: number | undefined, name: string, categoryId: number | undefined) {
        this.id = id
        this.name = name,
        this.categoryId = categoryId
    }
}
