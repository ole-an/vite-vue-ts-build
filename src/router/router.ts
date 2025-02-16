import { watchEffect } from 'vue';
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteMeta,
  Router,
} from 'vue-router';
import { routes } from '@/router/routes/routes.ts';
import { $t } from '@/main.ts';

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

interface IDocumentMeta extends RouteMeta {
  title: string;
  description: string;
}

router.beforeEach((to: RouteLocationNormalized): void => {
  const { title, description } = to.meta as IDocumentMeta;

  if (title) {
    watchEffect(() => (document.title = $t(title) as string));
  }

  const descriptionElement: Element | null = document.querySelector(
    'head meta[name="description"]',
  );
  if (description && descriptionElement) {
    watchEffect(() =>
      descriptionElement.setAttribute('content', $t(description) as string),
    );
  }
});
