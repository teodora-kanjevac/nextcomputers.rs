import { Filter } from '~/src/models/Filter'

export class FilterCategory {
    public name: string
    public filters: Filter[]

    constructor(filterCategory: any) {
        this.name = filterCategory.brand
        this.filters = filterCategory.filters.map(filter => new Filter(filter))
    }
}
