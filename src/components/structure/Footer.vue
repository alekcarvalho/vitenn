<template>
  <div class="container">
    <div class="icons">
      <router-link
        :to="{ name: 'home' }"
        data-tooltip-pos="down"
        aria-label="Home"
      >
        <icon-github />
      </router-link>
      <router-link
        :to="{ name: 'images' }"
        data-tooltip-pos="down"
        aria-label="Images tools"
      >
        <icon-image />
      </router-link>
      <router-link
        :to="{ name: 'axios-request' }"
        data-tooltip-pos="down"
        aria-label="Axios request"
      >
        <icon-link />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import IconGithub from '~icons/eva/home-outline'
import IconImage from '~icons/eva/image-outline'
import IconLink from '~icons/eva/link-2-outline'
</script>

<style lang="scss" scoped>
.icons {
  @apply w-full flex flex-row justify-center text-center py-10;
  a {
    @apply mr-5;
    &:last-child {
      @apply mr-0;
    }
  }
  svg {
    @apply text-xl fill-current text-gray-400 hover:text-gray-500;
  }
}
</style>
