<template>
    <header>
        <div class="flex max-sm:flex-col justify-center bg-blue-700 text-white p-5 2xl:space-x-10 xl:space-x-16 md:space-x-20">
            <div class="max-sm:p-3">
                <NuxtLink to="/quizes" class="rounded-xl p-2 hover:bg-black transition ease-in-out duration-500">
                    Quizes
                </NuxtLink>
            </div>

            <div class="max-sm:p-3">
                <NuxtLink to="/articles" class="rounded-xl p-2 hover:bg-black transition ease-in-out duration-500">
                    Articles
                </NuxtLink>
            </div>

            <div class="max-sm:p-3">
                <NuxtLink to="/register" class="rounded-xl p-2 hover:bg-black transition ease-in-out duration-500">
                    Register
                </NuxtLink>
            </div>

            <div class="max-sm:p-3">
                <NuxtLink to="/login" class="rounded-xl p-2 hover:bg-black transition ease-in-out duration-500">
                Login
                </NuxtLink>
            </div>
        </div>
    </header>
</template>