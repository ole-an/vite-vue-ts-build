import { createI18n } from 'vue-i18n';
import { getFirstBrowserLanguage } from '@core/utils/getFirstBrowserLanguage.ts';
import { useLocalesStore } from '@core/store/locales.store.ts';
import { setClassName } from '@core/utils/general.ts';
import {
  locales,
  relativeLocales,
  ILocale,
} from '@core/components/LangSwitcherBase';
import en from '@locales/en/base.json';
import ru from '@locales/ru/base.json';

export interface ITranslates {
  [key: string]: any /* необходимо добработать */;
}

const messages = { ru, en };

function setLocale(locale?: string): string {
  let appLocale: string = localStorage.getItem('locale') || '';

  if (!appLocale || locale) {
    if (!appLocale) {
      // если в localStorage пусто
      const currentLanguage: string = getFirstBrowserLanguage(); // определяем язык браузера
      locales.find((presetLocale: ILocale): string => {
        // производим поиск по предустановленным локалям
        if (currentLanguage === presetLocale.code) {
          // если найдено совпадение, возвращаем его
          return (appLocale = currentLanguage);
        }
        return (appLocale = relativeLocales.includes(currentLanguage)
          ? 'ru'
          : 'en'); // иначе ищем совпадение по языкам, которые совпадение с которыми вернет ru-локаль, иначе - en
      });
    }
    if (locale) {
      // если передаем язык из store
      appLocale = locale;
    }
    localStorage.setItem('locale', appLocale);
  }

  setClassName('html', 'lang-', appLocale, 'startsWith');
  document.documentElement.lang = appLocale;
  return appLocale;
}

export function useI18n() {
  function initI18n(locale?: string): void {
    setLocale(locale);
  }

  function $t(
    key: string,
    param: null | Array<string> = null,
  ): ITranslates | string {
    const store = useLocalesStore();
    let val = key
      .split('.')
      .reduce(
        (previousValue: ITranslates, currentValue: string) =>
          previousValue[currentValue],
        messages[store.currentLocale as keyof typeof messages],
      );
    if (param) {
      val = val.replace('{0}', param);
    }
    return val;
  }

  return {
    $t,
    initI18n,
    setLocale,
  };
}

export const { $t, initI18n } = useI18n();

initI18n();

export const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
    ru,
    en,
  },
});
