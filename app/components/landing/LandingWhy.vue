<script setup lang="ts">
const t = useT()
</script>

<template>
  <section class="py-16 md:py-24">
    <UContainer>
      <div class="relative overflow-hidden rounded-[2.5rem] bg-worket-black px-6 py-14 text-white md:px-16 md:py-20">
        <div class="pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-worket-red/20 blur-3xl" />

        <div class="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <!-- heading -->
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80">
              <span class="size-2 rounded-full bg-worket-red" />
              {{ t.why.badge }}
            </span>
            <h2 class="font-display mt-6 text-3xl font-bold leading-tight md:text-4xl">
              {{ t.why.title }}
            </h2>
            <WorketIsotype class="mt-8 hidden h-16 text-worket-red lg:block" />
          </div>

          <!-- narrative -->
          <div>
            <div class="space-y-5 text-lg leading-relaxed text-white/75">
              <p v-for="(p, i) in t.why.paragraphs" :key="i" :class="i === 0 ? 'text-white/90' : ''">
                {{ p }}
              </p>
            </div>
            <p class="font-display mt-8 text-lg font-semibold text-white">— {{ t.why.signature }}</p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
