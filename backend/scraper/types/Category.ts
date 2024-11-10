import { isExcluded, renameCategory } from '~/scraper/utils/excludeCategory'

export class Category {
    public category: string
    public subcategory: string

    constructor(category: string, subcategory: string) {
        this.category = category
        this.subcategory = renameCategory(subcategory)
    }

    public isExcluded(): boolean {
        return isExcluded(this.category) || isExcluded(this.subcategory)
    }
}
