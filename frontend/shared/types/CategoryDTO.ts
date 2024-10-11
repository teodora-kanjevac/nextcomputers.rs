export interface SubcategoryDTO {
    id: number
    name: string
}

export interface CategoryDTO {
    name: string
    subcategories: SubcategoryDTO[]
}
