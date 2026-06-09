import { useLocale } from "./composables/useLocale";

export const translations = {
    // ===== Header =====
    "nav.about": { ru: "Обо мне", en: "About" },
    "nav.experience": { ru: "Опыт", en: "Experience" },
    "nav.education": { ru: "Образование", en: "Education" },
    "nav.skills": { ru: "Навыки", en: "Skills" },
    "nav.contacts": { ru: "Контакты", en: "Contacts" },
    "nav.logo": { ru: "<pavel/>", en: "<pavel/>" },

    // ===== Hero =====
    "hero.subtitle": { ru: "Фронтенд разработчик", en: "Frontend Developer" },
    "hero.name": { ru: "Павел Мартынов", en: "Pavel Martynov" },
    "hero.description": {
        ru: "Frontend-разработчик с 4-х летним коммерческим опытом. Специализируюсь на Vue и Nuxt, работаю с React и Flutter. Запустил 5 проектов с нуля в продакшн.",
        en: "Frontend developer with 4 years commercial experience. Specializing in Vue and Nuxt, also working with React and Flutter. Launched 5 projects from scratch to production.",
    },
    "hero.contact": { ru: "Связаться", en: "Get in Touch" },
    "hero.github": { ru: "GitHub →", en: "GitHub →" },

    // ===== About =====
    "about.title": { ru: "Обо мне", en: "About Me" },
    "about.text1": {
        ru: "Разрабатываю и развиваю frontend коммерческих проектов. Проектирую архитектуру и принимаю технические решения. Реализую сложный пользовательский функционал и бизнес-логику.",
        en: "I develop and maintain frontend for commercial projects. I architect solutions and make technical decisions. I implement complex user features and business logic.",
    },
    "about.text2": {
        ru: "Постоянно изучаю новые технологии и применяю их на практике. Готов предоставить портфолио реализованных проектов. Открыт к работе в команде.",
        en: "I continuously learn new technologies and apply them in practice. Ready to share my portfolio. Open to teamwork.",
    },
    "about.fact1.label": { ru: "Опыт во Frontend", en: "Frontend Experience" },
    "about.fact1.value": { ru: "4 года", en: "4 years" },
    "about.fact2.label": {
        ru: "Проектов в продакшн",
        en: "Projects in Production",
    },
    "about.fact2.value": { ru: "5", en: "5" },
    "about.fact3.label": {
        ru: "Общий опыт работы",
        en: "Total Work Experience",
    },
    "about.fact3.value": { ru: "13 лет", en: "13 years" },

    // ===== Experience =====
    "exp.title": { ru: "Опыт работы", en: "Work Experience" },

    // Cleeme
    "exp.cleeme.period": { ru: "Окт 2025 — н.в.", en: "Oct 2025 — Present" },
    "exp.cleeme.company": { ru: "Cleeme", en: "Cleeme" },
    "exp.cleeme.role": { ru: "Frontend-разработчик", en: "Frontend Developer" },
    "exp.cleeme.desc": {
        ru: "Разрабатываю маркетплейс клининговых услуг Cleeme — платформу, где компании публикуют услуги, а заказчики создают задачи и находят исполнителей. Проект на стадии активной разработки.",
        en: "Building Cleeme — a cleaning services marketplace where companies publish services and customers create tasks and find contractors. The project is in active development.",
    },
    "exp.cleeme.h1": {
        ru: "Спроектировал всю frontend-архитектуру и структуру API-слоя",
        en: "Designed the entire frontend architecture and API layer structure",
    },
    "exp.cleeme.h2": {
        ru: "Настроил Docker-окружение и CI-ready инфраструктуру",
        en: "Set up Docker environment and CI-ready infrastructure",
    },
    "exp.cleeme.h3": {
        ru: "Реализовал авторизацию, роли и систему пользовательских доступов",
        en: "Implemented authorization, roles, and user access control system",
    },
    "exp.cleeme.h4": {
        ru: "Внедрил темизацию и интернационализацию (RU/EN) с fallback-цепочками",
        en: "Implemented theming and internationalization (RU/EN) with fallback chains",
    },
    "exp.cleeme.h5": {
        ru: "Описал API через OpenAPI Spec — автогенерация клиента, ноль ручных типов",
        en: "Documented API via OpenAPI Spec — auto-generated client, zero manual types",
    },
    "exp.cleeme.h6": {
        ru: "Создал библиотеку переиспользуемых компонентов на Nuxt UI / Tailwind",
        en: "Built a reusable component library using Nuxt UI / Tailwind",
    },
    "exp.cleeme.h7": {
        ru: "Выполнил миграцию с Nuxt 3 на Nuxt 4 без простоя продакшена",
        en: "Migrated from Nuxt 3 to Nuxt 4 with zero production downtime",
    },

    // Grom
    "exp.grom.period": { ru: "Ноя 2023 — Апр 2026", en: "Nov 2023 — Apr 2026" },
    "exp.grom.company": { ru: "Гром-Ит Софт", en: "Grom-IT Soft" },
    "exp.grom.role": { ru: "Frontend-разработчик", en: "Frontend Developer" },
    "exp.grom.desc": {
        ru: "За время работы разработал и запустил 5 проектов с нуля в продакшен. Работал с разными стеками — от Vue/Nuxt до Alpine.js и нативного JavaScript. Каждый проект — своя архитектура, свой стек, свои задачи.",
        en: "Developed and launched 5 projects from scratch to production. Worked with various stacks — from Vue/Nuxt to Alpine.js and vanilla JavaScript. Each project had its own architecture, stack, and challenges.",
    },
    "exp.grom.h1": {
        ru: "Проектировал архитектуру и выбирал стек под задачи каждого проекта",
        en: "Designed architecture and selected the tech stack for each project",
    },
    "exp.grom.h2": {
        ru: "Реализовывал сложный функционал: поиск, фильтрация, сортировка, пагинация",
        en: "Implemented complex features: search, filtering, sorting, pagination",
    },
    "exp.grom.h3": {
        ru: "Внедрял авторизацию через JWT и OAuth — интеграция с внешними провайдерами",
        en: "Implemented JWT and OAuth authorization — integration with external providers",
    },
    "exp.grom.h4": {
        ru: "Разрабатывал UI-компоненты и масштабируемые модули на Nuxt UI, Reka UI, shadcn",
        en: "Built UI components and scalable modules using Nuxt UI, Reka UI, shadcn",
    },
    "exp.grom.h5": {
        ru: "Мигрировал legacy-проект с Nuxt 2 на October CMS — сократил кодовую базу на ~30%",
        en: "Migrated a legacy project from Nuxt 2 to October CMS — reduced codebase by ~30%",
    },
    "exp.grom.h6": {
        ru: "Проводил рефакторинг: повышал стабильность, убирал дубли, оптимизировал рендеринг",
        en: "Conducted refactoring: improved stability, removed duplicates, optimized rendering",
    },

    // Link Design
    "exp.link.period": {
        ru: "Июль 2022 — Окт 2023",
        en: "Jul 2022 — Oct 2023",
    },
    "exp.link.company": { ru: "Линк Дизайн", en: "Link Design" },
    "exp.link.role": { ru: "Frontend-разработчик", en: "Frontend Developer" },
    "exp.link.desc": {
        ru: "В команде из 4 фронтенд- и 1 бэкенд-разработчика создавал крупный таск-менеджер с нуля до продакшена. Продукт объединил лучшие черты аналогов: встроенная аналитика, интуитивный интерфейс, высокая производительность.",
        en: "In a team of 4 frontend and 1 backend developer, built a large task manager from scratch to production. The product combined the best features of competitors: built-in analytics, intuitive interface, high performance.",
    },
    "exp.link.h1": {
        ru: "Проектировал декомпозицию UI и бизнес-логики при создании компонентов",
        en: "Designed UI and business logic decomposition when creating components",
    },
    "exp.link.h2": {
        ru: "Реализовывал state management на Redux Toolkit — нормализация, нормальные формы",
        en: "Implemented state management with Redux Toolkit — normalization, normal forms",
    },
    "exp.link.h3": {
        ru: "Разрабатывал валидацию сложных форм с Formik / Yup — каскадные зависимости полей",
        en: "Developed complex form validation with Formik / Yup — cascading field dependencies",
    },
    "exp.link.h4": {
        ru: "Настраивал роутинг, доступы по ролям и редиректы",
        en: "Set up routing, role-based access control, and redirects",
    },
    "exp.link.h5": {
        ru: "Интегрировал фронтенд с бэкендом через Axios — перехватчики, retry-логика",
        en: "Integrated frontend with backend via Axios — interceptors, retry logic",
    },
    "exp.link.h6": {
        ru: "Фиксил баги в сборке Webpack и конфигурациях линтеров",
        en: "Fixed bugs in Webpack build and linter configurations",
    },

    // ===== Education =====
    "edu.title": { ru: "Образование", en: "Education" },
    "edu.degree": { ru: "Высшее образование", en: "Higher Education" },
    "edu.courses": {
        ru: "Курсы и повышение квалификации",
        en: "Courses & Certifications",
    },

    "edu.rgrtu.title": {
        ru: "Рязанский государственный радиотехнический университет",
        en: "Ryazan State Radio Engineering University",
    },
    "edu.rgrtu.desc": {
        ru: "Вычислительная техника, комплексы, системы, сети",
        en: "Computer Engineering, Complexes, Systems, Networks",
    },
    "edu.college.title": {
        ru: "Рязанский Колледж Электроники",
        en: "Ryazan College of Electronics",
    },
    "edu.college.desc": {
        ru: "Вычислительная техника, комплексы, системы, сети",
        en: "Computer Engineering, Complexes, Systems, Networks",
    },

    "edu.c1.title": {
        ru: "Создание интернет-магазина на React/Redux Toolkit",
        en: "Building an E-Commerce Store with React/Redux Toolkit",
    },
    "edu.c1.desc": { ru: "Школа MethEd", en: "MethEd School" },
    "edu.c2.title": { ru: "Продвинутый Frontend", en: "Advanced Frontend" },
    "edu.c2.desc": { ru: "Ulbi TV", en: "Ulbi TV" },
    "edu.c3.title": {
        ru: "React JS — Фундаментальный курс от А до Я",
        en: "React JS — Comprehensive Course A to Z",
    },
    "edu.c3.desc": { ru: "Ulbi TV", en: "Ulbi TV" },
    "edu.c4.title": {
        ru: "Полный курс по JavaScript + React",
        en: "Complete JavaScript + React Course",
    },
    "edu.c4.desc": {
        ru: "Udemy (Иван Петриченко)",
        en: "Udemy (Ivan Petrichenko)",
    },
    "edu.c5.title": { ru: "Web-разработчик", en: "Web Developer" },
    "edu.c5.desc": {
        ru: "Udemy (Иван Петриченко)",
        en: "Udemy (Ivan Petrichenko)",
    },

    // ===== Skills =====
    "skills.title": { ru: "Навыки", en: "Skills" },
    "skills.languages": { ru: "Языки", en: "Languages" },
    "skills.frameworks": { ru: "Фреймворки", en: "Frameworks" },
    "skills.state": { ru: "State Management", en: "State Management" },
    "skills.styling": { ru: "Стилизация", en: "Styling" },
    "skills.tools": { ru: "Инструменты", en: "Tools" },
    "skills.api": { ru: "API & Backend", en: "API & Backend" },
    "skills.langs": { ru: "Языки общения", en: "Spoken Languages" },

    // ===== Contacts =====
    "contacts.title": { ru: "Контакты", en: "Contacts" },
    "contacts.location": {
        ru: "Москва, Россия · Готов к редким командировкам",
        en: "Moscow, Russia · Open to occasional travel",
    },
    "contacts.phone_label": { ru: "Телефон", en: "Phone" },

    // ===== Footer =====
    "footer.copy": { ru: "© 2026 Pavel Martynov", en: "© 2026 Pavel Martynov" },
    "footer.made": {
        ru: "<Сделано с любовью к коду/>",
        en: "<Made with love for code/>",
    },
} as const;

export type TranslationKey = keyof typeof translations;

export function useT() {
    const { locale } = useLocale();

    function get(key: TranslationKey): string {
        return translations[key][locale.value];
    }

    return get;
}
