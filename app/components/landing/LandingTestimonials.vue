<script setup lang="ts">
const t = useT()
</script>

<template>
  <section class="bg-white py-16 md:py-24">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl font-bold text-worket-black md:text-4xl">{{ t.testimonials.title }}</h2>
        <p class="mt-4 text-lg text-worket-black/70">{{ t.testimonials.subtitle }}</p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2">
        <figure
          v-for="(item, i) in t.testimonials.items"
          :key="i"
          class="rounded-3xl bg-worket-cream p-7"
        >
          <div class="flex gap-0.5 text-worket-red">
            <UIcon v-for="s in 5" :key="s" name="lucide:star" class="size-5 fill-current" />
          </div>
          <blockquote class="mt-4 text-lg text-worket-black/80">“{{ item.quote }}”</blockquote>
          <figcaption class="mt-5 flex items-center gap-3">
            <span class="flex size-10 items-center justify-center rounded-full bg-worket-red/10 font-display font-semibold text-worket-red">
              {{ item.name.charAt(0) }}
            </span>
            <span>
              <span class="block font-semibold text-worket-black">{{ item.name }}</span>
              <span class="block text-sm text-worket-black/60">{{ item.role }}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </UContainer>
  </section>
</template>
