<script setup lang="ts">
import { useT } from '../locales'
import { computed } from 'vue'

const t = useT()

const contacts = computed(() => [
  { label: 'Telegram', href: 'https://t.me/pashquette', display: '@pashquette' },
  { label: 'GitHub', href: 'https://github.com/Pashquette', display: 'Pashquette' },
  { label: 'GitLab', href: 'https://gitlab.com/Pashquette', display: 'Pashquette' },
  { label: 'Email', href: 'mailto:jrmarty@mail.ru', display: 'jrmarty@mail.ru' },
  { label: t('contacts.phone_label'), href: 'tel:+79209681101', display: '+7 (920) 968-11-01' },
])
</script>

<template>
  <section id="contacts" class="py-16">
    <div>
      <h2 class="text-xs tracking-widest uppercase mb-8" style="color: var(--color-accent);">{{ t('contacts.title') }}</h2>

      <div class="grid sm:grid-cols-2 gap-6">
        <a
          v-for="contact in contacts"
          :key="contact.label"
          :href="contact.href"
          target="_blank"
          class="group flex items-center gap-4 p-4 rounded-xl border transition-colors duration-200"
          :style="{
            borderColor: 'var(--color-border)',
            background: 'var(--color-bg-card)',
          }"
        >
          <span class="text-xs w-20 shrink-0" style="color: var(--color-text-muted);">{{ contact.label }}</span>
          <span class="text-sm truncate transition-colors" style="color: var(--color-text-primary);">
            {{ contact.display }}
          </span>
          <span class="ml-auto text-sm shrink-0 transition-colors" style="color: var(--color-text-muted);">→</span>
        </a>
      </div>

      <p class="mt-12 text-xs" style="color: var(--color-text-muted);">
        {{ t('contacts.location') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
a:hover {
  border-color: var(--color-border-strong) !important;
}
a:hover .truncate {
  color: var(--color-accent) !important;
}
a:hover .ml-auto {
  color: var(--color-accent) !important;
}
</style>
