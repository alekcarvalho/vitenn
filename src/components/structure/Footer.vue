<template>
  <div class="container">
    <div class="icons">
      <a href="#">
        <icon-github />
      </a>
      <a href="#">
        <icon-link />
      </a>
    </div>
  </div>
</template>

<script setup>
import IconGithub from '~icons/eva/github-outline'
import IconLink from '~icons/eva/link-2-outline'
</script>

<style lang="scss" scoped>
.icons {
  @apply mt-10 w-full flex flex-row justify-center text-center;
  svg {
    @apply mr-5 text-xl fill-current text-gray-300 hover:text-gray-400;
  }
}
</style>
