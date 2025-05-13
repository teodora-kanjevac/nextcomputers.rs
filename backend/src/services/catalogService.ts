import prisma from '~/src/utils/prisma'
import { Catalog } from '~/src/models/Catalog'
import { EXCLUDED_CATEGORIES } from '~/src/utils/filter/globalFilterSettings'

export const fetchCatalog = async () => {
    const catalog = await prisma.product.findMany({
        where: {
            subcategory: {
                NOT: {
                    category: {
                        category_id: { in: Array.from(EXCLUDED_CATEGORIES) },
                    },
                },
            },
        },
        select: {
            product_id: true,
            brand: true,
            sale_price: true,
            ean: true,
            stock: true,
            name: true,
            image_url: true,
            subcategory: {
                select: {
                    name: true,
                    category: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
        },
    })

    const catalogs = catalog.map(catalog => new Catalog(catalog))

    return catalogs
}
