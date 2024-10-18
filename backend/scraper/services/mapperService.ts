import { Category } from '~/scraper/types/Category'
import { Product } from '~/src/models/Product'
import { getSubcategoryId } from '~/scraper/services/categoryService'

export function CategoryfromAPI(data: { acMainCategory: string; acCategory: string }): Category {
    return new Category(data.acMainCategory, data.acCategory)
}

export async function ProductfromAPI(data: any): Promise<Product> {
    const subcategoryId = await getSubcategoryId(data.acCategory);
    return new Product(
        undefined,
        data.acName,
        data.anStock,
        undefined,
        data.acDept,
        data.anPrice,
        data.anRetailPrice,
        data.urlImages,
        data.specification,
        data.acEan,
        data.acCountry,
        data.acSupplier,
        undefined,
        subcategoryId
    );
}

