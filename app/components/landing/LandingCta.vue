<script setup lang="ts">
const t = useT()
</script>

<template>
  <section class="py-16 md:py-24">
    <UContainer>
      <div class="relative overflow-hidden rounded-[2.5rem] bg-worket-red px-8 py-16 text-center text-white md:px-16 md:py-20">
        <div class="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-white/10 blur-2xl" />
        <div class="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-black/10 blur-2xl" />

        <div class="relative">
          <WorketIsotype class="mx-auto h-14 text-white" />
          <h2 class="font-display mx-auto mt-6 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
            {{ t.cta.title }}
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-lg text-white/90">{{ t.cta.subtitle }}</p>
          <div class="mt-8 flex justify-center">
            <AppStoreButton :label="t.cta.button" tone="light" />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
