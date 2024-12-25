import type { ProductCardDTO } from "~/shared/types/ProductCardDTO"

export const chunkSize = ref(3)
export const productChunks = ref<ProductCardDTO[][]>([])

const chunkProducts = (products: ProductCardDTO[], chunkSize: number): ProductCardDTO[][] => {
    const chunks: ProductCardDTO[][] = []
    for (let i = 0; i < products.length; i += chunkSize) {
        chunks.push(products.slice(i, i + chunkSize))
    }
    return chunks
}

export const updateProductChunks = (products: ProductCardDTO[]) => {
    productChunks.value = chunkProducts(products, chunkSize.value)
}