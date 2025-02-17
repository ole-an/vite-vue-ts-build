import { watch } from 'vue';
import { createRouter, createWebHistory, Router } from 'vue-router';
import { i18n } from '@core/composables/i18n.ts';
import { routes } from '@/router/routes/routes.ts';

const { t } = i18n.global;

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

watch(
  [
    () => i18n.global.locale,
    () => router.currentRoute.value.meta.title,
    () => router.currentRoute.value.meta.description,
  ],
  () => {
    document.title = t(router.currentRoute.value.meta.title as string);
    document.title = t(router.currentRoute.value.meta.title as string);
    const descriptionElement: Element | null = document.querySelector(
      'head meta[name="description"]',
    );
    if (descriptionElement && typeof descriptionElement !== null) {
      descriptionElement.setAttribute(
        'content',
        t(router.currentRoute.value.meta.description as string),
      );
    }
  },
);
