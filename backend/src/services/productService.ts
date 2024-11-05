import prisma from '~/src/utils/prisma'
import { Product } from '~/src/models/Product'

export const getAllProducts = async (): Promise<Product[]> => {
    const product = await prisma.product.findMany()
    return product.map(product => new Product(product))
}
