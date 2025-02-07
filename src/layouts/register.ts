import { App } from 'vue';

import DefaultLayout from '@core/layouts/DefaultLayout.vue';

export function registerLayouts(app: App<Element>) {
  app.component('DefaultLayout', DefaultLayout);
}
