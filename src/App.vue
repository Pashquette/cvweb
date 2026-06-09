<script setup lang="ts">
useReveal();
</script>

<template>
    <div
        class="min-h-screen transition-colors duration-300"
        style="
            background: var(--color-bg-primary);
            color: var(--color-text-primary);
        "
    >
        <Header />
        <main class="max-w-[72rem] mx-auto px-6">
            <SectionHero />
            <SectionAbout />
            <SectionExperience />
            <SectionEducation />
            <SectionSkills />
            <SectionContacts />
        </main>
        <Footer />
    </div>
</template>
