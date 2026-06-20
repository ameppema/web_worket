<script setup lang="ts">
const t = useT()

// Split the offers into two rows that scroll in opposite directions.
const rowA = computed(() => t.value.examples.offers.filter((_, i) => i % 2 === 0))
const rowB = computed(() => t.value.examples.offers.filter((_, i) => i % 2 === 1))
</script>

<template>
  <section class="overflow-hidden py-16 md:py-24">
    <UContainer>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl font-bold text-worket-black md:text-4xl">{{ t.examples.title }}</h2>
        <p class="mt-4 text-lg text-worket-black/70">{{ t.examples.subtitle }}</p>
      </div>
    </UContainer>

    <!-- edge-to-edge marquee rows -->
    <div class="marquee group mt-12">
      <div class="marquee-track marquee-track--left">
        <LandingOfferCard v-for="(offer, i) in [...rowA, ...rowA]" :key="`a-${i}`" :offer="offer" />
      </div>
    </div>
    <div class="marquee group mt-6">
      <div class="marquee-track marquee-track--right">
        <LandingOfferCard v-for="(offer, i) in [...rowB, ...rowB]" :key="`b-${i}`" :offer="offer" />
      </div>
    </div>

    <p class="mt-10 text-center text-sm text-worket-black/40">{{ t.examples.hint }}</p>
  </section>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}

.marquee-track {
  display: flex;
  gap: 1.5rem;
  width: max-content;
  padding-inline: 0.75rem;
}

/* Two copies of the row sit side by side; shifting by -50% loops seamlessly. */
.marquee-track--left {
  animation: marquee-left 46s linear infinite;
}
.marquee-track--right {
  animation: marquee-right 52s linear infinite;
}

.group:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-left {
  to {
    transform: translateX(-50%);
  }
}
@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    overflow-x: auto;
  }
  .marquee-track {
    animation: none;
  }
}
</style>
