import { ref, computed } from 'vue'

const currentLocale = ref<'ru' | 'en'>('ru')

export function useLocale() {
  onMounted(() => {
    const stored = localStorage.getItem('locale') as 'ru' | 'en' | null
    if (stored && (stored === 'ru' || stored === 'en')) {
      currentLocale.value = stored
    }
  })

  function setLocale(locale: 'ru' | 'en') {
    currentLocale.value = locale
    localStorage.setItem('locale', locale)
  }

  const isRu = computed(() => currentLocale.value === 'ru')
  const isEn = computed(() => currentLocale.value === 'en')

  return { locale: currentLocale, setLocale, isRu, isEn }
}
