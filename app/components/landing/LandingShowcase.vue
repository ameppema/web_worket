<script setup lang="ts">
const t = useT()
</script>

<template>
  <section class="overflow-hidden py-16 md:py-24">
    <UContainer>
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- phones -->
        <div class="relative flex justify-center">
          <div class="absolute inset-0 -z-10 m-auto size-[24rem] rounded-full bg-worket-red/5 blur-2xl" />
          <div class="relative w-40 translate-y-6 rounded-[2rem] border-[8px] border-worket-black bg-worket-black shadow-2xl sm:w-56 sm:rounded-[2.25rem]">
            <img src="/screens/radius.png" alt="Search radius" class="w-full rounded-[1.4rem] sm:rounded-[1.6rem]" loading="lazy">
          </div>
          <div class="relative -ml-8 w-40 -translate-y-6 rounded-[2rem] border-[8px] border-worket-black bg-worket-black shadow-2xl sm:-ml-10 sm:w-56 sm:rounded-[2.25rem]">
            <img src="/screens/chat.png" alt="In-app chat" class="w-full rounded-[1.4rem] sm:rounded-[1.6rem]" loading="lazy">
          </div>
        </div>

        <!-- copy -->
        <div>
          <h2 class="font-display text-3xl font-bold text-worket-black md:text-4xl">{{ t.showcase.title }}</h2>
          <p class="mt-4 text-lg text-worket-black/70">{{ t.showcase.subtitle }}</p>

          <ul class="mt-8 space-y-4">
            <li v-for="(point, i) in t.showcase.points" :key="i" class="flex items-start gap-3">
              <span class="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-worket-red/10 text-worket-red">
                <UIcon name="lucide:check" class="size-4" />
              </span>
              <span class="text-worket-black/80">{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>
  </section>
</template>
