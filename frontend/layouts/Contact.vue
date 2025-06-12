<template>
    <div>
        <section class="py-8 md:py-16">
            <div class="px-4 mx-auto max-w-screen-lg 3xl:max-w-screen-xl min-h-screen">
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
                                <a
                                    href="mailto:prodaja.nextcomputers@gmail.com"
                                    class="text-primary hover:underline break-all">
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
                                <TextInput
                                    label="Vaše ime i prezime"
                                    placeholder="Unesite ime i prezime"
                                    required
                                    v-model="form.fullname"
                                    :showError="!fullNameCheck().value.valid && formSubmitted"
                                    :errorMessage="fullNameCheck().value.message"
                                    :shakeTrigger="shakeTrigger" />
                            </div>
                            <div>
                                <TextInput
                                    label="Vaš email"
                                    placeholder="Unesite email"
                                    required
                                    v-model="form.email"
                                    :showError="!emailCheck().value.valid && formSubmitted"
                                    :errorMessage="emailCheck().value.message"
                                    :shakeTrigger="shakeTrigger" />
                            </div>
                            <div>
                                <TextAreaInput
                                    label="Vaš komentar"
                                    :rows="5"
                                    placeholder="Unesite komentar"
                                    required
                                    v-model="form.comment"
                                    :showError="!commentCheck.valid && formSubmitted"
                                    :errorMessage="commentCheck.message"
                                    :shakeTrigger="shakeTrigger" />
                            </div>
                            <button
                                type="submit"
                                class="py-2.5 px-4 text-sm font-medium text-center flex items-center justify-center text-white rounded-md bg-primary-light sm:w-fit disabled:contrast-75 enabled:hover:bg-rose-800"
                                :disabled="sharedStore.loading">
                                <template v-if="sharedStore.loading">
                                    <SubmitionSpinner class="size-5 px-5" />
                                </template>
                                <template v-else>
                                    <EmailIcon class="size-5 me-1.5 shrink-0" />
                                    <span>Pošalji poruku</span>
                                </template>
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
import { useMailStore } from '~/stores/MailStore'
import { useNotification } from '~/composables/useNotification'
import { useFormStore } from '~/stores/FormStore'
import { useSharedStore } from '~/stores/SharedStore'

const formStore = useFormStore()
const mailStore = useMailStore()
const sharedStore = useSharedStore()
const { showNotification } = useNotification()

const form = ref(formStore.contact.form)

const formSubmitted = ref(false)
const shakeTrigger = ref(0)

const { fullNameCheck, emailCheck, commentCheck } = useFormValidation(form)

const isFormInvalid = computed(() => {
    return !(fullNameCheck().value.valid && emailCheck().value.valid && commentCheck.value.valid)
})

const resetForm = () => {
    formStore.resetContactForm()
    form.value = formStore.contact.form
    formSubmitted.value = false
}

const submitForm = async () => {
    formSubmitted.value = true
    if (isFormInvalid.value) {
        shakeTrigger.value++
        return
    }

    sharedStore.setLoading(true)
    formStore.contact.form = { ...form.value }

    try {
        await mailStore.sendContactMail(formStore.contact.form)
        resetForm()
        showNotification(
            'success',
            'Poruka uspešno poslata!',
            'Vaša poruka je uspešno poslata. Hvala Vam što koristite nextcomputers.rs!'
        )
    } catch (error: any) {
        if (error.message.includes('Maximum 3 submissions per day')) {
            showNotification('warn', 'Previše pokušaja!', 'Dozvoljeno je slanje 3 poruke dnevno.')
        } else {
            showNotification(
                'error',
                'Greška pri slanju poruke!',
                'Došlo je do problema pri slanju poruke. Molimo pokušajte kasnije.'
            )
        }
    } finally {
        sharedStore.setLoading(false)
    }
}

onBeforeRouteLeave(() => {
    resetForm()
    return true
})
</script>
