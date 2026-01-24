<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import HomePage from './HomePage.vue'

const { Layout } = DefaultTheme
const route = useRoute()

const isHome = () => route.path === '/'
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <HomePage v-if="isHome()" />
    </template>
  </Layout>
</template>

<style>
/* Hide default home content when using custom HomePage */
.VPHome .VPHero,
.VPHome .VPFeatures {
  display: none !important;
}

/* Hide default footer */
.VPFooter {
  display: none !important;
}
</style>
