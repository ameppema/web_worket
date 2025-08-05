<script setup lang="ts">
useHead({
  title: 'Worket',
})

const { dimensions } = useDimensions()

await useAsyncData('pages', () => queryCollection('content').all())

onMounted(() => {
  if (import.meta.client) {
    dimensions.value.width = window.innerWidth
    dimensions.value.height = window.innerHeight

    window.addEventListener('resize', () => {
        dimensions.value.width = window.innerWidth
        dimensions.value.height = window.innerHeight
    })
  }
})
</script>

<template>
  <UApp>
    <div class="bg-default min-h-[100svh] flex flex-col">
      <WorketHeader />
      <main class="grow flex">
        <NuxtPage />
      </main>
      <WorketFooter />
    </div>
  </UApp>
</template>