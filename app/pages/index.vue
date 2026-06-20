<script setup lang="ts">
const t = useT()

useHead(() => ({
  title: 'Worket — ' + t.value.footer.tagline,
  meta: [
    { name: 'description', content: t.value.hero.subtitle },
  ],
}))
</script>

<template>
  <div class="w-full">
    <LandingHero />
    <LandingHowItWorks />
    <LandingFeatures />
    <LandingExamples />
    <LandingShowcase />
    <LandingWhy />
    <LandingTestimonials />
    <LandingPricing />
    <LandingFaq />
    <LandingCta />
  </div>
</template>
