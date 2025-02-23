<script setup lang="ts">
import { HeaderBase } from '@core/components/Header/HeaderBase';
import { MainBase } from '@core/components/MainBase';
import { FooterBase } from '@core/components/Footer/FooterBase';
</script>

<template>
  <div class="default-layout">
    <HeaderBase />
    <MainBase>
      <slot />
    </MainBase>
    <FooterBase />
  </div>
</template>

<style lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}
</style>
