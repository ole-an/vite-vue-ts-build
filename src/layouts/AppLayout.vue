<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const layout = computed(() => {
  const currentLayout = route?.meta?.layout;

  if (currentLayout) {
    return `${currentLayout}Layout`;
  }

  return 'div';
});
</script>
