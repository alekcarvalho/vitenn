<template>
  <router-view />
</template>

<script setup>
import config from '~/config/config.json'
useHead({
  title: config.title,
  meta: [{ name: 'description', content: config.description }],
})
</script>
