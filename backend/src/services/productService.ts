import prisma from '~/src/utils/prisma'
import { Product } from '~/src/models/Product'
import { ProductDetailsDTO } from '~/src/DTOs/ProductDetails.dto'
import { ProductCardDTO } from '~/src/DTOs/ProductCard.dto'
import { mapRatingsToProduct, mapRatingsToProductCards } from '~/src/utils/mapper/ratingMapper'
import { isNaNObject, isNullObject } from '~/src/utils/ErrorHandling'
import { fetchSortedProducts } from '~/src/utils/product/productSortingUtils'
import { calculateOffset } from '~/src/utils/utils'
import { productEans } from '~/src/utils/product/productShowcaseEans'

export const fetchProducts = async (): Promise<Product[]> => {
    const product = await prisma.product.findMany()
    return product.map(product => new Product(product))
}

export const fetchProductById = async (productId: number): Promise<Product> => {
    const product = await prisma.product.findUnique({
        where: { product_id: productId },
    })

    isNullObject('product', productId, product)

    return new Product(product)
}

export const fetchShowcaseProducts = async (): Promise<ProductCardDTO[]> => {
    const products = await prisma.product.findMany({
        where: {
            ean: {
                in: productEans,
            },
        },
    })

    return mapRatingsToProductCards(products)
}

export const fetchProductDetails = async (productId: number): Promise<ProductDetailsDTO> => {
    isNaNObject('product', productId)

    const product = await prisma.product.findUnique({
        where: { product_id: productId },
    })

    isNullObject('product', productId, product)

    return mapRatingsToProduct(product)
}

export const fetchProductsWithRatings = async (
    sortBy: string = 'product_id',
    order: string = 'asc',
    page: number = 1,
    pageSize: number = 15
): Promise<ProductCardDTO[]> => {
    const offset = calculateOffset(page, pageSize)

    const products = await fetchSortedProducts(sortBy, order, pageSize, offset)

    return mapRatingsToProductCards(products)
}

export const fetchProductsWithRatingsForCategory = async (
    subcategoryId: number,
    sortBy: string = 'name',
    order: string = 'asc',
    page: number = 1,
    pageSize: number = 15
): Promise<ProductCardDTO[]> => {
    const offset = calculateOffset(page, pageSize)

    isNaNObject('subcategory', subcategoryId)

    const products = await fetchSortedProducts(sortBy, order, pageSize, offset, subcategoryId)

    return mapRatingsToProductCards(products)
}
