<script lang="ts">

export default {
    props: {
        title: String,
        imgSrc: String
    }
}

</script>

<template>
    <div
        class="bg-orange-200 2xl:w-96 2xl:h-96 xl:h-80 xl:w-80 rounded-2xl flex justify-between flex-col items-center hover:scale-105 duration-500 hover:cursor-pointer">
        <NuxtImg :src="imgSrc" />
        <label>{{ title }}</label>
    </div>
</template>