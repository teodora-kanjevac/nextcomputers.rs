<template>
    <div>
        <section class="pt-3 pb-8 sm:min-h-screen">
            <form @submit.prevent="submitForm" class="mx-auto max-w-screen-xl px-4">
                <div class="lg:flex lg:items-start sm:gap-4 xl:gap-8">
                    <div
                        class="min-w-0 flex-1 space-y-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-8 mb-5">
                        <div class="space-y-4">
                            <p class="font-semibold text-xl lg:text-2xl ps-0.5 pb-2 sm:pb-4">Informacije o dostavi</p>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 border-b border-gray-200 pb-6">
                                <div>
                                    <TextInput
                                        label="Ime i prezime"
                                        placeholder="Unesite ime i prezime"
                                        required
                                        v-model="form.fullname"
                                        :showError="!fullNameCheck().value.valid && formSubmitted"
                                        :errorMessage="fullNameCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>
                                <div>
                                    <TextInput
                                        label="Email"
                                        placeholder="vas.email@gmail.com"
                                        required
                                        v-model="form.email"
                                        :showError="!emailCheck().value.valid && formSubmitted"
                                        :errorMessage="emailCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>
                                <div>
                                    <PhoneInput
                                        label="Broj telefona"
                                        placeholder="61 2345678"
                                        required
                                        v-model="form.phone"
                                        :showError="!phoneCheck().value.valid && formSubmitted"
                                        :errorMessage="phoneCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>
                                <div>
                                    <TextInput
                                        label="Adresa"
                                        placeholder="Unesite ulicu i broj"
                                        required
                                        v-model="form.address"
                                        :showError="!addressCheck().value.valid && formSubmitted"
                                        :errorMessage="addressCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>
                                <div>
                                    <TextInput
                                        label="Grad"
                                        placeholder="Beograd, Zaječar, Niš..."
                                        required
                                        v-model="form.city"
                                        :showError="!cityCheck().value.valid && formSubmitted"
                                        :errorMessage="cityCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>

                                <div>
                                    <TextInput
                                        label="Poštanski broj"
                                        placeholder="11000"
                                        required
                                        v-model="form.zipcode"
                                        :showError="!zipcodeCheck().value.valid && formSubmitted"
                                        :errorMessage="zipcodeCheck().value.message"
                                        :shakeTrigger="shakeTrigger" />
                                </div>
                            </div>
                            <div>
                                <TextInput
                                    label="PIB (samo za firme)"
                                    placeholder="Unesite PIB firme"
                                    :required="false"
                                    v-model="form.pib"
                                    :showError="!PIBCheck(false).value.valid && formSubmitted"
                                    :errorMessage="PIBCheck(false).value.message"
                                    :shakeTrigger="shakeTrigger" />
                            </div>
                        </div>
                    </div>

                    <div
                        class="w-full space-y-6 lg:max-w-xs xl:max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                        <CheckoutPrice :selectedPaymentMethod="formStore.checkout.meta.paymentMethod" />

                        <div class="space-y-3">
                            <button
                                type="submit"
                                class="flex w-full items-center justify-center rounded-md bg-primary-light hover:bg-rose-800 transition duration-75 px-5 py-2.5 text-sm font-medium text-white active:bg-primary">
                                Nastavi ka plaćanju
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useFormValidation } from '~/composables/useFormValidation'
import { useAuthStore } from '~/stores/AuthStore'
import { useFormStore } from '~/stores/FormStore'
import { useUserStore } from '~/stores/UserStore'

const formStore = useFormStore()
const authStore = useAuthStore()
const userStore = useUserStore()

const emit = defineEmits(['nextStep'])

function goToNextStep() {
    emit('nextStep')
}

const form = ref(formStore.checkout.form)

const formSubmitted = ref(false)
const shakeTrigger = ref(0)

const { fullNameCheck, emailCheck, phoneCheck, addressCheck, cityCheck, zipcodeCheck, PIBCheck } =
    useFormValidation(form)

const isFormInvalid = computed(() => {
    return !(
        fullNameCheck().value.valid &&
        emailCheck().value.valid &&
        addressCheck().value.valid &&
        cityCheck().value.valid &&
        phoneCheck().value.valid &&
        zipcodeCheck().value.valid &&
        PIBCheck(false).value.valid
    )
})

const resetForm = () => {
    formStore.resetCheckoutForm()
    formSubmitted.value = false
}

const submitForm = () => {
    formSubmitted.value = true
    if (isFormInvalid.value) {
        shakeTrigger.value++
        return
    }
    formStore.checkout.form = form.value
    goToNextStep()
}

const shouldPopulateField = (currentValue: string, userValue: string | undefined): boolean => {
    return currentValue === '' || currentValue === (userValue || '')
}

const populateUserData = async () => {
    try {
        if (!authStore.isLoggedIn || !userStore.user) return

        const { user } = userStore

        const userFullName = `${user.firstName} ${user.lastName}`
        const userPhone = user.phone?.replace('+381', '').trim() || ''

        const userDataUpdate = {
            fullname: shouldPopulateField(form.value.fullname, userFullName) ? userFullName : form.value.fullname,
            email: shouldPopulateField(form.value.email, user.email) ? user.email : form.value.email,
            phone: shouldPopulateField(form.value.phone, userPhone) ? userPhone : form.value.phone,
            address: shouldPopulateField(form.value.address, user.address) ? user.address || '' : form.value.address,
            city: shouldPopulateField(form.value.city, user.city) ? user.city || '' : form.value.city,
            zipcode: shouldPopulateField(form.value.zipcode, user.zipcode) ? user.zipcode || '' : form.value.zipcode,
        }

        form.value = { ...form.value, ...userDataUpdate }
    } catch (error) {
        console.error('Error fetching user data:', error)
    }
}

const initializeForm = async () => {
    const isFormEmpty = Object.values(form.value).every(val => val === '')
    if (isFormEmpty) {
        await populateUserData()
    }
}

onMounted(async () => {
    await userStore.fetchUserInfo()
    initializeForm()
})

onBeforeRouteLeave(() => {
    resetForm()
    return true
})
</script>
