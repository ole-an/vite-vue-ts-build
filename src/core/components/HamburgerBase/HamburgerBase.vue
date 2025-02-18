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
    class="hamburger"
    type="button"
    @click="toggleHamburger"
  >
    <div class="hamburger__box">
      <div class="hamburger__inner"></div>
    </div>
  </button>
</template>

<style lang="scss">
@use 'hamburger-base';
</style>
