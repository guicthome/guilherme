<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import HomePage from './HomePage.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before v-if="frontmatter.customHome">
      <HomePage />
    </template>
  </Layout>
</template>

<style>
/* Hide default footer on all pages - we use custom footer */
.VPFooter {
  display: none !important;
}

/* Hide doc content only on custom home page */
.vp-doc:has(+ .home-page),
[data-custom-home="true"] .vp-doc {
  display: none;
}
</style>
