import { Category } from '~/scraper/types/Category'
import { Product } from '~/scraper/types/Product'
import { calculateSalePrice, parseImages } from '~/scraper/utils/productUtils'
import { getSubcategoryId } from '~/scraper/services/categoryService'
import { processSubcategory } from '~/scraper/utils/usponAPI/subcategoryMapper'
import { calculateEWEB2BPrice, parseEWESpecifications } from '~/scraper/utils/eweAPI/parseUtils'
import {
    calculateAdvance,
    calculateUsponB2BPrice,
    parseUsponDeclaration,
    parseUsponSpecifications,
} from '~/scraper/utils/usponAPI/parseUtils'
import { EWEApiProduct } from '~/scraper/types/EWEApiProduct'
import { UsponApiProduct } from '~/scraper/types/UsponApiProduct'

export function CategoryfromAPI(data: { acMainCategory: string; acCategory: string }): Category {
    return new Category(data.acMainCategory, data.acCategory)
}

export async function ProductfromEWEAPI(data: EWEApiProduct): Promise<Product | null> {
    const processedImages = parseImages(data.urlImages)
    const productSpecs = parseEWESpecifications(data.specification)
    const processedSubcategory = await processSubcategory(data.acSubCategory, data.acCategory, data.acName)
    if (!processedSubcategory) return null
    const subcategoryId = await getSubcategoryId(processedSubcategory)
    const b2bPrice = calculateEWEB2BPrice(data.anPaymentAdvance, data.anPrice)
    const salePrice = calculateSalePrice(b2bPrice)

    return new Product(
        undefined,
        `${data.acDept} ${data.acName}`,
        data.anStock,
        undefined,
        data.acDept,
        b2bPrice,
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

export async function ProductfromUsponAPI(data: UsponApiProduct): Promise<Product | null> {
    const processedImages = parseImages(data.slike)
    const processedSpecs = parseUsponSpecifications(data.opis)
    const { supplier, country } = parseUsponDeclaration(data.deklaracija)
    const processedSubcategory = await processSubcategory(data.grupa, data.nadgrupa, data.naziv)
    if (!processedSubcategory) return null
    const subcategoryId = await getSubcategoryId(processedSubcategory)
    const advance = calculateAdvance(data.flag_akcijska_cena)
    const b2bPrice = calculateUsponB2BPrice(data.flag_akcijska_cena, data.b2bcena)
    const salePrice = calculateSalePrice(b2bPrice)

    const isInvalidBrand = /^[\W_]+$/.test(data.proizvodjac)
    const productName = isInvalidBrand ? data.naziv : `${data.proizvodjac.toUpperCase()} ${data.naziv}`
    const productBrand = isInvalidBrand ? 'Nepoznat' : data.proizvodjac.toUpperCase()

    return new Product(
        undefined,
        productName,
        parseInt(data.kolicina),
        undefined,
        productBrand,
        b2bPrice,
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
