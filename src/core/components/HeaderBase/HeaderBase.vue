<script setup lang="ts">
import { LangSwitcherBase } from '@core/components/LangSwitcherBase';
import { ColorSchemeSwitcherBase } from '@core/components/ColorSchemeSwitcherBase';
import { $t } from '@/main.ts';
</script>

<template>
  <header class="header-base">
    <div class="header-base__container container">
      <div class="header-base__inner">
        <span class="header-base__logo">
          {{ $t('base.header.logo') }}
        </span>
        <div class="header-base__lang-switcher">
          <LangSwitcherBase />
        </div>
        <div class="header-base__color-switcher">
          <ColorSchemeSwitcherBase />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use 'header-base';
</style>
