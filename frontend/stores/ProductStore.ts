import type { Product } from '~/shared/classes/Product';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        currentProduct: null as Product | null,
    }),
    actions: {
        setProduct(product: Product) {
            this.currentProduct = product;
        }
    }
});
