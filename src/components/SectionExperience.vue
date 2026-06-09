<script setup lang="ts">
import { useT } from "../locales";
import { computed } from "vue";

const t = useT();

const experiences = computed(() => [
    {
        period: t("exp.cleeme.period"),
        company: t("exp.cleeme.company"),
        role: t("exp.cleeme.role"),
        description: t("exp.cleeme.desc"),
        highlights: [
            t("exp.cleeme.h1"),
            t("exp.cleeme.h2"),
            t("exp.cleeme.h3"),
            t("exp.cleeme.h4"),
            t("exp.cleeme.h5"),
            t("exp.cleeme.h6"),
            t("exp.cleeme.h7"),
        ],
        tech: [
            "Nuxt 3/4",
            "TypeScript",
            "Pinia",
            "Nuxt UI",
            "Tailwind CSS",
            "Docker",
            "OpenAPI",
        ],
    },
    {
        period: t("exp.grom.period"),
        company: t("exp.grom.company"),
        role: t("exp.grom.role"),
        description: t("exp.grom.desc"),
        highlights: [
            t("exp.grom.h1"),
            t("exp.grom.h2"),
            t("exp.grom.h3"),
            t("exp.grom.h4"),
            t("exp.grom.h5"),
            t("exp.grom.h6"),
        ],
        tech: [
            "Vue 2/3",
            "Nuxt 2/3",
            "Pinia",
            "Vuex",
            "Tailwind CSS",
            "Reka UI",
            "shadcn",
            "Alpine.js",
            "JWT/OAuth",
        ],
    },
    {
        period: t("exp.link.period"),
        company: t("exp.link.company"),
        role: t("exp.link.role"),
        description: t("exp.link.desc"),
        highlights: [
            t("exp.link.h1"),
            t("exp.link.h2"),
            t("exp.link.h3"),
            t("exp.link.h4"),
            t("exp.link.h5"),
            t("exp.link.h6"),
        ],
        tech: [
            "React",
            "Redux Toolkit",
            "Formik / Yup",
            "Webpack",
            "StoryBook",
            "Axios",
            "ESLint",
        ],
    },
]);
</script>

<template>
    <section id="experience" class="py-16">
        <div>
            <h2
                class="text-xs tracking-widest uppercase mb-8"
                style="color: var(--color-accent)"
            >
                {{ t("exp.title") }}
            </h2>

            <div class="space-y-10">
                <div
                    v-for="(exp, index) in experiences"
                    :key="index"
                    class="group relative pl-8 border-l-2 transition-colors duration-300"
                    :style="{ borderColor: 'var(--color-timeline-border)' }"
                >
                    <div
                        class="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full transition-colors duration-300"
                        :style="{ background: 'var(--color-timeline-dot)' }"
                    />

                    <div
                        class="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1"
                    >
                        <h3
                            class="text-base font-semibold"
                            style="color: var(--color-text-primary)"
                        >
                            {{ exp.company }}
                        </h3>
                        <span
                            class="text-xs"
                            style="color: var(--color-text-muted)"
                            >{{ exp.period }}</span
                        >
                    </div>

                    <p class="text-xs mb-3" style="color: var(--color-accent)">
                        {{ exp.role }}
                    </p>
                    <p
                        class="text-sm leading-relaxed mb-5"
                        style="color: var(--color-text-secondary)"
                    >
                        {{ exp.description }}
                    </p>

                    <ul class="space-y-2 mb-5">
                        <li
                            v-for="(item, i) in exp.highlights"
                            :key="i"
                            class="text-sm leading-relaxed flex gap-3"
                            style="color: var(--color-text-secondary)"
                        >
                            <span
                                class="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                                style="
                                    background: var(--color-accent);
                                    opacity: 0.5;
                                "
                            />
                            <span>{{ item }}</span>
                        </li>
                    </ul>

                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="tech in exp.tech"
                            :key="tech"
                            class="text-[10px] px-2.5 py-1 rounded-full"
                            :style="{
                                background: 'var(--color-bg-tag)',
                                color: 'var(--color-accent)',
                            }"
                        >
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.group:hover {
    border-color: var(--color-timeline-hover) !important;
}
.group:hover .absolute {
    background: var(--color-timeline-hover) !important;
}
</style>
