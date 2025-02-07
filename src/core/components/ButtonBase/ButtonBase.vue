<script setup lang="ts">
import { computed } from 'vue';
import { ButtonSize, ButtonTheme } from './types.ts';

interface IButtonProps {
  size: ButtonSize;
  theme: ButtonTheme;
  active?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<IButtonProps>(), {
  size: ButtonSize.AUTO,
  theme: ButtonTheme.PRIMARY,
  active: false,
});

const buttonClasses = computed(() => [
  `button-base_size_${props.size}`,
  `button-base_theme_${props.theme}`,
  { 'button-base_active': props.active },
]);
</script>

<template>
  <button
    class="button-base"
    :class="buttonClasses"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
@use 'button-base';
</style>
