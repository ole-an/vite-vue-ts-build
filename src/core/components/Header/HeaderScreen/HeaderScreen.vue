<script setup lang="ts">
import { LangSwitcherBaseDropdown } from '@core/components/LangSwitcherBase/LangSwitcherBaseDropdown';
import { ColorSchemeSwitcherBase } from '@core/components/ColorSchemeSwitcherBase';
import { headerMenu } from '@router/routes/header.ts';
</script>

<template>
  <div class="header-screen">
    <div class="header-screen__container">
      <nav class="header-screen__nav">
        <ul class="header-screen__list">
          <li
            v-for="item in headerMenu"
            :key="item.id"
            class="header-screen__item"
          >
            <router-link
              :to="item.path"
              class="header-screen__link"
            >
              {{ $t(`base.header.menu.nav.${item.name}`) }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="header-screen__lang-switcher">
        <div class="header-screen__lang-switcher-label header-screen__label">
          Translations
        </div>
        <LangSwitcherBaseDropdown embedded />
      </div>
      <div class="header-screen__color-switcher">
        <span class="header-screen__label">Цветовая схема</span>
        <ColorSchemeSwitcherBase />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use 'header-screen';
</style>
