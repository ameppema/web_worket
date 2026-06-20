<script setup lang="ts">
const t = useT()
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- soft brand glow -->
    <div class="pointer-events-none absolute -top-40 -right-40 size-[32rem] rounded-full bg-worket-red/10 blur-3xl" />

    <UContainer class="relative py-16 md:py-28">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- copy -->
        <div class="text-center lg:text-left">
          <span class="inline-flex items-center gap-2 rounded-full bg-worket-red/10 px-4 py-1.5 text-sm font-medium text-worket-red">
            <span class="size-2 rounded-full bg-worket-red" />
            {{ t.hero.badge }}
          </span>

          <h1 class="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-worket-black sm:text-5xl md:text-6xl">
            {{ t.hero.title }}
            <span class="text-worket-red">{{ t.hero.highlight }}</span>
          </h1>

          <p class="mx-auto mt-6 max-w-xl text-lg text-worket-black/70 lg:mx-0">
            {{ t.hero.subtitle }}
          </p>

          <div class="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start sm:justify-center">
            <AppStoreButton :label="t.hero.ctaPrimary" />
            <a
              href="#how"
              class="inline-flex items-center gap-2 rounded-full px-6 py-4 text-lg font-medium text-worket-black transition-colors hover:text-worket-red"
            >
              {{ t.hero.ctaSecondary }}
              <UIcon name="lucide:arrow-down" class="size-5" />
            </a>
          </div>

          <p class="mt-5 text-sm text-worket-black/50">{{ t.hero.note }}</p>
        </div>

        <!-- phone mockup -->
        <div class="relative flex justify-center lg:justify-end">
          <div class="absolute inset-0 -z-10 m-auto size-[26rem] rounded-full bg-worket-red/5 blur-2xl" />
          <div class="relative w-64 sm:w-72 rounded-[2.75rem] border-[10px] border-worket-black bg-worket-black shadow-2xl">
            <img
              src="/screens/feed.png"
              alt="Worket app feed"
              class="w-full rounded-[2rem]"
              loading="eager"
            >
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
