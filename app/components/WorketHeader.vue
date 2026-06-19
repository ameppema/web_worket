<script setup lang="ts">
const { data: pages } = useNuxtData('pages')
const { locale, setLocale, locales } = useSiteLocale()

const localePages = computed(() =>
    (pages.value ?? []).filter(page => page.path.startsWith(`/${locale.value}/`))
)
</script>

<template>
    <header class="bg-default py-6 md:py-12 sticky top-0 shadow">
        <UContainer class="flex justify-between items-center px-6">
            <NuxtLink to="/">
                <WorketLogo class="h-8 md:h-12 text-highlighted" />
            </NuxtLink>

            <div class="flex items-center gap-2">
                <UButtonGroup>
                    <UButton
                        v-for="code in locales"
                        :key="code"
                        size="sm"
                        :variant="code === locale ? 'solid' : 'ghost'"
                        :color="code === locale ? 'primary' : 'neutral'"
                        @click="setLocale(code)"
                    >
                        {{ LOCALE_LABELS[code] }}
                    </UButton>
                </UButtonGroup>

                <WorketModal>
                    <UButton
                        variant="ghost"
                        color="neutral"
                        :ui="{ leadingIcon: 'size-8' }"
                        icon="material-symbols:menu-rounded"
                    />
                    <template #body>
                        <div class="flex flex-col text-center gap-4">
                            <NuxtLink
                                v-for="page in localePages"
                                :key="page.id"
                                :to="page.path"
                                class="p-4 rounded-full font-bold"
                            >
                                {{ page.title }}
                            </NuxtLink>
                        </div>
                    </template>
                </WorketModal>
            </div>
        </UContainer>
    </header>
</template>
