<script setup lang="ts">
import { useT } from '../locales'
import { computed } from 'vue'

const t = useT()

const facts = computed(() => [
  { label: t('about.fact1.label'), value: t('about.fact1.value') },
  { label: t('about.fact2.label'), value: t('about.fact2.value') },
  { label: t('about.fact3.label'), value: t('about.fact3.value') },
])
</script>

<template>
  <section id="about" class="py-16">
    <div>
      <h2 class="text-xs tracking-widest uppercase mb-8" style="color: var(--color-accent);">{{ t('about.title') }}</h2>

      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <p class="text-sm leading-relaxed" style="color: var(--color-text-secondary);">
            {{ t('about.text1') }}
          </p>
          <p class="mt-4 text-sm leading-relaxed" style="color: var(--color-text-secondary);">
            {{ t('about.text2') }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6">
          <div v-for="fact in facts" :key="fact.label" class="flex flex-col">
            <span class="text-2xl font-bold" style="color: var(--color-text-primary);">{{ fact.value }}</span>
            <span class="text-xs mt-1" style="color: var(--color-text-muted);">{{ fact.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
