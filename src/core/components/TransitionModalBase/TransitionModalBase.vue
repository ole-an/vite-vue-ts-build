<script setup lang="ts"></script>

<template>
  <Transition name="transition-modal-base">
    <slot></slot>
  </Transition>
</template>

<style lang="scss">
@use 'transition-modal-base';
</style>
