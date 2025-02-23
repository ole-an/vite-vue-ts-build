<script setup lang="ts">
import { ref } from 'vue';
import { IconBase, IconName, IconSize } from '@core/components/IconBase';
import { LangSwitcherBaseDropdown } from '@core/components/LangSwitcherBase/LangSwitcherBaseDropdown';

const isExpanded = ref(false);

const setAriaExpandedTrue = () => {
  isExpanded.value = true;
};

const setAriaExpandedFalse = () => {
  isExpanded.value = false;
};
</script>

<template>
  <div
    class="language-switcher-base"
    @mouseenter="setAriaExpandedTrue"
    @mouseleave="setAriaExpandedFalse"
  >
    <button
      class="language-switcher-base__button"
      aria-haspopup="true"
      :aria-expanded="isExpanded"
      aria-label="Select language"
    >
      <IconBase
        :icon="IconName.earth"
        :size="IconSize.M"
      />
      <span class="language-switcher-base__text">
        {{ $t('base.langSwitcher.button') }}
      </span>
    </button>
    <div class="language-switcher-base__dropdown">
      <LangSwitcherBaseDropdown />
    </div>
  </div>
</template>

<style lang="scss">
@use 'lang-switcher-base';
</style>
