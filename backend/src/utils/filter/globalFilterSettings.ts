export const GLOBAL_FILTERS_TO_EXCLUDE = [
    'Napomena',
    'Pakovanje',
    'Stanje',
    'Dimenzije',
    'Reklamacioni period',
    'Dodatne funkcije',
    'Podržane tehnologije',
    'Ostale osobine',
    'Dodatne mogućnosti',
    'Ostalo',
]
export const USAGE_THRESHOLD_PERCENT = 0.2 // Filters must appear in at least 20% of products to be included
export const VALUE_DIVERSITY_THRESHOLD = 20 // Maximum allowed distinct values for a filter; filters with more than 20 distinct values are excluded
export const SINGLE_PRODUCT_VALUE_THRESHOLD = 0.6 // Filters where more than 60% of distinct values are tied to a single product are excluded
export const SUBCATEGORY_FILTER_MAP: Record<number, string[]> = {
    1029: ['Slot', 'Model', 'Količina memorije', 'Proizvođač čipa'], //GPUs
    1020: ['Socket', 'Broj jezgara', 'TDP'], //CPUs
}
