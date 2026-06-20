<script setup lang="ts">
const { data: pages } = useNuxtData('pages')
const { locale, setLocale, locales } = useSiteLocale()
const t = useT()

const localePages = computed(() =>
    (pages.value ?? []).filter(page => page.path.startsWith(`/${locale.value}/`))
)

const navLinks = computed(() => [
    { label: t.value.nav.how, to: '/#how' },
    { label: t.value.nav.features, to: '/#features' },
    { label: t.value.nav.pricing, to: '/#pricing' },
    { label: t.value.nav.faq, to: '/#faq' },
])
</script>

<template>
    <header class="bg-worket-cream/80 backdrop-blur py-4 md:py-5 sticky top-0 z-50 border-b border-worket-black/5">
        <UContainer class="flex justify-between items-center gap-4 px-6">
            <NuxtLink to="/" class="shrink-0">
                <WorketLogo class="h-8 md:h-9 text-worket-black" />
            </NuxtLink>

            <!-- desktop section nav -->
            <nav class="hidden lg:flex items-center gap-8">
                <NuxtLink
                    v-for="link in navLinks"
                    :key="link.to"
                    :to="link.to"
                    class="text-worket-black/70 font-medium hover:text-worket-red transition-colors"
                >
                    {{ link.label }}
                </NuxtLink>
            </nav>

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

                <span class="hidden md:inline-flex">
                    <AppStoreButton :label="t.nav.download" size="md" />
                </span>

                <WorketModal>
                    <UButton
                        class="lg:hidden"
                        variant="ghost"
                        color="neutral"
                        :ui="{ leadingIcon: 'size-8' }"
                        icon="lucide:menu"
                    />
                    <template #body>
                        <div class="flex flex-col text-center gap-2">
                            <NuxtLink
                                v-for="link in navLinks"
                                :key="link.to"
                                :to="link.to"
                                class="p-3 rounded-full font-bold text-worket-black"
                            >
                                {{ link.label }}
                            </NuxtLink>
                            <div class="my-2 border-t border-worket-black/10" />
                            <NuxtLink
                                v-for="page in localePages"
                                :key="page.id"
                                :to="page.path"
                                class="p-3 rounded-full text-worket-black/70"
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
