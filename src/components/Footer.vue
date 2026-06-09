<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
const { isRu } = useLocale()
</script>

<template>
  <footer class="py-8 border-t" style="border-color: var(--color-border);">
    <div class="max-w-[72rem] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-xs" style="color: var(--color-text-muted);">
        © 2026 Pavel Martynov
      </p>
      <p class="text-xs" style="color: var(--color-text-muted);">
        <span style="color: var(--color-accent);">&lt;</span>
        <template v-if="isRu">Сделано с любовью к коду</template>
        <template v-else>Made with love for code</template>
        <span style="color: var(--color-accent);">/</span><span style="color: var(--color-accent);">&gt;</span>
      </p>
    </div>
  </footer>
</template>
