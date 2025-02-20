<script setup lang="ts">
import { useTemplateRef, watchEffect, watch, onMounted } from 'vue';
import { IconBase, IconName, IconSize } from '@core/components/IconBase';
import {
  ButtonBase,
  ButtonTheme,
  ButtonSize,
} from '@core/components/ButtonBase';
import { TransitionModalBase } from '@core/components/TransitionModalBase';
import { getScrollbarWidth, trapFocus } from '@core/utils/general.ts';

/* https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/ */

interface IModalProps {
  modelValue: boolean;
}

const props = withDefaults(defineProps<IModalProps>(), {
  modelValue: false,
});

const emits = defineEmits(['update:modelValue']);

const modal = useTemplateRef<HTMLElement | null>('modal');
const modalTitle = useTemplateRef<HTMLElement | null>('');

const close = () => {
  emits('update:modelValue', false);
};

watchEffect(() => modalTitle.value?.textContent);

const toggleScrollbarClass = () => {
  const bodyScrollbarWidth = getScrollbarWidth(document.body);
  document.body.style.setProperty('--scrollbar-width', bodyScrollbarWidth);
  if (bodyScrollbarWidth === '0px' || !bodyScrollbarWidth) {
    if (document.body.classList.contains('has-scrollbar')) {
      document.body.classList.remove('has-scrollbar');
    }
  } else {
    if (!document.body.classList.contains('has-scrollbar')) {
      document.body.classList.add('has-scrollbar');
    }
  }
};

onMounted(() => {
  toggleScrollbarClass();
});

window.addEventListener('resize', toggleScrollbarClass);

watch(
  () => props.modelValue,
  (value) => {
    const scrollTop = window.scrollY;
    if (value) {
      /* модальное окно открыто */
      if (!document.body.classList.contains('body-lock')) {
        document.body.classList.add('body-lock');
      }
      window.scrollTo(0, scrollTop); /* компенсация прыжка к началу документа */
    } else {
      /* модальное окно скрыто */
      if (document.body.classList.contains('body-lock')) {
        document.body.classList.remove('body-lock');
      }
      window.scrollTo(0, scrollTop);
    }
  },
);

watchEffect(() => {
  if (modal.value) {
    trapFocus(modal.value);
  }
});

const onKeyPress = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') {
    close();
  }
};
</script>

<template>
  <TransitionModalBase :duration="500">
    <div
      v-if="modelValue"
      ref="modal"
      class="modal-base"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      :aria-hidden="!modelValue"
      @keydown="onKeyPress"
    >
      <div
        class="modal-base__overlay"
        @click="close"
      ></div>
      <div class="modal-base__content">
        <div class="modal-base__header">
          <div
            id="modal-title"
            class="modal-base__title"
          >
            <slot name="title"></slot>
          </div>
          <ButtonBase
            :size="ButtonSize.S"
            :theme="ButtonTheme.PRIMARY"
            class="modal-base__close-button"
            type="button"
            aria-label="Close"
            @click="close"
          >
            <IconBase
              :icon="IconName.close"
              :size="IconSize.XXS"
            />
          </ButtonBase>
        </div>
        <div class="modal-base__body">
          <slot name="content"></slot>
          <slot name="controls"></slot>
        </div>
      </div>
    </div>
  </TransitionModalBase>
</template>

<style lang="scss">
@use 'modal-base';
</style>
