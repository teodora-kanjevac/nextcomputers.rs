import prisma from '~/src/utils/prisma'
import { OrderDataDTO } from '~/src/DTOs/OrderData.dto'
import { isNullObject } from '~/src/utils/ErrorHandling'
import { OrderDTO } from '~/src/DTOs/Order.dto'
import { generateOrderIdWithUUID } from '~/src/utils/order/generateOrderId'

export const createOrder = async (orderData: OrderDataDTO): Promise<OrderDTO> => {
    try {
        await Promise.all(
            orderData.products.map(async product => {
                const updatedProduct = await prisma.product.update({
                    where: { product_id: product.id },
                    data: {
                        stock: {
                            decrement: product.quantity,
                        },
                    },
                })

                if (updatedProduct.stock < 0) {
                    throw new Error(`Insufficient stock for product ${product.id}`)
                }
            })
        )

        const order = await prisma.order.create({
            data: {
                order_id: generateOrderIdWithUUID(),
                user_id: null,
                total_price: orderData.prices.totalPrice,
                order_status: null,
                orderdetails: {
                    create: orderData.products.map(product => ({
                        product_id: product.id,
                        quantity: product.quantity,
                    })),
                },
            },
            include: {
                orderdetails: {
                    select: {
                        order_detail_id: true,
                        order_id: true,
                        quantity: true,
                        product: {
                            select: {
                                product_id: true,
                                name: true,
                                ean: true,
                                image_url: true,
                            },
                        },
                    },
                },
            },
        })

        return new OrderDTO(order)
    } catch (error: Error | any) {
        throw new Error(`Failed to create order: ${error.message}`)
    }
}

export const fetchOrderById = async (orderId: string): Promise<OrderDTO> => {
    const order = await prisma.order.findUnique({
        where: { order_id: orderId },
        include: {
            orderdetails: {
                select: {
                    order_detail_id: true,
                    order_id: true,
                    quantity: true,
                    product: {
                        select: {
                            product_id: true,
                            name: true,
                            ean: true,
                            image_url: true,
                        },
                    },
                },
            },
        },
    })

    isNullObject('order', orderId, order)

    return new OrderDTO(order)
}
