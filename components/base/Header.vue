<template>
    <header>
        <div class="flex justify-between items-center bg-blue-700 text-white p-5 max-sm:flex-col max-sm:space-y-5">

            <div class="max-sm:flex max-sm:flex-col max-sm:p-3 max-sm:self-start">

                <NuxtLink to="/" class="rounded-xl p-2 hover:bg-black transition ease-in-out duration-500">
                    Home
                </NuxtLink>

            </div>

            <div class="max-sm:flex max-sm:flex-col max-sm:p-3 max-sm:self-start">

                <NuxtLink to="/quizes" class="rounded-xl p-2 hover:bg-black transition ease-in-out duration-500">
                    Quizes
                </NuxtLink>

                <NuxtLink to="/articles" class="rounded-xl p-2 hover:bg-black transition ease-in-out duration-500">
                    Articles
                </NuxtLink>


            </div>

            <div class="max-sm:flex max-sm:flex-col max-sm:p-3 max-sm:self-start">

                <NuxtLink to="/register" class="rounded-xl p-2 hover:bg-black transition ease-in-out duration-500">
                    Register
                </NuxtLink>

                <NuxtLink to="/login" class="rounded-xl p-2 hover:bg-black transition ease-in-out duration-500">
                    Login
                </NuxtLink>

            </div>

        </div>
    </header>
</template>