<script setup lang="ts">
const t = useT()
// Plus (index 1) is highlighted as the recommended plan.
const popularIndex = 1
</script>

<template>
  <section id="pricing" class="scroll-mt-24 py-16 md:py-24">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl font-bold text-worket-black md:text-4xl">{{ t.pricing.title }}</h2>
        <p class="mt-4 text-lg text-worket-black/70">{{ t.pricing.subtitle }}</p>
      </div>

      <div class="mt-14 grid items-start gap-6 lg:grid-cols-3">
        <div
          v-for="(plan, i) in t.pricing.plans"
          :key="i"
          class="relative flex h-full flex-col rounded-3xl p-8 ring-1 transition-shadow"
          :class="i === popularIndex
            ? 'bg-worket-black text-white ring-worket-black shadow-xl lg:-translate-y-3'
            : 'bg-white text-worket-black ring-worket-black/10'"
        >
          <span
            v-if="i === popularIndex"
            class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-worket-red px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white"
          >
            {{ t.pricing.mostPopular }}
          </span>

          <h3 class="font-display text-2xl font-bold">{{ plan.name }}</h3>
          <p class="mt-1 text-sm" :class="i === popularIndex ? 'text-white/70' : 'text-worket-black/60'">
            {{ plan.tagline }}
          </p>

          <div class="mt-6 flex items-end gap-1">
            <span class="font-display text-4xl font-bold">{{ plan.price }}</span>
            <span v-if="plan.price !== 'Gratis' && plan.price !== 'Free'" class="pb-1 text-sm" :class="i === popularIndex ? 'text-white/70' : 'text-worket-black/60'">
              {{ t.pricing.perMonth }}
            </span>
          </div>
          <p v-if="plan.price !== 'Gratis' && plan.price !== 'Free'" class="mt-1 text-xs" :class="i === popularIndex ? 'text-white/50' : 'text-worket-black/50'">
            {{ t.pricing.billedYearly }}
          </p>

          <ul class="mt-7 space-y-3">
            <li v-for="(f, fi) in plan.features" :key="fi" class="flex items-start gap-2.5 text-sm">
              <UIcon
                name="lucide:circle-check"
                class="mt-0.5 size-5 shrink-0 text-worket-red"
              />
              <span :class="i === popularIndex ? 'text-white/90' : 'text-worket-black/80'">{{ f }}</span>
            </li>
          </ul>

          <div class="mt-8 grow" />
          <AppStoreButton :label="t.pricing.cta" size="md" class="w-full justify-center" />
        </div>
      </div>
    </UContainer>
  </section>
</template>
