<template>
    <div class="bg-white rounded-lg border px-6 py-5 shadow-sm">
        <div class="flex flex-col lg:flex-row justify-between gap-8">
            <div class="flex-1 min-w-0">
                <h2 class="font-semibold text-lg border-b pb-2 border-gray-200">Detalji o korisniku</h2>
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 border-b border-gray-200 py-4">
                    <div class="space-y-4 break-words min-w-0">
                        <div>
                            <h3 class="text-sm font-semibold text-gray-500">Ime i prezime</h3>
                            <p class="text-gray-700 mt-1 font-medium">{{ userFullName }}</p>
                        </div>
                        <div>
                            <h3 class="text-sm font-semibold text-gray-500">Email adresa</h3>
                            <p class="text-gray-700 mt-1 font-medium">{{ authStore.user?.email || noData }}</p>
                        </div>
                        <div>
                            <h3 class="text-sm font-semibold text-gray-500">Broj telefona</h3>
                            <p class="text-gray-700 mt-1 font-medium">{{ phoneNumber }}</p>
                        </div>
                    </div>
                    <div class="space-y-4 break-words min-w-0">
                        <div>
                            <h3 class="text-sm font-semibold text-gray-500">Adresa</h3>
                            <p class="text-gray-700 mt-1 font-medium">{{ user?.address || noData }}</p>
                        </div>
                        <div>
                            <h3 class="text-sm font-semibold text-gray-500">Grad i poštanski broj</h3>
                            <p class="text-gray-700 mt-1 font-medium">{{ cityZipcode }}</p>
                        </div>
                    </div>
                </div>
                <UserDetailsModal />
            </div>
            <div class="lg:w-80 lg:pl-6 border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 border-gray-200">
                <div>
                    <h2 class="font-semibold text-lg border-b pb-2 border-gray-200">Status profila</h2>
                    <ProfileProgressBar v-if="user" :user="user" />
                    <div class="space-y-3 mt-4 font-medium">
                        <div class="flex items-center text-sm">
                            <CheckMarkIcon class="size-5 text-green-500 me-2" />
                            <span>Verifikovan email</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <CheckMarkIcon class="size-5 text-green-500 me-2" />
                            <span>Dodat broj telefona</span>
                        </div>
                        <AddressCheck :address="user?.address" />
                        <CityZipcodeCheck :city="user?.city" :zipcode="user?.zipcode" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { User } from '~/shared/classes/User'
import CheckMarkIcon from './icons/CheckMarkIcon.vue'
import { useUserStore } from '~/stores/UserStore'
import { useAuthStore } from '~/stores/AuthStore'

const authStore = useAuthStore()
const userStore = useUserStore()

const user = computed<User | null>(() => userStore.user)

const noData: string = '– '

const userFullName = computed<string>(() => {
    if (!user.value) return noData
    const firstName = user.value.firstName.trim() || ''
    const lastName = user.value.lastName.trim() || ''
    return `${firstName} ${lastName}`.trim()
})

const cityZipcode = computed<string>(() => {
    if (!user.value?.city && !user.value?.zipcode) return noData
    const city = user.value.city.trim() || noData
    const zipcode = user.value.zipcode.trim() || noData
    return `${city}, ${zipcode}`.trim()
})

const phoneNumber = computed<string>(() => {
    if (!user.value?.phone) return noData
    return `${user.value.phone.slice(0, 4)} ${user.value.phone.slice(4, 7)} ${user.value.phone.slice(7)}`
})

onMounted(async () => {
    await userStore.fetchUserInfo()
})
</script>
