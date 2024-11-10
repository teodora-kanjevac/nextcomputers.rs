import { Category } from '~/scraper/types/Category'
import { Product } from '~/scraper/types/Product'
import { processSpecifications, processImages } from '~/scraper/utils/productUtils'
import { getSubcategoryId } from '~/scraper/services/categoryService'
import { renameCategory } from '~/scraper/utils/excludeCategory';

export function CategoryfromAPI(data: { acMainCategory: string; acCategory: string }): Category {
    return new Category(data.acMainCategory, data.acCategory)
}

export async function ProductfromAPI(data: any): Promise<Product> {
    const processedImages = processImages(data.urlImages)
    const productSpecs = processSpecifications(data.specification)
    const subcategoryName = renameCategory(data.acCategory)
    const subcategoryId = await getSubcategoryId(subcategoryName)

    return new Product(
        undefined,
        data.acName,
        data.anStock,
        undefined,
        data.acDept,
        data.anPrice,
        data.anRetailPrice,
        subcategoryName,
        data.acEan,
        processedImages,
        productSpecs,
        data.acCountry,
        data.acSupplier,
        undefined,
        subcategoryId
    )
}
