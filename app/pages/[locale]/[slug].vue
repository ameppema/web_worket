<script setup lang="ts">
const route = useRoute()

if (!LOCALES.includes(route.params.locale as Locale)) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
    })
}

const { data: page } = await useAsyncData(
    `${route.params.locale}-${route.params.slug}`,
    () => queryCollection('content').path(`/${route.params.locale}/${route.params.slug}`).first()
)

if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
    })
}
</script>

<template>
    <div v-if="page" class="bg-white grow py-24">
        <UContainer class="prose mx-auto text-xl">
            <ContentRenderer :value="page" />
        </UContainer>
    </div>
</template>
