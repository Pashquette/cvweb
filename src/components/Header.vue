<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import { useLocale } from '../composables/useLocale'
import { useT } from '../locales'

const { setLocale, isRu } = useLocale()
const t = useT()

const isOpen = ref(false)

function toggleLang() {
  setLocale(isRu.value ? 'en' : 'ru')
}

function closeMenu() {
  isOpen.value = false
}

function onResize() {
  if (window.innerWidth >= 768) {
    isOpen.value = false
  }
}

onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
    :style="{
      background: 'color-mix(in srgb, var(--color-bg-primary) 80%, transparent)',
      borderColor: 'var(--color-border)',
    }"
  >
    <div class="max-w-[72rem] mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="text-sm font-semibold tracking-tight" style="color: var(--color-text-primary);">
        <span style="color: var(--color-accent);">&lt;</span>@pashquette<span style="color: var(--color-accent);">/</span><span style="color: var(--color-accent);">&gt;</span>
      </div>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6">
        <a href="#about" class="nav-link text-xs" :style="{ color: 'var(--color-text-muted)' }">{{ t('nav.about') }}</a>
        <a href="#experience" class="nav-link text-xs" :style="{ color: 'var(--color-text-muted)' }">{{ t('nav.experience') }}</a>
        <a href="#education" class="nav-link text-xs" :style="{ color: 'var(--color-text-muted)' }">{{ t('nav.education') }}</a>
        <a href="#skills" class="nav-link text-xs" :style="{ color: 'var(--color-text-muted)' }">{{ t('nav.skills') }}</a>
        <a href="#contacts" class="nav-link text-xs" :style="{ color: 'var(--color-text-muted)' }">{{ t('nav.contacts') }}</a>

        <div class="w-px h-4" :style="{ background: 'var(--color-border)' }" />

        <button
          @click="toggleLang"
          class="lang-switcher text-xs font-medium cursor-pointer select-none"
        >
          <span class="lang-ru" :class="{ active: isRu }">RU</span>
          <span class="lang-sep">/</span>
          <span class="lang-en" :class="{ active: !isRu }">EN</span>
        </button>

        <ThemeToggle />
      </nav>

      <!-- Mobile burger / close with animation -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden burger-btn w-8 h-8 relative flex items-center justify-center"
      >
        <span class="burger-line" :class="{ open: isOpen }" />
        <span class="burger-line" :class="{ open: isOpen }" />
        <span class="burger-line" :class="{ open: isOpen }" />
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div
      class="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
      :class="isOpen ? 'mobile-open' : 'mobile-closed'"
      :style="{ background: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }"
    >
      <nav class="px-6 py-4 flex flex-col gap-0">
        <a href="#about" @click="closeMenu" class="mobile-link py-3" :style="{ color: 'var(--color-text-primary)' }">{{ t('nav.about') }}</a>
        <a href="#experience" @click="closeMenu" class="mobile-link py-3" :style="{ color: 'var(--color-text-primary)' }">{{ t('nav.experience') }}</a>
        <a href="#education" @click="closeMenu" class="mobile-link py-3" :style="{ color: 'var(--color-text-primary)' }">{{ t('nav.education') }}</a>
        <a href="#skills" @click="closeMenu" class="mobile-link py-3" :style="{ color: 'var(--color-text-primary)' }">{{ t('nav.skills') }}</a>
        <a href="#contacts" @click="closeMenu" class="mobile-link py-3" :style="{ color: 'var(--color-text-primary)' }">{{ t('nav.contacts') }}</a>
      </nav>

      <div class="px-6 pb-4 flex items-center gap-6">
        <button
          @click="toggleLang"
          class="lang-switcher text-sm font-medium cursor-pointer select-none"
        >
          <span class="lang-ru" :class="{ active: isRu }">RU</span>
          <span class="lang-sep">/</span>
          <span class="lang-en" :class="{ active: !isRu }">EN</span>
        </button>

        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  transition: color 0.2s ease;
}
.nav-link:hover {
  color: var(--color-accent) !important;
}

.mobile-link {
  font-size: 0.95rem;
  transition: color 0.2s ease;
}
.mobile-link:hover {
  color: var(--color-accent) !important;
}

/* Burger animation */
.burger-btn {
  pointer-events: auto;
  cursor: pointer;
}

.burger-line {
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 1px;
  background: var(--color-text-primary);
  position: absolute;
  transition: transform 0.3s ease, opacity 0.2s ease;
}

.burger-line:nth-child(1) {
  transform: translateY(-6px);
}
.burger-line:nth-child(2) {
  transform: translateY(0);
}
.burger-line:nth-child(3) {
  transform: translateY(6px);
}

/* X state */
.burger-line.open:nth-child(1) {
  transform: rotate(45deg) translateY(0);
}
.burger-line.open:nth-child(2) {
  opacity: 0;
}
.burger-line.open:nth-child(3) {
  transform: rotate(-45deg) translateY(0);
}

/* Dropdown */
.mobile-closed {
  max-height: 0 !important;
}
.mobile-open {
  max-height: 400px !important;
}

.lang-switcher {
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: 4px 6px;
  border-radius: 4px;
}

.lang-ru,
.lang-en {
  color: var(--color-text-muted);
  transition: color 0.2s ease;
  cursor: pointer;
}

.lang-sep {
  color: var(--color-text-muted);
  margin: 0 2px;
}

.lang-ru.active,
.lang-en.active {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
