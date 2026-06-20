<script setup lang="ts">
const t = useT()
const icons = [
  'lucide:navigation',
  'lucide:tag',
  'lucide:messages-square',
  'lucide:shield-check',
  'lucide:hand-coins',
  'lucide:bookmark',
]
</script>

<template>
  <section id="features" class="scroll-mt-24 bg-white py-16 md:py-24">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl font-bold text-worket-black md:text-4xl">{{ t.features.title }}</h2>
        <p class="mt-4 text-lg text-worket-black/70">{{ t.features.subtitle }}</p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(item, i) in t.features.items"
          :key="i"
          class="group rounded-3xl bg-worket-cream p-7 transition-shadow hover:shadow-md"
        >
          <div class="flex size-12 items-center justify-center rounded-2xl bg-worket-red text-white">
            <UIcon :name="icons[i]!" class="size-7" />
          </div>
          <h3 class="font-display mt-5 text-xl font-semibold text-worket-black">{{ item.title }}</h3>
          <p class="mt-2 text-worket-black/70">{{ item.text }}</p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
