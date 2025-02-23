<script setup lang="ts">
import { ref, unref } from 'vue';

const isOpen = ref<boolean>(false);

const toggleHamburger = () => {
  isOpen.value = !unref(isOpen);
};
</script>

<template>
  <button
    :class="{ 'is-active': isOpen }"
    class="hamburger-base"
    type="button"
    @click="toggleHamburger"
  >
    <span class="hamburger-base__box">
      <span class="hamburger-base__inner"></span>
    </span>
  </button>
</template>

<style lang="scss">
@use 'hamburger-base';
</style>
