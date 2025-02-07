import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteMeta,
  Router,
} from 'vue-router';
import { routes } from '@/router/routes/routes.ts';

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
    document.title = title;
  }

  const descriptionElement = document.querySelector(
    'head meta[name="description"]',
  );
  if (description && descriptionElement) {
    descriptionElement.setAttribute('content', description);
  }
});
