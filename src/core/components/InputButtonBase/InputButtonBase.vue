<script setup lang="ts">
import { InputType } from '@core/components/InputButtonBase/types.ts';

const props = defineProps<{
  id: string;
  name: string;
  type: InputType;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  description?: string;
}>();
</script>

<template>
  <div
    :aria-description="props.description"
    :aria-label="props.label"
    :role="props.type"
    class="input-button-base"
  >
    <input
      :id="props.id"
      :checked="props.checked"
      :disabled="props.disabled"
      :name="props.name"
      :required="props.required"
      :type="props.type"
      :value="props.value"
      class="input-button-base__input"
    />
    <label
      class="input-button-base__label"
      :for="props.id"
    >
      <slot></slot>
    </label>
  </div>
</template>

<style scoped lang="scss"></style>
