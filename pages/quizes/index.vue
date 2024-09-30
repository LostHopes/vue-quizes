<script setup lang="ts">
useHead({
    title: "Quizes",
})

</script>

<template>
    <div class="flex flex-col">
        <div class="flex justify-center mt-8">
            <QuizSearch class="border-2 border-black rounded-lg p-2 mb-20" />
        </div>
        <div class="grid grid-cols-3 mb-48 place-items-center">
            <QuizCard class="hover:scale-105 2xl:w-96 2xl:h-96 xl:h-72 xl:w-72 md:w-48 md:h-48 sm:w-36 sm:h-36" />
            <QuizCard class="hover:scale-105 2xl:w-96 2xl:h-96 xl:h-72 xl:w-72 md:w-48 md:h-48 sm:w-36 sm:h-36" />
            <QuizCard class="hover:scale-105 2xl:w-96 2xl:h-96 xl:h-72 xl:w-72 md:w-48 md:h-48 sm:w-36 sm:h-36" />
        </div>
    </div>
</template>