<script setup lang="ts">
const { data: pages } = useNuxtData('pages')
const { locale } = useSiteLocale()
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
    <footer class="bg-worket-black text-white dark">
        <UContainer class="py-14">
            <div class="flex flex-col gap-10 md:flex-row md:justify-between">
                <!-- brand -->
                <div class="max-w-xs">
                    <WorketLogo class="h-9 text-white" solid />
                    <p class="mt-4 text-white/60">{{ t.footer.tagline }}</p>
                    <AppStoreButton :label="t.nav.download" size="md" tone="light" class="mt-6" />
                </div>

                <!-- link columns -->
                <div class="flex flex-col gap-10 sm:flex-row sm:gap-20">
                    <div>
                        <h3 class="font-display font-semibold text-white">Worket</h3>
                        <ul class="mt-4 space-y-2.5">
                            <li v-for="link in navLinks" :key="link.to">
                                <NuxtLink :to="link.to" class="text-white/60 hover:text-white transition-colors">
                                    {{ link.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div v-if="localePages.length">
                        <h3 class="font-display font-semibold text-white">Legal</h3>
                        <ul class="mt-4 space-y-2.5">
                            <li v-for="page in localePages" :key="page.id">
                                <NuxtLink :to="page.path" class="text-white/60 hover:text-white transition-colors">
                                    {{ page.title }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mt-12 border-t border-white/10 pt-6 text-sm text-white/40">
                © {{ new Date().getFullYear() }} Worket. {{ t.footer.rights }}
            </div>
        </UContainer>
    </footer>
</template>
