<template>
  <div class="container">
    <action-buttons />
  </div>
</template>

<route>
{
  name: "home",
  meta: {requiresAuth: false}
}
</route>

<script setup>
import { customHead } from '~/utils/head'

//head
customHead()
</script>
