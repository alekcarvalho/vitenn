<template>
  <div class="images">
    <div class="container">
      <img
        v-lazy="{
          src: Image,
        }"
      />
    </div>
  </div>
</template>

<route>
{
  name: "images",
  meta: {requiresAuth: false}
}
</route>

<script setup>
import Image from '~/assets/images/folks.jpg?w=400&h=300&webp'
</script>

<style lang="scss" scoped>
.images {
  .container {
    @apply w-full flex justify-center items-center;
  }
  img {
    @apply rounded-md;
  }
}
</style>
