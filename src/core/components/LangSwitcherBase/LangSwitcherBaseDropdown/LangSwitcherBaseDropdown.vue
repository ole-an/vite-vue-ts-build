<script setup lang="ts">
import { IconBase, IconName, IconSize } from '@core/components/IconBase';
import {
  ILanguagesList,
  LangCode,
  LangLabel,
} from '@core/components/LangSwitcherBase';
import { i18n, setLocale } from '@core/composables/i18n.ts';
import { useLocalesStore } from '@core/store/locales.store.ts';
import { ILangSwitcherBaseDropdownProps } from './types.ts';

const props = withDefaults(defineProps<ILangSwitcherBaseDropdownProps>(), {
  embedded: false,
});
const store = useLocalesStore();

const languages: ILanguagesList[] = [
  {
    code: LangCode.RU,
    label: LangLabel.RUSSIAN,
    icon: IconName.flagRussia,
  },
  {
    code: LangCode.EN,
    label: LangLabel.ENGLISH,
    icon: IconName.flagEngland,
  },
];

const setLanguage = (language: ILanguagesList) => {
  if (store.currentLocale !== language.code) {
    store.currentLocale = language.code;
    i18n.global.locale = setLocale(language.code) as LangCode;
  }
};
</script>

<template>
  <div
    class="lang-switcher-base-dropdown"
    :class="{ 'lang-switcher-base-dropdown_embedded': props.embedded }"
  >
    <ul class="lang-switcher-base-dropdown__list">
      <li
        v-for="(language, index) in languages"
        :key="index"
        class="lang-switcher-base-dropdown__item"
      >
        <label class="lang-switcher-base-dropdown__label">
          <input
            type="radio"
            class="lang-switcher-base-dropdown__input visually-hidden"
            name="language"
            :checked="language.code === store.currentLocale"
            @click="setLanguage(language)"
          />
          <IconBase
            class="lang-switcher-base-dropdown__icon"
            :icon="language.icon"
            :size="IconSize.XS"
          />
          <span class="lang-switcher-base-dropdown__alias">
            {{ language.label }}
          </span>
        </label>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use 'lang-switcher-base-dropdown';
</style>
