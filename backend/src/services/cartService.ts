import prisma from '~/src/utils/prisma'
import { isNaNObject, isNullObject } from '~/src/utils/ErrorHandling'
import { CartDTO } from '~/src/DTOs/Cart.dto'
import { CartItemDTO } from '~/src/DTOs/CartItem.dto'

export const createCart = async (userId: string): Promise<string> => {
    const cart = await prisma.cart.create({
        data: {
            user_id: userId,
        },
    })

    return cart.cart_id
}

export const fetchCartById = async (cartId: string): Promise<CartDTO> => {
    const cart = await prisma.cart.findUnique({
        where: { cart_id: cartId },
        include: {
            cartitem: {
                include: {
                    product: true,
                },
            },
        },
    })

    isNullObject('cart', cart, cart)

    return new CartDTO(cart)
}

export const fetchCartByUserId = async (userId: string): Promise<CartDTO> => {
    const cart = await prisma.cart.findFirst({
        where: { user_id: userId },
        include: {
            cartitem: {
                include: {
                    product: true,
                },
            },
        },
    })

    isNullObject('user', userId, cart)

    return new CartDTO(cart)
}

export const addCartItem = async (cartId: string, productId: number, quantity: number): Promise<CartItemDTO> => {
    if (isNaN(quantity) || quantity <= 0 || quantity > 99) {
        throw new Error('Invalid quantity; Quantity must be greater than 0 and less than 99')
    }

    isNaNObject('product', productId)

    const cartItem = await prisma.cartitem.findFirst({
        where: {
            cart_id: cartId,
            product_id: productId,
        },
        include: { cart: true, product: true },
    })

    if (cartItem) {
        const updatedCartItem = await prisma.cartitem.update({
            where: {
                cart_item_id: cartItem.cart_item_id,
            },
            data: {
                quantity: {
                    increment: quantity,
                },
            },
            include: { cart: true, product: true },
        })

        return new CartItemDTO(updatedCartItem)
    } else {
        const newCartItem = await prisma.cartitem.create({
            data: {
                cart_id: cartId,
                product_id: productId,
                quantity,
            },
            include: { cart: true, product: true },
        })

        return new CartItemDTO(newCartItem)
    }
}

export const updateCartItemQuantity = async (
    cartItemId: string,
    cartId: string,
    quantity: number
): Promise<CartItemDTO> => {
    if (isNaN(quantity) || quantity <= 0 || quantity > 99) {
        throw new Error('Invalid quantity; Quantity must be greater than 0 and less than 99')
    }

    const cartItem = await prisma.cartitem.update({
        where: {
            cart_item_id: cartItemId,
            cart_id: cartId,
        },
        data: { quantity },
        include: { cart: true, product: true },
    })

    isNullObject('cart item', cartItemId, cartItem)

    return new CartItemDTO(cartItem)
}

export const removeCartItem = async (cartItemId: string): Promise<CartItemDTO> => {
    const cartItem = await prisma.cartitem.delete({
        where: { cart_item_id: cartItemId },
        include: { cart: true, product: true },
    })

    return new CartItemDTO(cartItem)
}

export const clearCart = async (cartId: string): Promise<void> => {
    await prisma.cartitem.deleteMany({
        where: { cart_id: cartId },
    })
}