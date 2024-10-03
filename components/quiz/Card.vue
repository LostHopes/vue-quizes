<script lang="ts">

export default {
    props: {
        title: String,
        imgSrc: String,
        link: String,
    }
}
</script>

<template>
    <div class="bg-orange-200 rounded-2xl flex justify-between flex-col items-center duration-500 hover:cursor-pointer">
        <NuxtImg :src="imgSrc" />
        <label>{{ title }}</label>
    </div>
</template>