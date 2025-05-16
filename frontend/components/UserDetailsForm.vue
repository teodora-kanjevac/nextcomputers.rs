<template>
    <form @submit.prevent="changeUserDetails()">
        <div class="grid sm:grid-cols-2 gap-4 mb-4 pb-5 border-b border-gray-200">
            <TextInput
                label="Ime"
                placeholder="Vaše ime"
                required
                v-model="form.firstName"
                :showError="!firstNameCheck().value.valid && formSubmitted"
                :errorMessage="firstNameCheck().value.message"
                :shakeTrigger="shakeTrigger" />
            <TextInput
                label="Prezime"
                placeholder="Vaše prezime"
                required
                v-model="form.lastName"
                :showError="!lastNameCheck().value.valid && formSubmitted"
                :errorMessage="lastNameCheck().value.message"
                :shakeTrigger="shakeTrigger" />
            <PhoneInput
                label="Broj telefona"
                placeholder="61 2345678"
                required
                v-model="form.phone"
                :showError="!phoneCheck().value.valid && formSubmitted"
                :errorMessage="phoneCheck().value.message"
                :shakeTrigger="shakeTrigger" />
            <TextInput
                label="Adresa"
                placeholder="Vaša ulica i broj"
                :required="false"
                v-model="form.address"
                :showError="!addressCheck(false).value.valid && formSubmitted"
                :errorMessage="addressCheck(false).value.message"
                :shakeTrigger="shakeTrigger" />
            <TextInput
                label="Grad"
                placeholder="Beograd, Zaječar, Niš..."
                :required="false"
                v-model="form.city"
                :showError="!cityCheck(false).value.valid && formSubmitted"
                :errorMessage="cityCheck(false).value.message"
                :shakeTrigger="shakeTrigger" />
            <TextInput
                label="Poštanski broj"
                placeholder="11000"
                :required="false"
                v-model="form.zipcode"
                :showError="!zipcodeCheck(false).value.valid && formSubmitted"
                :errorMessage="zipcodeCheck(false).value.message"
                :shakeTrigger="shakeTrigger" />
            </div>
            <p class="text-xs border-b border-gray-200 pb-4 mb-4 ps-2">
                <span class="text-red-600 font-bold pe-1">!</span>
                Molimo da podaci koje unosite budu tačni i kompletni kako bi Vam omogućili što bolje korisničko iskustvo. Hvala na razumevanju.
            </p>
        <button
            type="submit"
            class="text-white flex items-center font-medium rounded-md text-sm mt-2 px-4 py-2 text-center bg-primary-light sm:w-fit disabled:contrast-75 enabled:hover:bg-rose-800"
            :disabled="sharedStore.loading">
            <template v-if="sharedStore.loading">
                <SubmitionSpinner class="size-5 px-5" />
            </template>
            <template v-else>
                <PenIcon class="size-5 me-2 -ms-1 shrink-0" />
                <span>Potvrdi izmene</span>
            </template>
        </button>
    </form>
</template>

<script setup lang="ts">
import PenIcon from './icons/PenIcon.vue'
import { useFormStore } from '~/stores/FormStore'
import { useSharedStore } from '~/stores/SharedStore'
import type { User } from '~/shared/classes/User'
import { useUserStore } from '~/stores/UserStore'
import { useAuthStore } from '~/stores/AuthStore'

const formStore = useFormStore()
const authStore = useAuthStore()
const userStore = useUserStore()
const sharedStore = useSharedStore()
const { showNotification } = useNotification()

const user = computed<User | null>(() => userStore.user)
const form = ref(formStore.editUserData.form)
const emit = defineEmits(['closeModal'])

const formSubmitted = ref(false)
const shakeTrigger = ref(0)

const { firstNameCheck, lastNameCheck, phoneCheck, addressCheck, cityCheck, zipcodeCheck } = useFormValidation(form)

const isFormInvalid = computed(() => {
    return !(
        firstNameCheck().value.valid &&
        lastNameCheck().value.valid &&
        addressCheck(false).value.valid &&
        cityCheck(false).value.valid &&
        zipcodeCheck(false).value.valid &&
        phoneCheck().value.valid
    )
})

const resetForm = () => {
    formStore.resetEditUserForm()
    formSubmitted.value = false
}

const changeUserDetails = async () => {
    formSubmitted.value = true
    if (isFormInvalid.value) {
        shakeTrigger.value++
        return
    }
    try {
        sharedStore.setLoading(true)
        formStore.editUserData.form = {
            ...form.value,
            phone: `+381 ${form.value.phone.replace(/^0/, '')}`,
        }

        await userStore.editUserData(formStore.editUserData.form)
        resetForm()

        emit("closeModal")
        showNotification('success', 'Uspešna izmena!', 'Podaci su uspešno ažurirani.', 4000)
    } catch (error: any) {
        emit("closeModal")
        showNotification(
            'error',
            'Greška pri izmeni podataka!',
            'Došlo je do greške pri izmeni podataka. Molimo pokušajte ponovo kasnije.'
        )
    } finally {
        sharedStore.loading = false
    }
}

onMounted(async () => {
    await authStore.getMe()
    await userStore.fetchUserInfo()

    form.value = {
        firstName: user.value?.firstName || '',
        lastName: user.value?.lastName || '',
        phone: user.value?.phone?.replace('+381', '').trim() || '',
        address: user.value?.address || '',
        city: user.value?.city || '',
        zipcode: user.value?.zipcode || '',
    }
})

onBeforeUnmount(() => {
    resetForm()
})
</script>
