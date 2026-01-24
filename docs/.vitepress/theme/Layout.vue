<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout />
</template>

<style>
/* Hide default footer */
.VPFooter {
  display: none !important;
}
</style>
