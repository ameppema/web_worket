export const LOCALES = ['es', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'es'

export const LOCALE_LABELS: Record<Locale, string> = {
    es: 'ES',
    en: 'EN',
}

/**
 * Lightweight locale handling without @nuxt/i18n.
 * The current locale is taken from the `/[locale]/[slug]` route param when on a
 * legal page, falling back to a persisted cookie (default `es`) elsewhere.
 */
export const useSiteLocale = () => {
    const route = useRoute()
    const router = useRouter()
    const cookie = useCookie<Locale>('locale', { default: () => DEFAULT_LOCALE })

    const locale = computed<Locale>(() => {
        const param = route.params.locale as string | undefined
        return LOCALES.includes(param as Locale) ? (param as Locale) : cookie.value
    })

    function setLocale(target: Locale) {
        cookie.value = target
        // If we are on a legal page, jump to its equivalent in the target locale.
        if (route.params.slug) {
            router.push(`/${target}/${route.params.slug}`)
        }
    }

    return { locale, cookie, setLocale, locales: LOCALES }
}
