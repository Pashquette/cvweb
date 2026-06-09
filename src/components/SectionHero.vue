<script setup lang="ts">
import { useT } from "../locales";
import { ref, onMounted, onUnmounted } from "vue";

const t = useT();
const scrollOpacity = ref(1);

function onScroll() {
    const y = window.scrollY;
    // Плавно исчезает к 120px скролла
    scrollOpacity.value = Math.max(0, 1 - y / 120);
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
    <section
        class="min-h-[calc(100vh-4rem)] flex flex-col justify-between relative py-16"
    >
        <div class="flex-1 flex flex-col justify-center">
            <p
                class="hero-subtitle text-xs mb-4 tracking-widest uppercase"
                style="color: var(--color-accent)"
            >
                {{ t("hero.subtitle") }}
            </p>

            <h1
                class="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style="color: var(--color-text-primary)"
            >
                <span class="typed-text">
                    {{ t("hero.name") }}
                    <span class="typed-cursor" />
                </span>
            </h1>

            <p
                class="hero-desc text-sm md:text-base max-w-xl leading-relaxed"
                style="color: var(--color-text-secondary)"
            >
                {{ t("hero.description") }}
            </p>

            <div class="hero-actions mt-8 flex items-center gap-4">
                <a
                    href="#contacts"
                    class="text-xs px-5 py-2.5 rounded-full transition-colors"
                    style="
                        background: var(--color-btn-bg);
                        color: var(--color-btn-text);
                    "
                >
                    {{ t("hero.contact") }}
                </a>
                <a
                    href="https://github.com/Pashquette"
                    target="_blank"
                    class="text-xs px-5 py-2.5 rounded-full transition-colors border"
                    style="
                        color: var(--color-outline-text);
                        border-color: var(--color-outline-border);
                    "
                >
                    {{ t("hero.github") }}
                </a>
            </div>
        </div>

        <!-- Scroll indicator -->
        <div
            class="scroll-arrow absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300 pointer-events-none z-10"
            :style="{ opacity: scrollOpacity }"
        >
            <span
                class="text-xs tracking-[0.2em] uppercase"
                style="color: var(--color-text-muted)"
                >scroll</span
            >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="color: var(--color-text-muted)"
            >
                <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
        </div>
    </section>
</template>

<style scoped>
@keyframes fade-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes typing {
    from {
        clip-path: inset(0 100% 0 0);
    }
    to {
        clip-path: inset(0 0 0 0);
    }
}

@keyframes blink {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

@keyframes bounce-arrow {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(4px);
    }
}

.hero-subtitle {
    opacity: 0;
    animation: fade-up 0.4s ease forwards;
    animation-delay: 0.2s;
}

.hero-title {
    opacity: 0;
    animation: fade-up 0.3s ease forwards;
    animation-delay: 0.4s;
}

.typed-text {
    display: inline;
    clip-path: inset(0 100% 0 0);
    animation: typing 1.4s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
    animation-delay: 0.5s;
}

.typed-cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    vertical-align: bottom;
    background: var(--color-accent);
    animation: blink 0.8s step-end 8;
    animation-delay: 1.9s;
}

.hero-desc {
    opacity: 0;
    animation: fade-up 0.35s ease forwards;
    animation-delay: 1.6s;
}

.hero-actions {
    opacity: 0;
    animation: fade-up 0.35s ease forwards;
    animation-delay: 1.7s;
}

.scroll-arrow svg {
    animation: bounce-arrow 1.5s ease-in-out infinite;
}

a:first-child:hover {
    background: var(--color-btn-hover);
}
a:last-child:hover {
    border-color: var(--color-outline-hover-border);
    color: var(--color-accent);
}
</style>
