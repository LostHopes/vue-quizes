<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `Quiz-app | ${title}` : "Quiz-app";
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
