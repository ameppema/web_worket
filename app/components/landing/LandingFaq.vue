<script setup lang="ts">
const t = useT()

const items = computed(() =>
  t.value.faq.items.map(item => ({ label: item.q, content: item.a })),
)
</script>

<template>
  <section id="faq" class="scroll-mt-24 bg-white py-16 md:py-24">
    <UContainer class="max-w-3xl">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-3xl font-bold text-worket-black md:text-4xl">{{ t.faq.title }}</h2>
        <p class="mt-4 text-lg text-worket-black/70">{{ t.faq.subtitle }}</p>
      </div>

      <UAccordion
        :items="items"
        class="mt-10"
        :ui="{
          item: 'border-b border-worket-black/10 py-2',
          trigger: 'py-4 text-base md:text-lg',
          label: 'font-medium text-worket-black',
          trailingIcon: 'size-5 md:size-6',
        }"
      >
        <template #body="{ item }">
          <p class="pb-4 text-base text-worket-black/70 md:text-lg">{{ item.content }}</p>
        </template>
      </UAccordion>
    </UContainer>
  </section>
</template>
