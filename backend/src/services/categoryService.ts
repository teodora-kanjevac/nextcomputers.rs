import prisma from '~/src/utils/prisma'

export const fetchCategories = async () => {
    return await prisma.category.findMany({
        include: {
            subcategory: true,
        },
    })
}
