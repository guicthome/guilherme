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
.VPFooter {
  display: none !important;
}

.VPDoc .content-container .vp-doc {
  display: none;
}
</style>
