import type { Product } from '~/shared/types/product';
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
