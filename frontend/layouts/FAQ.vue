<template>
    <div>
        <section class="py-8 md:py-16">
            <div class="mx-auto max-w-screen-xl h-screen px-6 2xl:px-0">
                <h2 class="md:text-3xl text-2xl font-semibold pb-3 md:pb-4 border-b-2 border-gray-200 text-left">Često postavljena pitanja</h2>
                <div class="grid pt-10 text-left lg:gap-16 md:gap-6 md:grid-cols-2 md:text-justify">
                    <div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <QuestionMarkBubbleIcon class="text-primary-light size-6 me-1 shrink-0" />
                                Koliko dugo se čeka dostava?
                            </h3>
                            <p class="ms-1">Za većinu artikala dostava je 1-3 radna dana.</p>
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <QuestionMarkBubbleIcon class="text-primary-light size-6 me-1 shrink-0" />
                                Na koje načine mogu da platim?
                            </h3>
                            <p class="ms-1">
                                NEXTCOMPUTERS.RS prihvata uplatu na račun (sa popustom od 1%) i kartično plaćanje.
                            </p>
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <QuestionMarkBubbleIcon class="text-primary-light size-6 me-1 shrink-0" />
                                Kada dobijam fiskalni račun?
                            </h3>
                            <p class="ms-1">
                                Fiskalni račun dobijate prvog radnog dana nakon što izvršite uplatu, odnosno istog dana
                                do 17h ukoliko je radni dan.
                            </p>
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <QuestionMarkBubbleIcon class="text-primary-light size-6 me-1 shrink-0" />
                                Nisam dobio fiskalni račun, šta da radim?
                            </h3>
                            <p class="ms-1">
                                Ukoliko niste dobili fiskalni račun u roku od maksimalno 48 sati (tokom radnih dana)
                                nakon uplate, molimo da nas pozovete na broj <span class="font-medium">+381 67 762 8052</span>, 
                                i spremite broj porudžbine.
                            </p>
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <QuestionMarkBubbleIcon class="text-primary-light size-6 me-1 shrink-0" />
                                Da li imam garanciju?
                            </h3>
                            <p class="ms-1">
                                Naravno, uz fiskalni račun imate garanciju od najmanje 2 godine na sve artikle gde
                                drugačije nije označeno.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <QuestionMarkBubbleIcon class="text-primary-light size-6 me-1 shrink-0" />
                                Koji je zakonski rok za rešavanje reklamacije?
                            </h3>
                            <p class="ms-1">
                                Zakonski rok za rešavanje reklamacije je 30 kalendarskih dana, međutim molimo da u
                                slučaju da su u toku praznici budete spremni za eventualno kašnjenje sa strane servisa.
                                NEXTCOMPUTERS.RS nije serviser i time nema kontrolu nad brzinom same reklamacije, ono
                                što je u našoj moći je maksimalno brzo i efikasno kako bi se problem što brže rešio.
                            </p>
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <QuestionMarkBubbleIcon class="text-primary-light size-6 me-1 shrink-0" />
                                Da li je moguć povraćaj robe?
                            </h3>
                            <p class="ms-1">
                                Prema zakonu, NEXTCOMPUTERS.RS Vam daje 14 dana prava za jednostran prekid ugovora i
                                povraćaj robe. U slučaju povraćaja robe kupac je dužan da pokrije troškove poštarine u
                                oba smera (490 RSD prema Vama). Artikal mora biti neoštećen, neotvoren i nekorišćen.
                                Povraćaj novca vrši se isključivo na račun u banci.
                            </p>
                        </div>
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                                <QuestionMarkBubbleIcon class="text-primary-light size-6 me-1 shrink-0" />
                                Da li nudite popuste na količinu?
                            </h3>
                            <p class="ms-1">
                                Da, u slučaju da naručujete velike količine bilo kog artikla, 
                                možemo da Vam ponudimo bolju cenu. U tom slučaju, pozovite nas na broj
                                <span class="font-medium">+381 67 762 8052</span>
                                kako bi Vam pomogli i dali ponudu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import QuestionMarkBubbleIcon from '~/components/icons/QuestionMarkBubbleIcon.vue'
</script>
