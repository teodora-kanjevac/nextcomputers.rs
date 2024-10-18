export class Category {
    public id?: number
    public name: string

    constructor(id: number | undefined, name: string) {
        this.id = id
        this.name = name
    }
}
