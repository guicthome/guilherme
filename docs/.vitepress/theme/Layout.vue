<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import HomePage from './HomePage.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <template v-if="frontmatter.layout === 'custom-home'">
    <Layout>
      <template #doc-before>
        <HomePage />
      </template>
    </Layout>
  </template>
  <template v-else>
    <Layout />
  </template>
</template>

<style>
/* Hide default footer */
.VPFooter {
  display: none !important;
}

/* Hide doc content when using custom-home */
.custom-home-layout .VPDoc .content-container {
  display: none !important;
}
</style>
