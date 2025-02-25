<script setup lang="ts">
import { ref, unref } from 'vue';
import { HeaderBar } from '@core/components/Header/HeaderBar';
import { HeaderScreen } from '@core/components/Header/HeaderScreen';
import { TransitionFadeOffsetBase } from '@core/components/TransitionFadeOffsetBase';

const burgerIsOpen = ref<boolean>(false);

const toggleHamburgerMenu = () => {
  burgerIsOpen.value = !unref(burgerIsOpen);
};
</script>

<template>
  <header class="header-base">
    <div class="header-base__bar">
      <HeaderBar @toggle-hamburger-menu="toggleHamburgerMenu" />
    </div>

    <div class="header-base__screen">
      <TransitionFadeOffsetBase :transition-duration="380">
        <HeaderScreen v-if="burgerIsOpen" />
      </TransitionFadeOffsetBase>
    </div>
  </header>
</template>

<style lang="scss">
@use 'header-base';
</style>
