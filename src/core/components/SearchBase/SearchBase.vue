<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { IProps } from '@core/components/SearchBase/types.ts';
import { IconName, IconSize } from '@core/components/IconBase';
import { ButtonIconBase, ButtonTypes } from '@core/components/ButtonIconBase';

const props = withDefaults(defineProps<IProps>(), {
  name: 'search-input',
  placeholder: 'components.searchBase.clear.label',
  value: '',
  clearLabel: 'components.searchBase.clear.label',
  clearDescription: 'components.searchBase.clear.description',
  searchLabel: 'components.searchBase.search.label',
  searchDescription: 'components.searchBase.search.description',
});

const inputValue = ref<IProps['value']>(props.value);
const iconClear = ref<{ buttonIconBase: HTMLButtonElement } | null>(null);

onMounted(() => {
  watch(
    inputValue,
    (newValue: string | undefined) => {
      if (!iconClear.value?.buttonIconBase) {
        return;
      }
      if (newValue && newValue.length) {
        iconClear.value.buttonIconBase.classList.remove('hidden');
      } else {
        iconClear.value.buttonIconBase.classList.add('hidden');
      }
    },
    { immediate: true },
  );
});

const clearInput = () => {
  inputValue.value = '';
};

const startSearch = () => {
  // eslint-disable-next-line no-console
  console.log('start search!');
};
</script>

<template>
  <div
    class="search-base"
    role="search"
  >
    <div class="search-base__wrapper">
      <div class="search-base__input-wrapper">
        <input
          v-model="inputValue"
          class="search-base__input"
          type="search"
          :name="props.name"
          maxlength="70"
          :placeholder="$t(props.placeholder)"
          :value="inputValue"
        />
        <ButtonIconBase
          ref="iconClear"
          class="search-base__button search-base__button_clear"
          :icon="IconName.close"
          :size="IconSize.XXS"
          :type="ButtonTypes.reset"
          :aria-label="$t(props.clearLabel)"
          :aria-description="$t(props.clearDescription)"
          @click="clearInput"
        />
      </div>
      <ButtonIconBase
        class="search-base__button search-base__button_search"
        :icon="IconName.search"
        :size="IconSize.S"
        :type="ButtonTypes.submit"
        :aria-label="$t(props.searchLabel)"
        :aria-description="$t(props.searchDescription)"
        @click="startSearch"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'search-base.scss';
</style>
