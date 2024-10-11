import type { FilterCategoryDTO, FilterDTO } from '../types/FilterCategoryDTO'

export class FilterCategory {
    public name: string
    public filters: Filter[]

    constructor({ name, filters }: FilterCategoryDTO) {
        this.name = name
        this.filters = filters.map(filter => new Filter(filter))
    }
}

export class Filter {
    public name: string;
    public amount: number;

    constructor({ name, amount }: FilterDTO) {
        this.name = name
        this.amount = amount
    }
}
