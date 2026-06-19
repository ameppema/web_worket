<script setup lang="ts">
const { data: pages } = useNuxtData('pages')
const { locale } = useSiteLocale()

const localePages = computed(() =>
    (pages.value ?? []).filter(page => page.path.startsWith(`/${locale.value}/`))
)
</script>

<template>
    <footer class="bg-worket-black text-highlighted dark py-12">
        <UContainer class="flex justify-center max-md:flex-col gap-12">
            <div class="flex max-md:flex-col items-center gap-4 md:gap-2">
                <template v-for="(page, index) in localePages" :key="page.id">
                    <NuxtLink :to="page.path">
                        {{ page.title }}
                    </NuxtLink>
                    <span v-if="index !== localePages.length - 1" class="max-md:hidden">&middot;</span>
                </template>
            </div>
        </UContainer>
    </footer>
</template>
