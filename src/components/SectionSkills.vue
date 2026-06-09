<script setup lang="ts">
import { useT } from '../locales'
import { computed } from 'vue'

const t = useT()

interface SkillGroup {
  label: string
  skills: string[]
}

const skillGroups = computed<SkillGroup[]>(() => [
  { label: t('skills.languages'), skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
  { label: t('skills.frameworks'), skills: ['Vue 2/3', 'Nuxt 2/3/4', 'React', 'Flutter', 'Alpine.js'] },
  { label: t('skills.state'), skills: ['Pinia', 'Vuex', 'Redux Toolkit'] },
  { label: t('skills.styling'), skills: ['Tailwind CSS', 'SASS', 'LESS', 'Nuxt UI', 'Reka UI', 'shadcn'] },
  { label: t('skills.tools'), skills: ['Git', 'Docker', 'Webpack', 'ESLint', 'Prettier', 'StoryBook', 'FFmpeg', 'Figma', 'Vite'] },
  { label: t('skills.api'), skills: ['REST API', 'Axios', 'OpenAPI', 'FastAPI', 'JWT', 'OAuth'] },
  { label: t('skills.langs'), skills: ['Русский — родной', 'Английский — B1'] },
])
</script>

<template>
  <section id="skills" class="py-16">
    <div>
      <h2 class="text-xs tracking-widest uppercase mb-8" style="color: var(--color-accent);">{{ t('skills.title') }}</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="group in skillGroups" :key="group.label">
          <h3 class="text-sm font-semibold mb-4" style="color: var(--color-text-primary);">{{ group.label }}</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="text-xs px-3 py-1.5 rounded-lg"
              :style="{ background: 'var(--color-bg-tag)', color: 'var(--color-accent)' }"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
