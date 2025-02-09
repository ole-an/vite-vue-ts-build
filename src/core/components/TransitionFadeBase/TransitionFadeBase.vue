<script setup lang="ts"></script>

<template>
  <Transition name="transition-fade-base">
    <slot></slot>
  </Transition>
</template>

<style lang="scss">
@use 'transition-fade-base';
</style>
