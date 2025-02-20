<script setup lang="ts">
import { computed, ComputedRef } from 'vue';

const props = defineProps<{
  transitionDuration?: number | undefined;
}>();

const cssProps: ComputedRef<string | null> = computed(() => {
  if (typeof props.transitionDuration === 'number') {
    return `--transition-duration: ${props.transitionDuration}ms`;
  }
  return null;
});
</script>

<template>
  <Transition
    name="transition-fade-offset-base"
    :style="cssProps"
  >
    <slot></slot>
  </Transition>
</template>

<style lang="scss">
@use 'transition-fade-offset-base';
</style>
