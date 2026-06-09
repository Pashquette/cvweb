import { onMounted, onUnmounted } from 'vue'

export function useReveal(selector = 'section[id]') {
  const observer = ref<IntersectionObserver | null>(null)

  onMounted(() => {
    const els = document.querySelectorAll<HTMLElement>(selector)
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => observer.value!.observe(el))
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return { observer }
}
