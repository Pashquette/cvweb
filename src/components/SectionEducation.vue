<script setup lang="ts">
import { useT } from "../locales";
import { computed } from "vue";

const t = useT();

interface Education {
    year: string;
    title: string;
    description: string;
    type: "degree" | "course";
}

const education = computed<Education[]>(() => [
    {
        year: "2013",
        title: t("edu.rgrtu.title"),
        description: t("edu.rgrtu.desc"),
        type: "degree",
    },
    {
        year: "2009",
        title: t("edu.college.title"),
        description: t("edu.college.desc"),
        type: "degree",
    },
    {
        year: "2023",
        title: t("edu.c1.title"),
        description: t("edu.c1.desc"),
        type: "course",
    },
    {
        year: "2023",
        title: t("edu.c2.title"),
        description: t("edu.c2.desc"),
        type: "course",
    },
    {
        year: "2022",
        title: t("edu.c3.title"),
        description: t("edu.c3.desc"),
        type: "course",
    },
    {
        year: "2022",
        title: t("edu.c4.title"),
        description: t("edu.c4.desc"),
        type: "course",
    },
    {
        year: "2021",
        title: t("edu.c5.title"),
        description: t("edu.c5.desc"),
        type: "course",
    },
]);
</script>

<template>
    <section id="education" class="py-16">
        <div>
            <h2
                class="text-xs tracking-widest uppercase mb-8"
                style="color: var(--color-accent)"
            >
                {{ t("edu.title") }}
            </h2>

            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h3
                        class="text-sm font-semibold mb-6"
                        style="color: var(--color-text-primary)"
                    >
                        {{ t("edu.degree") }}
                    </h3>
                    <div class="space-y-6">
                        <div
                            v-for="edu in education.filter(
                                (e) => e.type === 'degree',
                            )"
                            :key="edu.title"
                            class="relative pl-6 border-l-2"
                            :style="{
                                borderColor: 'var(--color-timeline-border)',
                            }"
                        >
                            <div
                                class="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full"
                                :style="{ background: 'var(--color-dot)' }"
                            />
                            <span
                                class="text-xs"
                                style="color: var(--color-text-muted)"
                                >{{ edu.year }}</span
                            >
                            <h4
                                class="text-sm font-medium mt-1"
                                style="color: var(--color-text-primary)"
                            >
                                {{ edu.title }}
                            </h4>
                            <p
                                class="text-xs mt-1"
                                style="color: var(--color-text-muted)"
                            >
                                {{ edu.description }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- <div>
                    <h3
                        class="text-sm font-semibold mb-6"
                        style="color: var(--color-text-primary)"
                    >
                        {{ t("edu.courses") }}
                    </h3>
                    <div class="space-y-6">
                        <div
                            v-for="edu in education.filter(
                                (e) => e.type === 'course',
                            )"
                            :key="edu.title"
                            class="relative pl-6 border-l-2"
                            :style="{
                                borderColor: 'var(--color-timeline-border)',
                            }"
                        >
                            <div
                                class="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full"
                                :style="{ background: 'var(--color-dot)' }"
                            />
                            <span
                                class="text-xs"
                                style="color: var(--color-text-muted)"
                                >{{ edu.year }}</span
                            >
                            <h4
                                class="text-sm font-medium mt-1"
                                style="color: var(--color-text-primary)"
                            >
                                {{ edu.title }}
                            </h4>
                            <p
                                class="text-xs mt-1"
                                style="color: var(--color-text-muted)"
                            >
                                {{ edu.description }}
                            </p>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>
