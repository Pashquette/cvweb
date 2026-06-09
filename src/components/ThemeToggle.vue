<script setup lang="ts">
const { isDark, toggle } = useTheme()
</script>

<template>
  <button
    @click="toggle"
    aria-label="Переключить тему"
    class="relative flex items-center justify-center w-6 h-6 overflow-hidden rounded-full transition-colors duration-200"
  >
    <Transition name="slide" mode="out-in">
      <span v-if="isDark" :key="'dark'" class="text-sm">🌙</span>
      <span v-else :key="'light'" class="text-sm">☀️</span>
    </Transition>
  </button>
</template>

<style scoped>
button:hover {
  background: var(--color-toggle-hover);
}
</style>
