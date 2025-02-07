<script setup lang="ts">
import { onMounted } from 'vue';
import { IconBase, IconName, IconSize } from '@core/components/IconBase';
import { replaceClasses } from '@core/utils/general.ts';
import { ColorSchemes } from './types.ts';

const themes: Array<keyof typeof ColorSchemes> = ['light', 'dark'];

function coupleClassesToggle(el: Element, classes: Array<string>): void {
  const rootClasses: Array<string> = Array.from(el.classList);

  const currentClass: string | undefined = classes.find((className) =>
    rootClasses.includes(className),
  );
  if (typeof currentClass !== 'undefined') {
    el.classList.remove(currentClass);
    const oppositeClass: string | undefined = classes.find(
      (className) => className !== currentClass,
    );
    if (typeof oppositeClass !== 'undefined') {
      el.classList.add(oppositeClass);
      localStorage.setItem('theme', oppositeClass);
    }
  }
}

onMounted(() => {
  /*
   * 1. Проверяем наличие темы в localStorage. Если существует, то проверяем, присутствует ли в <html> какой-либо из классов тем
   * 2. Если присутствует, то устанавливаем новым классом значение из localStorage
   * 2. если не существует - устанавливаем тему 'light' по умолчанию
   * */
  let themeClass = localStorage.getItem('theme') as
    | keyof typeof ColorSchemes
    | null;
  if (themeClass !== null) {
    // если в хранилище есть данные
    replaceClasses(document.documentElement, themes, themeClass);
  } else {
    themeClass = 'light' as keyof typeof ColorSchemes;
    localStorage.setItem('theme', themeClass);
    replaceClasses(document.documentElement, themes, themeClass);
  }
});

const toggleColorTheme = () => {
  coupleClassesToggle(document.documentElement, themes);
};
</script>

<template>
  <button
    class="color-scheme-switcher-base"
    @click="toggleColorTheme"
  >
    <span class="color-scheme-switcher-base__toggler">
      <span class="color-scheme-switcher-base__wrapper">
        <IconBase
          :icon="IconName.sun"
          :size="IconSize.XXXS"
          class="color-scheme-switcher-base__icon color-scheme-switcher-base__icon_sun"
        />
        <IconBase
          :icon="IconName.moon"
          :size="IconSize.XXXS"
          class="color-scheme-switcher-base__icon color-scheme-switcher-base__icon_moon"
        />
      </span>
    </span>
  </button>
</template>

<style scoped lang="scss">
@use 'color-scheme-switcher-base';
</style>
