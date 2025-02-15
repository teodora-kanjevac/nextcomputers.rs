import { Request, Response } from 'express'
import {
    addCartItem,
    clearCart,
    createCart,
    fetchCartById,
    fetchCartByUserId,
    removeCartItem,
    removeUnavailableCartItems,
    updateCartItemQuantity,
    updateLastSiteVisitCart,
} from '~/src/services/cartService'

export const createACart = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.body

        const cartId = await createCart(userId)

        res.status(200).json(cartId)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const updateLastVisitToCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cartId, lastAccessedAt } = req.body

        const lastVisited = await updateLastSiteVisitCart(cartId, lastAccessedAt)

        res.status(200).json(lastVisited)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getCartById = async (req: Request, res: Response): Promise<void> => {
    try {
        const cartId = req.params.cartId as string

        const cart = await fetchCartById(cartId)

        res.status(200).json(cart)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getCartByUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.userId as string

        const cart = await fetchCartByUserId(userId)

        res.status(200).json(cart)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const addItemToCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cartId, productId, quantity } = req.body

        const cartItem = await addCartItem(cartId, productId, quantity)

        res.status(200).json(cartItem)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const updateQuantity = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cartItemId, cartId, quantity } = req.body

        const cartItem = await updateCartItemQuantity(cartItemId, cartId, quantity)

        res.status(200).json(cartItem)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const removeItemFromCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const cartItemId = req.params.cartItemId as string

        const cartItem = await removeCartItem(cartItemId)

        res.status(200).json(cartItem)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const removeUnavailableItemsFromCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const cartId = req.params.cartId as string

        const deletedItems = await removeUnavailableCartItems(cartId)

        res.status(200).json(deletedItems)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const emptyCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const cartId = req.params.cartId as string

        await clearCart(cartId)

        res.status(200).json({ message: 'Cart cleared successfully' })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}
