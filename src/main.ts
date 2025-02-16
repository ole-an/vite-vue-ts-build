import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { i18n, useI18n } from '@core/composables/i18n.ts';
import { deviceType } from '@core/utils/getInputType.ts';
import { setClassName } from '@core/utils/general.ts';
import { router } from '@/router/router.ts';

import App from '@/App.vue';
import { registerLayouts } from '@/layouts/register.ts';

const pinia = createPinia();

export const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(i18n);
registerLayouts(app);
app.mount('#app');

export const { $t } = useI18n();
setClassName('html', 'input-', deviceType, 'startsWith');
