import { RouteRecordRaw } from 'vue-router';
import { Name, Path } from '@router/routes/types.ts';
import { page } from '@/router/routes/pages.ts';

export const routes: RouteRecordRaw[] = [
  {
    path: Path.MAIN,
    component: page.main,
    name: Name.MAIN,
    meta: {
      layout: 'Default',
      title: 'Главная страница',
      description: 'Описание главной страницы',
    },
  },
  {
    path: Path.UI_KIT,
    component: page.ui_kit,
    name: Name.UI_KIT,
    meta: {
      layout: 'Default',
      title: 'UI-KIT',
      description: 'Описание UI-KIT',
    },
  },
];
