<template>
    <div class="min-h-screen py-10">
        <div class="max-w-screen-xl mx-auto px-5 2xl:px-0">
            <h2 class="font-semibold text-xl sm:text-2xl ps-0.5 pb-2 sm:pb-4 border-b-2 border-gray-200">Vaš nalog</h2>
            <div class="flex flex-col md:flex-row gap-4 mt-5">
                <AccountActionsSidebar />

                <main class="flex-1">
                    <div class="space-y-3">
                        <BuyerStatistics />

                        <AccountDetails />
                        <div class="bg-white rounded-lg border p-6 shadow-sm">
                            <h2 class="font-semibold text-lg mb-4">Active orders</h2>
                            <div class="space-y-4">
                                <div class="flex justify-between text-sm">
                                    <div>#FWB125467980</div>
                                    <div>27.01.2024</div>
                                    <div class="font-semibold">$4,799</div>
                                    <div class="text-yellow-600 font-medium">In transit</div>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <div>#FWB125467971</div>
                                    <div>11.12.2023</div>
                                    <div class="font-semibold">$964</div>
                                    <div class="text-primary-light font-medium">Pre-order</div>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <div>#FWB125467865</div>
                                    <div>05.04.2023</div>
                                    <div class="font-semibold">$230</div>
                                    <div class="text-green-600 font-medium">Confirmed</div>
                                </div>
                            </div>
                            <button class="mt-4 px-4 py-2 text-sm bg-primary-light text-white rounded">
                                See all orders
                            </button>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="bg-white rounded-lg border p-6 shadow-sm">
                                <h2 class="font-semibold mb-2">My addresses</h2>
                                <p class="text-sm text-gray-600">Bonnie Green</p>
                                <p class="text-sm text-gray-500 italic">92 Miles Drive, Newark, NJ 07103</p>
                                <button class="mt-4 px-4 py-2 text-sm bg-gray-100 rounded">Edit</button>
                            </div>

                            <div class="bg-white rounded-lg border p-6 shadow-sm">
                                <h2 class="font-semibold mb-2">My companies</h2>
                                <p class="text-sm text-gray-600">Flowbite LLC</p>
                                <p class="text-sm text-gray-500 italic">92 Miles Drive, Newark, NJ 07103</p>
                                <button class="mt-4 px-4 py-2 text-sm bg-gray-100 rounded">Edit</button>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="bg-white rounded-lg border p-6 shadow-sm">
                                <h2 class="font-semibold mb-2">My cards</h2>
                                <p class="text-sm text-gray-600">Visa ending in 7658</p>
                                <p class="text-sm text-gray-500">Expiry 10/2024</p>
                                <div class="space-x-2 mt-2">
                                    <button class="text-xs text-red-600">Delete</button>
                                    <button class="text-xs text-primary-light">Edit</button>
                                </div>
                                <button class="mt-4 px-4 py-2 text-sm bg-primary-light text-white rounded">
                                    Manage cards
                                </button>
                            </div>

                            <div class="bg-white rounded-lg border p-6 shadow-sm flex items-center justify-between">
                                <div>
                                    <h2 class="font-semibold mb-2">Help Us Improve!</h2>
                                    <p class="text-sm text-gray-500">
                                        Periodically, we'll ask for your opinion on studies that help us improve your
                                        experience.
                                    </p>
                                    <button class="mt-4 px-4 py-2 text-sm bg-primary-light text-white rounded">
                                        Participate Now
                                    </button>
                                </div>
                                <div class="hidden md:block w-24 h-24 bg-gray-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>
