<script setup lang="ts">
import { computed } from 'vue';
import { ICONS } from './icons.ts';
import { IconSize, IconName } from './types.ts';

interface IIconProps {
  icon: IconName;
  size?: IconSize;
}

const props = withDefaults(defineProps<IIconProps>(), {
  size: IconSize.M,
});

const iconClasses = computed(() => [`icon-base_${props.size}`]);
const currentIcon = computed(() => ICONS[props.icon]);
</script>

<template>
  <span
    :class="iconClasses"
    class="icon-base"
    role="img"
    aria-label="icon"
  >
    <component
      :is="currentIcon"
      class="icon-base__svg"
    ></component>
  </span>
</template>

<style lang="scss">
@use 'icon-base';
</style>
