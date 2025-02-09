<script setup lang="ts">
import { ref } from 'vue';
import { IconBase, IconName, IconSize } from '@core/components/IconBase';
import { useLocalesStore } from '@core/store/locales.store.ts';
import { initI18n } from '@core/composables/i18n.ts';
import { LangName, LangLabel, ILocale } from './types.ts';
import { $t } from '@/main.ts';

const store = useLocalesStore();
const isExpanded = ref(false);

interface ILangSwitcherProps {
  alias: LangName;
  label: LangLabel;
}

withDefaults(defineProps<ILangSwitcherProps>(), {
  alias: LangName.RUS,
  label: LangLabel.RUSSIAN,
});

interface ILanguagesList {
  code: ILocale['code'];
  alias: LangName;
  label: LangLabel;
  icon: IconName;
}

const languages: ILanguagesList[] = [
  {
    code: 'ru',
    alias: LangName.RUS,
    label: LangLabel.RUSSIAN,
    icon: IconName.flagRussia,
  },
  {
    code: 'en',
    alias: LangName.ENG,
    label: LangLabel.ENGLISH,
    icon: IconName.flagEngland,
  },
];

const setLanguage = (language: ILanguagesList) => {
  if (store.currentLocale !== language.code) {
    store.currentLocale = language.code;
    initI18n(language.code);
  }
};

const setAriaExpandedTrue = () => {
  isExpanded.value = true;
};

const setAriaExpandedFalse = () => {
  isExpanded.value = false;
};
</script>

<template>
  <div
    class="language-switcher-base"
    @mouseenter="setAriaExpandedTrue"
    @mouseleave="setAriaExpandedFalse"
  >
    <button
      class="language-switcher-base__button"
      aria-haspopup="true"
      :aria-expanded="isExpanded"
      aria-label="Select language"
    >
      <IconBase
        :icon="IconName.earth"
        :size="IconSize.M"
      />
      <span class="language-switcher-base__text">
        {{ $t('base.langSwitcher.button') }}
      </span>
    </button>
    <div class="language-switcher-base__dropdown">
      <ul class="language-switcher-base__list">
        <li
          v-for="(language, index) in languages"
          :key="index"
          :class="{ 'language-switcher-base__input_active': language.alias }"
          class="language-switcher-base__item"
        >
          <label class="language-switcher-base__label">
            <input
              type="radio"
              class="language-switcher-base__input"
              name="language"
              :checked="language.code === store.currentLocale"
              @click="setLanguage(language)"
            />
            <IconBase
              :icon="language.icon"
              :size="IconSize.XS"
            />
            <span class="language-switcher-base__alias">
              {{ language.label }}
            </span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@use 'lang-switcher-base';
</style>
