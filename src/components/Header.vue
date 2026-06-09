<script setup lang="ts">
import ThemeToggle from "./ThemeToggle.vue";
import { useLocale } from "../composables/useLocale";
import { useT } from "../locales";

const { setLocale, isRu } = useLocale();
const t = useT();

function toggleLang() {
    setLocale(isRu.value ? "en" : "ru");
}

const linkBase = "transition-colors duration-200 text-xs";
</script>

<template>
    <header
        class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
        :style="{
            background:
                'color-mix(in srgb, var(--color-bg-primary) 80%, transparent)',
            borderColor: 'var(--color-border)',
        }"
    >
        <div
            class="max-w-[72rem] mx-auto px-6 py-4 flex items-center justify-between"
        >
            <div
                class="text-sm font-semibold tracking-tight"
                style="color: var(--color-text-primary)"
            >
                <span style="color: var(--color-accent)">&lt;</span
                >@pashquette<span style="color: var(--color-accent)">/</span
                ><span style="color: var(--color-accent)">&gt;</span>
            </div>

            <nav class="flex items-center gap-6">
                <a
                    href="#about"
                    :class="linkBase"
                    :style="{ color: 'var(--color-text-muted)' }"
                    >{{ t("nav.about") }}</a
                >
                <a
                    href="#experience"
                    :class="linkBase"
                    :style="{ color: 'var(--color-text-muted)' }"
                    >{{ t("nav.experience") }}</a
                >
                <a
                    href="#education"
                    :class="linkBase"
                    :style="{ color: 'var(--color-text-muted)' }"
                    >{{ t("nav.education") }}</a
                >
                <a
                    href="#skills"
                    :class="linkBase"
                    :style="{ color: 'var(--color-text-muted)' }"
                    >{{ t("nav.skills") }}</a
                >
                <a
                    href="#contacts"
                    :class="linkBase"
                    :style="{ color: 'var(--color-text-muted)' }"
                    >{{ t("nav.contacts") }}</a
                >

                <div
                    class="w-px h-4"
                    :style="{ background: 'var(--color-border)' }"
                />

                <button
                    @click="toggleLang"
                    class="lang-switcher text-xs font-medium transition-colors duration-200 cursor-pointer select-none"
                >
                    <span class="lang-ru" :class="{ active: isRu }">RU</span>
                    <span class="lang-sep">/</span>
                    <span class="lang-en" :class="{ active: !isRu }">EN</span>
                </button>

                <ThemeToggle />
            </nav>
        </div>
    </header>
</template>

<style scoped>
a:hover {
    color: var(--color-accent) !important;
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
