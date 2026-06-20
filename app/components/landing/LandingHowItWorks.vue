<script setup lang="ts">
const t = useT()
const icons = [
  'lucide:circle-plus',
  'lucide:users',
  'lucide:message-circle',
  'lucide:star',
]
</script>

<template>
  <section id="how" class="scroll-mt-24 py-16 md:py-24">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl font-bold text-worket-black md:text-4xl">{{ t.how.title }}</h2>
        <p class="mt-4 text-lg text-worket-black/70">{{ t.how.subtitle }}</p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, i) in t.how.steps"
          :key="i"
          class="relative rounded-3xl bg-white p-7 shadow-sm ring-1 ring-worket-black/5"
        >
          <div class="flex size-12 items-center justify-center rounded-2xl bg-worket-red/10 text-worket-red">
            <UIcon :name="icons[i]!" class="size-7" />
          </div>
          <span class="absolute right-6 top-6 font-display text-4xl font-bold text-worket-black/10">
            {{ i + 1 }}
          </span>
          <h3 class="font-display mt-5 text-xl font-semibold text-worket-black">{{ step.title }}</h3>
          <p class="mt-2 text-worket-black/70">{{ step.text }}</p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
