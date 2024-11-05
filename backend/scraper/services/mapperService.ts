import { Category } from '~/scraper/types/Category'
import { Product } from '~/scraper/types/Product'
import { processSpecifications, processImages } from '~/scraper/utils/productUtils'
import { getSubcategoryId } from '~/scraper/services/categoryService'

export function CategoryfromAPI(data: { acMainCategory: string; acCategory: string }): Category {
    return new Category(data.acMainCategory, data.acCategory)
}

export async function ProductfromAPI(data: any): Promise<Product> {
    const processedImages = processImages(data.urlImages)
    const productSpecs = processSpecifications(data.specification)
    const subcategoryId = await getSubcategoryId(data.acCategory)

    return new Product(
        undefined,
        data.acName,
        data.anStock,
        undefined,
        data.acDept,
        data.anPrice,
        data.anRetailPrice,
        data.acCategory,
        data.acEan,
        processedImages,
        productSpecs,
        data.acCountry,
        data.acSupplier,
        undefined,
        subcategoryId
    )
}
