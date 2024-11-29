export class Filter {
    public name: string
    public amount: number

    constructor(filter: any) {
        this.name = filter.name
        this.amount = filter.amount
    }
}
