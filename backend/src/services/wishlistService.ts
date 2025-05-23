import prisma from '~/src/utils/prisma'
import { ProductPriorityDTO } from '~/src/DTOs/ProductPriority.dto'
import jwt from 'jsonwebtoken'

export const insertWishlist = async (token: string, name: string): Promise<any> => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }
    const userId = decoded.id

    const newWishlist = await prisma.wishlist.create({
        data: {
            user_id: userId,
            name: name,
            is_default: false,
        },
    })
    return newWishlist
}

export const deleteWishlist = async (token: string, wishlistId: string): Promise<any> => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }
    const userId = decoded.id

    const wishlist = await prisma.wishlist.findFirst({
        where: { user_id: userId, wishlist_id: wishlistId },
    })

    if (!wishlist) {
        throw new Error('Wishlist not found')
    }

    const deletedWishlist = await prisma.wishlist.delete({
        where: { wishlist_id: wishlistId },
    })

    return deletedWishlist
}

export const changeWishlistName = async (token: string, wishlistId: string, name: string): Promise<any> => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }
    const userId = decoded.id

    const wishlist = await prisma.wishlist.findFirst({
        where: { 
            user_id: userId, 
            wishlist_id: wishlistId 
        },
    })

    if (!wishlist) {
        throw new Error('Wishlist not found')
    }

    const updatedWishlist = await prisma.wishlist.update({
        where: { wishlist_id: wishlistId },
        data: { name: name },
    })

    return updatedWishlist
}

export const fetchAllWishlists = async (token: string): Promise<any> => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }
    const userId = decoded.id

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

    return wishlists
}

export const fetchWishlistByUserId = async (token: string, wishlistId: string): Promise<any> => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }
    const userId = decoded.id

    const wishlist = await prisma.wishlist.findFirst({
        where: { user_id: userId, wishlist_id: wishlistId },
        include: {
            wishlistitem: {
                include: {
                    product: true,
                },
            },
        },
    })

    if (!wishlist) {
        throw new Error('Wishlist not found')
    }

    return wishlist
}

export const fetchProductsInWishlist = async (token: string, wishlistId: string): Promise<any> => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }
    const userId = decoded.id

    const wishlist = await prisma.wishlist.findFirst({
        where: { 
            user_id: userId,
            wishlist_id: wishlistId,
        },
        include: {
            wishlistitem: {
                include: {
                    product: true,
                },
            },
        },
    })

    if (!wishlist) {
        throw new Error('Wishlist not found')
    }

    return wishlist.wishlistitem
}

export const insertProductToWishlist = async (token: string, wishlistId: string, productId: number): Promise<any> => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }
    const userId = decoded.id

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
    })

    return newItem
}

export const deleteProductFromWishlist = async (token: string, wishlistId: string, productId: number): Promise<any> => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }
    const userId = decoded.id

    const wishlist = await prisma.wishlist.findFirst({
        where: { 
            user_id: userId,
            wishlist_id: wishlistId,
        },
    })

    if (!wishlist) {
        throw new Error('Wishlist not found')
    }

    const deletedItem = await prisma.wishlistitem.deleteMany({
        where: {
            product_id: productId,
            wishlist_id: wishlistId,
        },
    })

    return deletedItem
}

export const updateWishlistItemPriority = async (token: string, wishlistId: string, products: Array<{ productId: number; newPriority: number }>): Promise<ProductPriorityDTO[]> => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
    const userId = decoded.id;

    const wishlist = await prisma.wishlist.findFirst({
        where: { 
            user_id: userId,
            wishlist_id: wishlistId,
        },
    });

    if (!wishlist) {
        throw new Error('Wishlist not found');
    }

    try {
        const updatedPromises = await Promise.all(
            products.map(async (product) => {
                await prisma.wishlistitem.updateMany({
                    where: {
                        wishlist_id: wishlistId,
                        product_id: product.productId,
                    },
                    data: {
                        priority: product.newPriority,
                    },
                });

                return {
                    productId: product.productId,
                    newPriority: product.newPriority,
                };
            }) 
        ); 

        return updatedPromises;
    } catch (error) {
        console.error('Error in updateWishlistItemPriority:', error);
        throw new Error('Error updating wishlist item priority');
    }
};
