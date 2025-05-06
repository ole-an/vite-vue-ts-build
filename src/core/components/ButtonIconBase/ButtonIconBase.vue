<script setup lang="ts">
import { ref } from 'vue';
import { IconBase, IconName, IconSize } from '@core/components/IconBase';
import { ButtonTypes } from './types.ts';

const props = defineProps<{
  type: ButtonTypes;
  icon: IconName;
  size: IconSize;
  label?: string;
  description?: string;
}>();

const buttonIconBase = ref<HTMLButtonElement | null>(null);

defineExpose({
  buttonIconBase,
});
</script>

<template>
  <button
    ref="buttonIconBase"
    :aria-label="props.label"
    :type="props.type"
    :aria-description="props.description"
    class="button-icon-base"
  >
    <IconBase
      :icon="props.icon"
      :size="props.size"
    />
  </button>
</template>

<style scoped lang="scss"></style>
