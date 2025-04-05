<template>
    <div>
        <section class="py-8 md:py-16">
            <div class="px-4 mx-auto max-w-screen-lg 3xl:max-w-screen-xl h-screen">
                <h2 class="md:text-3xl text-2xl font-semibold pb-3 md:pb-4 border-b-2 border-gray-200 text-left">
                    Kontaktirajte nas
                </h2>
                <div class="mt-10 grid md:grid-cols-2 border-2 border-gray-300 rounded-md">
                    <div class="bg-gray-200 p-4 sm:p-6 font-medium">
                        <h3 class="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-300">
                            nextcomputers.rs
                        </h3>
                        <div class="space-y-3 text-sm sm:text-base">
                            <p class="text-gray-700 flex flex-wrap items-center">
                                <PhoneIcon class="size-5 me-1.5 mb-0.5 shrink-0" />
                                <span class="text-gray-800 font-semibold me-1.5">Telefon:</span>
                                +381 67 762 8052
                            </p>
                            <p class="flex flex-wrap items-center">
                                <EmailIcon class="size-5 me-1.5 mb-0.5 shrink-0" />
                                <span class="text-gray-800 font-semibold me-1.5">Email:</span>
                                <a href="mailto:prodaja.nextcomputers@gmail.com" class="text-primary hover:underline break-all">
                                    prodaja.nextcomputers@gmail.com
                                </a>
                            </p>
                            <p class="text-gray-700 flex flex-wrap items-center">
                                <OfficeBuildingIcon class="size-5 me-1.5 mb-1 shrink-0" />
                                <span class="text-gray-800 font-semibold me-1.5">PIB:</span>
                                114328144
                            </p>
                            <p class="text-gray-700 flex flex-wrap items-center">
                                <DocumentIcon class="size-5 me-1.5 mb-0.5 shrink-0" />
                                <span class="text-gray-800 font-semibold me-1.5">Matični broj:</span>
                                67490231
                            </p>
                            <p class="text-gray-700 flex flex-wrap items-center">
                                <ClockIcon class="size-5 me-1.5 mb-0.5 shrink-0" />
                                <span class="text-gray-800 font-semibold me-1.5">Radno vreme:</span>
                                Svakog dana - 00-24h
                            </p>
                        </div>
                    </div>

                    <div class="p-6 bg-white">
                        <p class="mb-8 text-gray-700 text-sm">
                            Vaše mišljenje nam je važno! Ako imate bilo kakva pitanja ili želite dodatne informacije o
                            našim proizvodima, pošaljite nam poruku.
                        </p>
                        <form @submit.prevent="submitForm" class="space-y-5">
                            <div>
                                <label for="fullname" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                    Vaše ime i prezime
                                    <span class="text-red-600">*</span>
                                </label>
                                <input
                                    v-model="form.fullname"
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    :class="{
                                        'bg-gray-50 border-gray-300': isFullnameValid && formSubmitted,
                                        'border-red-600': !isFullnameValid && formSubmitted,
                                    }"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-light focus:border-primary-light"
                                    placeholder="Unesite ime i prezime" />
                                <p
                                    v-if="!isFullnameValid && formSubmitted"
                                    class="text-red-600 text-xs font-medium mt-1 ms-0.5">
                                    Ime i prezime su obavezni
                                </p>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                    Vaš email
                                    <span class="text-red-600">*</span>
                                </label>
                                <input
                                    v-model="form.email"
                                    type="text"
                                    name="email"
                                    id="email"
                                    :class="{
                                        'bg-gray-50 border-gray-300': isEmailValid && formSubmitted,
                                        'border-red-600': !isEmailValid && formSubmitted,
                                    }"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-light focus:border-primary-light"
                                    placeholder="vasmail@gmail.com" />
                                <p
                                    v-if="!isEmailValid && formSubmitted"
                                    class="text-red-600 text-xs font-medium mt-1 ms-0.5">
                                    Unesite validnu email adresu
                                </p>
                            </div>
                            <div>
                                <label for="comment" class="block mb-2 ms-0.5 text-sm font-medium text-gray-900">
                                    Vaš komentar
                                    <span class="text-red-600">*</span>
                                </label>
                                <textarea
                                    v-model="form.comment"
                                    type="text"
                                    name="comment"
                                    id="comment"
                                    rows="5"
                                    :class="{
                                        'bg-gray-50 border-gray-300': isCommentValid && formSubmitted,
                                        'border-red-600': !isCommentValid && formSubmitted,
                                    }"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-primary-light focus:border-primary-light"
                                    placeholder="Ostavite vašu poruku..." />
                                <p
                                    v-if="!isCommentValid && formSubmitted"
                                    class="text-red-600 text-xs font-medium mt-1 ms-0.5">
                                    Komentar je obavezan
                                </p>
                            </div>
                            <button
                                type="submit"
                                class="py-3 px-4 text-sm font-medium text-center flex items-center text-white rounded-lg bg-primary-light sm:w-fit hover:bg-primary">
                                <EmailIcon class="size-5 me-1.5 shrink-0" />
                                Pošalji poruku
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import ClockIcon from '~/components/icons/ClockIcon.vue'
import DocumentIcon from '~/components/icons/DocumentIcon.vue'
import EmailIcon from '~/components/icons/EmailIcon.vue'
import OfficeBuildingIcon from '~/components/icons/OfficeBuildingIcon.vue'
import PhoneIcon from '~/components/icons/PhoneIcon.vue'
import { useContactStore } from '~/stores/ContactStore'
import { useMailStore } from '~/stores/MailStore'
import { useNotification } from '~/composables/useNotification'

const { showNotification } = useNotification()
const contactStore = useContactStore()
const mailStore = useMailStore()

const form = ref(contactStore.form)

const formSubmitted = ref(false)

const isFullnameValid = computed(() => !!form.value.fullname)
const isCommentValid = computed(() => !!form.value.comment)
const isEmailValid = computed(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(form.value.email)
})

const submitForm = async () => {
    formSubmitted.value = true
    if (isFullnameValid.value && isEmailValid.value && isCommentValid.value) {
        contactStore.contactData = { ...form.value }
        try {
            await mailStore.sendContactMail(contactStore.contactData)
            form.value.fullname = ''
            form.value.email = ''
            form.value.comment = ''
            formSubmitted.value = false
            showNotification(
                'success',
                'Poruka uspešno poslata!',
                'Vaša poruka je uspešno poslata. Hvala Vam što koristite nextcomputers.rs!'
            )
        } catch (error) {
            showNotification(
                'error',
                'Greška pri slanju poruke!',
                'Došlo je do problema pri slanju poruke. Molimo pokušajte kasnije.'
            )
        }
    }
}
</script>
