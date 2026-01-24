<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import EcosystemSection from './EcosystemSection.vue'
import CustomFooter from './CustomFooter.vue'

const { Layout } = DefaultTheme
const route = useRoute()
</script>

<template>
  <Layout>
    <template #doc-after>
      <EcosystemSection v-if="route.path === '/'" />
      <CustomFooter v-if="route.path === '/'" />
    </template>
    <template #home-features-after>
      <EcosystemSection />
      <CustomFooter />
    </template>
  </Layout>
</template>

<style>
/* Hide default footer on home page */
.VPFooter {
  display: none !important;
}
</style>
