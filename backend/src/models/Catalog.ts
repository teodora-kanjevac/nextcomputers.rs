export class Catalog {
    public sku: number
    public product_category: string
    public product_brand: string
    public product_mpn: string
    public product_name: string
    public product_url: string
    public product_price: number
    public product_price_discount: number
    public product_description: string
    public product_image_urls: { product_image_url: string[] }
    public product_stock: number
    public product_ean: string
    public product_remark: string

    constructor(catalog: any) {
        this.sku = catalog.product_id
        this.product_category = `${catalog.subcategory.category.name} > ${catalog.subcategory.name}`
        this.product_brand = catalog.brand
        this.product_mpn = catalog.name
        this.product_name = catalog.name
        this.product_url = 'https://nextcomputers.rs/proizvod/' + catalog.product_id
        this.product_price = parseInt(catalog.sale_price)
        this.product_price_discount = Math.round(catalog.sale_price * 0.99)
        this.product_description = catalog.name
        this.product_image_urls = {
            product_image_url: Array.isArray(catalog.image_url)
                ? catalog.image_url.map((i: any) => i.image)
                : [catalog.image_url?.image || ''],
        }
        this.product_stock = catalog.stock
        this.product_ean = catalog.ean
        this.product_remark = 'Popust od 1% dobijate na avansno placanje'
    }
}
