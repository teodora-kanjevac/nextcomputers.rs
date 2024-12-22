import { Request, Response } from 'express'
import { createOrder, fetchOrderById } from '~/src/services/orderService'

export const createAnOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const orderData = req.body

        const order = await createOrder(orderData)

        res.status(200).json(order)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}

export const getOrderById = async (req: Request, res: Response): Promise<void> => {
    try {
        const orderId = req.params.orderId as string

        const order = await fetchOrderById(orderId)

        res.status(200).json(order)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message })
        } else {
            res.status(500).json({ error: 'Unexpected error occurred' })
        }
    }
}
