import { OrderDataDTO } from '~/src/DTOs/OrderData.dto'

export const orderConfirmationData = async (orderData: OrderDataDTO): Promise<any> => {
    return {
        orderId: orderData.orderId,
        orderDate: orderData.orderDate,
        products: orderData.products.map(product => ({
            name: product.name,
            ean: product.ean,
            quantity: product.quantity,
            imageUrl: product.imageUrl,
        })),
        productsPrice: orderData.prices.productsPrice,
        discount: orderData.prices.discountPrice,
        shippingPrice: orderData.prices.shippingPrice,
        totalPrice: orderData.prices.totalPrice,
        customerFullname: orderData.form.fullname,
        customerEmail: orderData.form.email,
        customerAddress: orderData.form.address,
        customerCity: orderData.form.city,
        customerZipcode: orderData.form.zipcode,
        customerPhoneNumber: orderData.form.phone,
        paymentMethod: orderData.paymentMethodText,
    }
}
