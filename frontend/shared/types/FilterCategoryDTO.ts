export interface FilterCategoryDTO {
    name: string
    filters: FilterDTO[]
}

export interface FilterDTO {
    name: string;
    amount: number;
}