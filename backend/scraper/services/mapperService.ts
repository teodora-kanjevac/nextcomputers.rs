import { Category } from '~/scraper/types/Category'
import { Product } from '~/scraper/types/Product'
import { processSpecifications, processImages, calculateSalePrice } from '~/scraper/utils/productUtils'
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
    const salePrice = calculateSalePrice(data.anPrice, data.anPaymentAdvance)

    return new Product(
        undefined,
        `${data.acDept} ${data.acName}`,
        data.anStock,
        undefined,
        data.acDept,
        data.anPrice,
        data.anRetailPrice,
        salePrice,
        data.anPaymentAdvance,
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
