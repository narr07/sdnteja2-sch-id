<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/',
  },
  {
    label: 'Guru',
    to: '/guru',
    active: route.path.startsWith('/guru'),
  },
  {
    label: 'Profil',
    to: '/profil',
    active: route.path.startsWith('/profil'),
  },
  {
    label: 'Artikel',
    to: '/artikel',
    active: route.path.startsWith('/artikel'),
  },
])
</script>

<template>
  <UHeader>
    <template #title>
      Logo
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UColorModeButton />
      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UHeader>
</template>
