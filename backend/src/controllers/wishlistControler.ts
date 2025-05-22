import { Request, Response } from 'express'
import { insertProductToWishlist, fetchWishlistByUserId, insertWishlist, fetchAllWishlists, deleteProductFromWishlist, deleteWishlist, updateWishlistItemPriority, fetchProductsInWishlist, changeWishlistName } from '../services/wishlistService'

export const createWishlist = async (req: Request, res: Response) => {
    const token = req.cookies.token
    const { name } = req.body
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const newWishlist = await insertWishlist(token, name)
        return res.status(201).json(newWishlist)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const removeWishlist = async (req: Request, res: Response) => {
    const token = req.cookies.token
    const wishlistId = req.params.wishlistId

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const deletedWishlist = await deleteWishlist(token, wishlistId)
        return res.status(200).json(deletedWishlist)
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting wishlist' })
    }
}

export const renameWishlist = async (req: Request, res: Response) => {
    const token = req.cookies.token
    const wishlistId = req.params.wishlistId
    const { name } = req.body

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const updatedWishlist = await changeWishlistName(token, wishlistId, name)
        return res.status(200).json(updatedWishlist)
    } catch (error) {
        return res.status(500).json({ message: 'Error updating wishlist name' })
    }
}

export const getAllWishlists = async (req: Request, res: Response) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const wishlists = await fetchAllWishlists(token)
        return res.status(200).json(wishlists)
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching wishlists' })
    }
}

export const getWishlist = async (req: Request, res: Response) => {
    const token = req.cookies.token
    const wishlistId = req.params.wishlistId

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const wishlist = await fetchWishlistByUserId(token, wishlistId)
        return res.status(200).json(wishlist)
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching wishlist' })
    }
}

export const getProductsInWishlist = async (req: Request, res: Response) => {
    const token = req.cookies.token
    const wishlistId = req.params.wishlistId

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const wishlist = await fetchProductsInWishlist(token, wishlistId)
        return res.status(200).json(wishlist)
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching products in wishlist' })
    }
}

export const addProductToWishlist = async (req: Request, res: Response) => {
    const token = req.cookies.token
    const wishlistId = req.params.wishlistId

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
  
    const productId = parseInt(req.params.productId)
    if (isNaN(productId)) {
      return res.status(400).json({ message: 'Invalid product ID' })
    }
  
    try {
      const newItem = await insertProductToWishlist(token, wishlistId, productId) 
      return res.status(201).json(newItem)
    } catch (error) {
      return res.status(500).json({ message: 'Error adding product to wishlist' })
    }
}

export const removeProductFromWishlist = async (req: Request, res: Response) => {
    const token = req.cookies.token
    const wishlistId = req.params.wishlistId

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const productId = parseInt(req.params.productId)
    if (isNaN(productId)) {
        return res.status(400).json({ message: 'Invalid product ID' })
    }

    try {
        const newItem = await deleteProductFromWishlist(token, wishlistId, productId) 
        return res.status(201).json(newItem)
    } catch (error) {
        return res.status(500).json({ message: 'Error removing product to wishlist' })
    }
}

export const changeProductPriority = async (req: Request, res: Response) => {
    const token = req.cookies.token
    const wishlistId = req.params.wishlistId

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const products = req.body
    
    if (!Array.isArray(products) || products.length === 0) {
        return res.status(400).json({ message: 'No product priority has been changed' });
    }

    try {
        const newItem = await updateWishlistItemPriority(token, wishlistId, products) 
        return res.status(201).json(newItem)
    } catch (error) {
        console.error('Priority update error:', error);
        return res.status(500).json({ message: 'Error changing product priority' })
    }
}

