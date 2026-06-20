<script setup lang="ts">
import type { LandingMessages } from '~/composables/useTranslations'

defineProps<{
  offer: LandingMessages['examples']['offers'][number]
}>()

const toneClasses: Record<string, string> = {
  urgent: 'text-worket-red ring-worket-red/30 bg-worket-red/5',
  today: 'text-amber-600 ring-amber-500/30 bg-amber-500/5',
  week: 'text-emerald-600 ring-emerald-500/30 bg-emerald-500/5',
}
</script>

<template>
  <article class="flex w-[19rem] shrink-0 flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-worket-black/5">
    <span
      class="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ring-1"
      :class="toneClasses[offer.tone]"
    >
      {{ offer.badge }}
    </span>

    <h3 class="font-display mt-4 text-lg font-semibold leading-snug text-worket-black">
      {{ offer.title }}
    </h3>
    <p class="mt-2 line-clamp-3 text-sm text-worket-black/60">{{ offer.text }}</p>

    <div class="mt-5 flex items-center justify-between gap-3 border-t border-worket-black/5 pt-4">
      <span class="flex min-w-0 items-center gap-1.5 text-xs text-worket-black/50">
        <UIcon name="lucide:map-pin" class="size-3.5 shrink-0" />
        <span class="truncate">{{ offer.location }}</span>
      </span>
      <span class="flex shrink-0 items-center gap-1 text-xs font-medium text-worket-black/70">
        <UIcon name="lucide:star" class="size-3.5 fill-amber-400 text-amber-400" />
        {{ offer.rating }}
      </span>
    </div>
  </article>
</template>
