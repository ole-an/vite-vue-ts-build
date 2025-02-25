<script setup lang="ts">
import { LangSwitcherBase } from '@core/components/LangSwitcherBase';
import { ColorSchemeSwitcherBase } from '@core/components/ColorSchemeSwitcherBase';
import { headerMenu } from '@router/routes/header.ts';
import { HamburgerBase } from '@core/components/HamburgerBase';

const emits = defineEmits<{
  (e: 'toggleHamburgerMenu'): boolean;
}>();

const toggleHamburgerMenu = () => {
  emits('toggleHamburgerMenu');
};
</script>

<template>
  <div class="header-bar">
    <div class="header-bar__container container">
      <div class="header-bar__inner">
        <router-link
          to="/"
          class="header-bar__logo"
        >
          {{ $t('base.header.logo') }}
        </router-link>
        <div class="header-bar__content">
          <nav class="header-bar__nav">
            <ul class="header-bar__list">
              <li
                v-for="item in headerMenu"
                :key="item.id"
                class="header-bar__item"
              >
                <router-link
                  :to="item.path"
                  class="header-bar__link"
                >
                  {{ $t(`base.header.menu.nav.${item.name}`) }}
                </router-link>
              </li>
            </ul>
          </nav>
          <div class="header-bar__lang-switcher">
            <LangSwitcherBase />
          </div>
          <div class="header-bar__color-switcher">
            <ColorSchemeSwitcherBase />
          </div>
          <div class="header-bar__hamburger">
            <HamburgerBase @click="toggleHamburgerMenu" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use 'header-bar';
</style>
