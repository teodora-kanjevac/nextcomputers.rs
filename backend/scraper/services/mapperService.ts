import { Category } from '~/scraper/types/Category'
import { Product } from '~/scraper/types/Product'
import {
    processSpecifications,
    processImages,
    calculateSalePrice,
    calculateAdvance,
    parseDeclaration,
    parseSpecifications,
} from '~/scraper/utils/productUtils'
import { getSubcategoryId } from '~/scraper/services/categoryService'
import { renameCategory } from '~/scraper/utils/excludeCategory'
import { processSubcategory } from '~/scraper/utils/usponAPI/subcategoryMapper'

export function CategoryfromAPI(data: { acMainCategory: string; acCategory: string }): Category {
    return new Category(data.acMainCategory, data.acCategory)
}

export async function ProductfromEWEAPI(data: any): Promise<Product | null> {
    const processedImages = processImages(data.urlImages)
    const productSpecs = processSpecifications(data.specification)
    const processedSubcategory = await processSubcategory(data.acSubCategory, data.acCategory, data.acName)
    if (!processedSubcategory) return null
    const subcategoryId = await getSubcategoryId(processedSubcategory)
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
        data.acEan,
        true,
        processedImages,
        productSpecs,
        data.acCountry,
        data.acSupplier,
        undefined,
        subcategoryId
    )
}

export async function ProductfromUsponAPI(data: any): Promise<Product | null> {
    data.b2bcena *= 1.2
    const processedImages = processImages(data.slike)
    const advance = calculateAdvance(data.flag_akcijska_cena)
    const salePrice = calculateSalePrice(data.b2bcena, advance)
    const { supplier, country } = parseDeclaration(data.deklaracija)
    const processedSpecs = parseSpecifications(data.opis)
    const processedSubcategory = await processSubcategory(data.grupa, data.nadgrupa, data.naziv)
    if (!processedSubcategory) return null
    const subcategoryId = await getSubcategoryId(processedSubcategory)

    const isInvalidBrand = /^[\W_]+$/.test(data.proizvodjac)
    const productName = isInvalidBrand ? data.naziv : `${data.proizvodjac.toUpperCase()} ${data.naziv}`
    const productBrand = isInvalidBrand ? 'Nepoznat' : data.proizvodjac.toUpperCase()

    return new Product(
        undefined,
        productName,
        parseInt(data.kolicina),
        undefined,
        productBrand,
        data.b2bcena,
        data.mpcena,
        salePrice,
        advance,
        data.barkod.toString(),
        true,
        processedImages,
        processedSpecs,
        country,
        supplier,
        undefined,
        subcategoryId
    )
}
