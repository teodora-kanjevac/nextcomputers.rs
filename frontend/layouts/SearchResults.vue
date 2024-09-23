<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex flex-1">
            <FilterCategorySidebar />
            <div class="flex-1 px-8 pt-8 pb-11 xl:py-11">
                <h2 class="font-semibold text-2xl ps-1 xl:ps-4 pb-7">Najprodavaniji proizvodi</h2>
                <div class="flex mx-1 mb-1 mt-3 gap-2">
                    <CategoryDrawer />
                    <FilterDrawer />
                </div>
                <ProductGrid class="grid gap-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                    :products="products" />
            </div>
        </div>
    </div>
</template>

<script setup>
const products = [
    { id: 1, name: 'ASUS B550-PLUS TUFASUS B550-PLUS TUF', price: '104990', image: 'ASUS B550-PLUS TUF.jpg' },
    { id: 2, name: 'Kingston 3600mhz 8gbASUS B550-PLUS TUF', price: '29990', image: 'Kingston 3600mhz 8gb.jpg' },
    { id: 3, name: 'GIGABYTE A520MASUS B550-PLUS TUF', price: '55990', image: 'GIGABYTE A520M.jpg' },
    { id: 4, name: 'Intel 14900kASUS B550-PLUS TUF', price: '15990', image: 'Intel 14900k.jpg' },
    { id: 5, name: 'R5 5500 RX 6600ASUS B550-PLUS TUF', price: '38990', image: 'R5 5500 RX 6600.jpg' },
    { id: 6, name: 'RTX 3050 VENTUS2ASUS B550-PLUS TUF', price: '77990', image: 'RTX 3050 VENTUS2.jpg' },
    { id: 7, name: 'RTX 4060 TI AEROASUS B550-PLUS TUF', price: '79990', image: 'RTX 4060 TI AERO.jpg' },
    { id: 8, name: 'RTX 4070 TUFASUS B550-PLUS TUF', price: '23990', image: 'RTX 4070 TUF.jpg' },
    { id: 9, name: 'Ryzen 5 5600xASUS B550-PLUS TUF', price: '51990', image: 'Ryzen 5 5600x.jpg' },
];
</script>