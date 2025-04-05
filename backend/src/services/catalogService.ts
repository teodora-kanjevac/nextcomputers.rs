import prisma from '~/src/utils/prisma'

export const fetchCatalog = async () => {
    const catalog = await prisma.product.findMany({
        include: {
            subcategory: {
                select: {
                    name: true,
                },
                include: {
                    category: {
                        select: {
                            name: true,
                        }
                    }
                }
            },
        }
    })

    return catalog;
}