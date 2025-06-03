import prisma from '~/src/utils/prisma'
import { ProductPriorityDTO } from '~/src/DTOs/ProductPriority.dto'
import { Wishlist } from '~/src/models/Wishlist'
import { fetchUserId } from '~/src/utils/jwt/fetchUser'
import { WishlistDTO } from '~/src//DTOs/Wishlist.dto'
import { WishlistItemDTO } from '~/src//DTOs/WishlistItem.dto'

export const insertWishlist = async (token: string, name: string): Promise<Wishlist> => {
    const userId = fetchUserId(token)

    const newWishlist = await prisma.wishlist.create({
        data: {
            user_id: userId,
            name: name,
            is_default: false,
        },
    })
    return new Wishlist(newWishlist)
}

export const deleteWishlist = async (token: string, wishlistId: string): Promise<WishlistDTO> => {
    const userId = fetchUserId(token)

    const wishlist = await prisma.wishlist.delete({
        where: {
            user_id: userId,
            wishlist_id: wishlistId,
        },
    })

    return new WishlistDTO(wishlist)
}

export const changeWishlistName = async (token: string, wishlistId: string, name: string): Promise<WishlistDTO> => {
    const userId = fetchUserId(token)

    const wishlist = await prisma.wishlist.update({
        where: {
            user_id: userId,
            wishlist_id: wishlistId,
        },
        data: { name },
    })

    return new WishlistDTO(wishlist)
}

export const fetchAllWishlists = async (token: string): Promise<WishlistDTO[]> => {
    const userId = fetchUserId(token)

    const wishlists = await prisma.wishlist.findMany({
        where: { user_id: userId },
        include: {
            wishlistitem: {
                include: {
                    product: true,
                },
            },
        },
    })

    return wishlists.map(wishlist => new WishlistDTO(wishlist))
}

export const fetchWishlistByUserId = async (token: string): Promise<WishlistDTO> => {
    const userId = fetchUserId(token)

    const wishlist = await prisma.wishlist.findFirst({
        where: {
            user_id: userId,
        },
        include: {
            wishlistitem: {
                include: {
                    product: true,
                },
                orderBy: { priority: 'asc' },
            },
        },
    })

    return new WishlistDTO(wishlist)
}

export const insertProductToWishlist = async (
    token: string,
    wishlistId: string,
    productId: number
): Promise<WishlistItemDTO> => {
    const userId = fetchUserId(token)

    const wishlist = await prisma.wishlist.findFirst({
        where: {
            user_id: userId,
            wishlist_id: wishlistId,
        },
    })

    if (!wishlist) {
        throw new Error('Wishlist not found')
    }

    const existingItem = await prisma.wishlistitem.findFirst({
        where: {
            product_id: productId,
            wishlist_id: wishlistId,
        },
    })

    if (existingItem) {
        throw new Error('Product already in wishlist')
    }

    const lastItem = await prisma.wishlistitem.findFirst({
        where: { wishlist_id: wishlistId },
        orderBy: { priority: 'desc' },
        select: { priority: true },
    })

    const nextPriority = lastItem ? lastItem.priority + 1 : 1

    const newItem = await prisma.wishlistitem.create({
        data: {
            wishlist_id: wishlistId,
            product_id: productId,
            priority: nextPriority,
        },
        include: {
            product: true,
        },
    })

    return new WishlistItemDTO(newItem)
}

export const deleteProductFromWishlist = async (wishlistItemId: string): Promise<WishlistItemDTO> => {
    const deletedItem = await prisma.wishlistitem.delete({
        where: {
            wishlist_item_id: wishlistItemId,
        },
        include: { wishlist: true, product: true },
    })

    return new WishlistItemDTO(deletedItem)
}

export const clearWishlist = async (wishlistId: string): Promise<void> => {
    if (!wishlistId) throw new Error('wishlistId is required')

    await prisma.wishlistitem.deleteMany({
        where: { wishlist_id: wishlistId },
    })
}

export const updateWishlistItemPriority = async (
    token: string,
    wishlistId: string,
    products: Array<{ productId: number; newPriority: number }>
): Promise<ProductPriorityDTO[]> => {
    const userId = fetchUserId(token)

    const wishlist = await prisma.wishlist.findFirst({
        where: {
            user_id: userId,
            wishlist_id: wishlistId,
        },
    })

    if (!wishlist) {
        throw new Error('Wishlist not found')
    }

    const updatedPromises = await Promise.all(
        products.map(async product => {
            await prisma.wishlistitem.updateMany({
                where: {
                    wishlist_id: wishlistId,
                    product_id: product.productId,
                },
                data: {
                    priority: product.newPriority,
                },
            })

            return {
                productId: product.productId,
                newPriority: product.newPriority,
            }
        })
    )

    return updatedPromises.map(promise => new ProductPriorityDTO(promise))
}
