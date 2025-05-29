import prisma from '~/src/utils/prisma'
import { OrderDataDTO } from '~/src/DTOs/OrderData.dto'
import { isNullObject } from '~/src/utils/ErrorHandling'
import { OrderDTO } from '~/src/DTOs/Order.dto'
import { generateOrderIdWithUUID } from '~/src/utils/order/generateOrderId'
import { fetchMe } from '~/src/services/userService'
import jwt from 'jsonwebtoken'

export const createOrder = async (orderData: OrderDataDTO, token: string): Promise<OrderDTO> => {
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
        let userId: string | null
        if (token) {
            const user = await fetchMe(token)
            userId = user?.id || null
        } else {
            userId = null
        }
        const order = await prisma.order.create({
            data: {
                order_id: generateOrderIdWithUUID(),
                user_id: userId,
                total_price: orderData.prices.totalPrice,
                order_status: 'PENDING',
                orderdetails: {
                    create: orderData.products.map(product => ({
                        product_id: product.id,
                        quantity: product.quantity,
                    })),
                },
                orderinfo: {
                    create: {
                        name: orderData.form.fullname,
                        address: orderData.form.address,
                        phone_number: orderData.form.phone,
                        email: orderData.form.email,
                        city: orderData.form.city,
                        zipcode: orderData.form.zipcode,
                        payment_method: orderData.paymentMethod,
                        subtotal_price: orderData.prices.productsPrice,
                        shipping_price: orderData.prices.shippingPrice,
                        discount_price: orderData.prices.discountPrice || 0,
                        pib: orderData.form.pib || null,
                    },
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
                                sale_price: true,
                                discount_price: true,
                                image_url: true,
                            },
                        },
                    },
                },
                orderinfo: {
                    select: {
                        order_info_id: true,
                        order_id: true,
                        name: true,
                        email: true,
                        phone_number: true,
                        address: true,
                        city: true,
                        zipcode: true,
                        pib: true,
                        payment_method: true,
                        subtotal_price: true,
                        discount_price: true,
                        shipping_price: true,
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
                            sale_price: true,
                            discount_price: true,
                            image_url: true,
                        },
                    },
                },
            },
            orderinfo: {
                select: {
                    order_info_id: true,
                    order_id: true,
                    name: true,
                    email: true,
                    phone_number: true,
                    address: true,
                    city: true,
                    zipcode: true,
                    pib: true,
                    payment_method: true,
                    subtotal_price: true,
                    discount_price: true,
                    shipping_price: true,
                },
            },
        },
    })

    isNullObject('order', orderId, order)

    return new OrderDTO(order)
}

export const fetchOrderHistory = async (token: string): Promise<OrderDTO[]> => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }

    const orders = await prisma.order.findMany({
        where: { user_id: decoded.id },
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
                            sale_price: true,
                            discount_price: true,
                            image_url: true,
                        },
                    },
                },
            },
            orderinfo: {
                select: {
                    order_info_id: true,
                    order_id: true,
                    name: true,
                    email: true,
                    phone_number: true,
                    address: true,
                    city: true,
                    zipcode: true,
                    pib: true,
                    payment_method: true,
                    subtotal_price: true,
                    discount_price: true,
                    shipping_price: true,
                },
            },
        },
        orderBy: { created_at: 'desc' },
    })

    return orders.map(order => new OrderDTO(order))
}
