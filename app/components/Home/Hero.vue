<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Get started',
    to: '/guru',
    icon: 'i-lucide-square-play',
  },
  {
    label: 'Learn more',
    to: '/berita',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
])
</script>

<template>
  <UPageHero
    title="Ultimate Vue UI library"
    description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
    headline="New release"
    orientation="horizontal"
    :links="links"
  >
    <img
      src="/tum.png"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default"
    >
  </UPageHero>
</template>
