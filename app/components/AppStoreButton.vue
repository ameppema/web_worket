<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  size?: 'md' | 'lg'
  // 'dark' = black button (light backgrounds); 'light' = white button (dark backgrounds)
  tone?: 'dark' | 'light'
}>(), {
  label: '',
  size: 'lg',
  tone: 'dark',
})

// TODO: replace with the real App Store listing URL once published.
const APP_STORE_URL = 'https://apps.apple.com/app/worket'
</script>

<template>
  <a
    :href="APP_STORE_URL"
    target="_blank"
    rel="noopener"
    class="inline-flex items-center gap-3 rounded-full font-medium transition-transform hover:scale-[1.03]"
    :class="[
      size === 'lg' ? 'px-7 py-4 text-lg' : 'px-5 py-3 text-base',
      tone === 'light' ? 'bg-white text-worket-black' : 'bg-worket-black text-white',
    ]"
  >
    <!-- Apple logo (inline — not bundled with the icon sets in use) -->
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      class="shrink-0"
      :class="size === 'lg' ? 'size-6' : 'size-5'"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
    <span>{{ label }}</span>
  </a>
</template>
