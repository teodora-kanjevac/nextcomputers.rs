import { Request, Response } from 'express'
import {
    insertProductToWishlist,
    fetchWishlistByUserId,
    insertWishlist,
    fetchAllWishlists,
    deleteProductFromWishlist,
    deleteWishlist,
    updateWishlistItemPriority,
    changeWishlistName,
    clearWishlist,
} from '~/src/services/wishlistService'

export const createWishlist = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        const { name } = req.body

        if (!token) {
            res.status(401).json({ message: 'Unauthorized' })
            return
        }

        const newWishlist = await insertWishlist(token, name)
        res.status(201).json(newWishlist)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const removeWishlist = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        const wishlistId = req.params.wishlistId

        if (!token) {
            res.status(401).json({ message: 'Unauthorized' })
        }

        const deletedWishlist = await deleteWishlist(token, wishlistId)
        res.status(200).json(deletedWishlist)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const renameWishlist = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        const wishlistId = req.params.wishlistId
        const { name } = req.body

        if (!token) {
            res.status(401).json({ message: 'Unauthorized' })
            return
        }

        const updatedWishlist = await changeWishlistName(token, wishlistId, name)
        res.status(200).json(updatedWishlist)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getAllWishlists = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token

        if (!token) {
            res.status(401).json({ message: 'Unauthorized' })
            return
        }

        const wishlists = await fetchAllWishlists(token)
        res.status(200).json(wishlists)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getWishlist = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token

        if (!token) {
            res.status(401).json({ message: 'Unauthorized' })
            return
        }

        const wishlist = await fetchWishlistByUserId(token)
        res.status(200).json(wishlist)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const addProductToWishlist = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        const { wishlistId, productId } = req.body

        if (!token) {
            res.status(401).json({ message: 'Unauthorized' })
            return
        }

        const newItem = await insertProductToWishlist(token, wishlistId, productId)
        res.status(201).json(newItem)
    } catch (error) {
        res.status(200).json({
            error: error instanceof Error ? error.message : 'Adding to wishlist failed',
        })
    }
}

export const removeProductFromWishlist = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        const wishlistItemId = req.params.wishlistItemId

        if (!token) {
            res.status(401).json({ message: 'Unauthorized' })
            return
        }

        const newItem = await deleteProductFromWishlist(wishlistItemId)
        res.status(201).json(newItem)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const emptyWishlist = async (req: Request, res: Response): Promise<void> => {
    try {
        const wishlistId = req.params.wishlistId as string

        await clearWishlist(wishlistId)

        res.status(200).json({ message: 'Wishlist cleared successfully' })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const changeProductPriority = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.cookies.token
        const wishlistId = req.params.wishlistId
        const { updatedList } = req.body

        if (!token) {
            res.status(401).json({ message: 'Unauthorized' })
            return
        }

        if (!Array.isArray(updatedList) || updatedList.length === 0) {
            res.status(200).json(updatedList)
            return
        }

        const newItem = await updateWishlistItemPriority(token, wishlistId, updatedList)
        res.status(201).json(newItem)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}
