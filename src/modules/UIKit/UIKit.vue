<script setup lang="ts">
import { ref } from 'vue';
import {
  ButtonBase,
  ButtonSize,
  ButtonTheme,
} from '@core/components/ButtonBase';
import { IconBase, IconName, IconSize } from '@core/components/IconBase';
import { ModalBase } from '@core/components/ModalBase';
import { $t } from '@/main.ts';

defineEmits(['update:modelValue']);

const modalState = ref(false);
</script>

<template>
  <div class="ui-kit">
    <section class="ui-kit__section">
      <h2 class="ui-kit__title">
        {{ $t('modules.uiKit.buttons.title') }}
      </h2>
      <div class="flex_column_32">
        <ul class="flex_around_24">
          <li
            v-for="(size, value, index) in ButtonSize"
            :key="index"
          >
            <ButtonBase
              :size="size"
              :theme="ButtonTheme.PRIMARY"
            >
              {{ value }}
            </ButtonBase>
          </li>
        </ul>
        <ul class="flex_around_24">
          <li
            v-for="(size, value, index) in ButtonSize"
            :key="index"
          >
            <ButtonBase
              :size="size"
              :theme="ButtonTheme.OUTLINE"
            >
              {{ value }}
            </ButtonBase>
          </li>
        </ul>
      </div>
    </section>
    <section class="ui-kit__section">
      <h2 class="ui-kit__title">
        {{ $t('modules.uiKit.icons.title') }}
      </h2>
      <div class="flex_column_32">
        <ul class="flex_around_24">
          <li
            v-for="(size, value, index) in IconSize"
            :key="index"
          >
            <IconBase
              :icon="IconName.close"
              :size="IconSize[value]"
            />
          </li>
        </ul>
      </div>
    </section>
    <section class="ui-kit__section">
      <h2 class="ui-kit__title">
        {{ $t('modules.uiKit.modal.default.title') }}
      </h2>
      <div class="flex_column_32">
        <ButtonBase
          :size="ButtonSize.M"
          :theme="ButtonTheme.PRIMARY"
          @click="modalState = true"
        >
          {{ $t('modules.uiKit.modal.default.openButton') }}
        </ButtonBase>
        <ModalBase
          :model-value="modalState"
          @update:model-value="modalState = $event"
        >
          <template #title>
            {{ $t('modules.uiKit.modal.default.content.title') }}
          </template>
          <template #content>
            <p id="modal-description">
              {{ $t('modules.uiKit.modal.default.content.desc1') }}
              <br />
              {{ $t('modules.uiKit.modal.default.content.desc2') }}
            </p>
          </template>
          <template #controls>
            <ButtonBase
              :size="ButtonSize.S"
              :theme="ButtonTheme.OUTLINE"
              @click="modalState = false"
            >
              {{ $t('modules.uiKit.modal.default.content.closeButton') }}
            </ButtonBase>
          </template>
        </ModalBase>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@use 'ui-kit';
</style>
