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
import jwt from 'jsonwebtoken'

export const createACart = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        let userId
        if (!token) {
            userId = null
        } else {
            const decoded = jwt.decode(token) as { id: string }
            userId = decoded.id
        }

        const cartId = await createCart(userId)

        res.cookie('cart_id', cartId, {
            maxAge: 1000 * 60 * 60 * 24 * 10,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production'
        })

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
        const cartId = req.cookies.cart_id as string
        const token = req.cookies.token as string
        
        if (!cartId) {
            res.status(400).json({ error: 'Missing cart ID in cookies' })
            return
        }

        const lastVisited = await updateLastSiteVisitCart(cartId)

        if (!token) {
            res.cookie('cart_id', cartId, {
                maxAge: 1000 * 60 * 60 * 24 * 10,
                sameSite: 'lax',
                secure: process.env.NODE_ENV === 'production'
            })
        }

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
        const cartId = req.cookies.cart_id as string

        if (!cartId) {
            res.status(400).json({ error: 'Missing cart ID in cookies' })
            return
        }

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
        const { cartId, productId } = req.body

        const cartItem = await addCartItem(cartId, productId)

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
