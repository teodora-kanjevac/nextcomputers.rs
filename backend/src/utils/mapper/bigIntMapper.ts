import { ProductCardDTO } from "~/src/DTOs/ProductCard.dto"

export const mapBigInt = async (products: ProductCardDTO[]): Promise<any[]> => {
    const mappedProducts = products.map(product =>
        Object.fromEntries(
            Object.entries(product).map(([key, value]) =>
                typeof value === 'bigint' ? [key, Number(value)] : [key, value]
            )
        )
    )

    return mappedProducts
}