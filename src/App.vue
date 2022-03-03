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

<style lang="scss">
html,
body,
#app,
.content {
  @apply w-full text-black;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  @apply overflow-x-hidden;
}

main {
  @apply flex flex-col min-h-screen bg-white;
}

.content {
  @apply flex-grow mt-4 relative lg:mt-10;
}

.container {
  @apply max-w-9xl mx-auto px-6 text-center;
}

section {
  @apply py-10 lg:py-16;
}

//Typograph
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-bold;
}

.h1 {
  @apply text-6xl lg:text-7xl;
}
.h2 {
  @apply text-5xl lg:text-6xl;
}
.h3 {
  @apply text-4xl lg:text-5xl;
}
.h4 {
  @apply text-3xl lg:text-4xl;
}
.h5 {
  @apply text-3xl;
}
.h6 {
  @apply text-2xl;
}

//diplay

.display-1 {
  @apply text-7xl lg:text-9xl;
}

.display-2 {
  @apply text-7xl lg:text-8xl;
}

.display-3 {
  @apply text-6xl lg:text-7xl;
}

.paragraph {
  @apply text-xl;
  a {
    @apply underline text-primary;
  }
}

//buttons
.button {
  @apply px-10 py-3.5 rounded-md border-0 font-normal whitespace-nowrap flex items-center justify-center;
  //transition: $transition;
  &:hover {
    opacity: 0.8;
  }
  &--icon {
    //transition: $transition;
    @apply w-5;
  }
  .icon-left {
    @apply mr-3;
  }
  .icon-right {
    @apply ml-3;
  }
}

.button-primary {
  @apply text-white bg-primary dark:bg-white dark:text-primary;
}

.button-primary-alt {
  @apply hover:text-white hover:bg-primary text-primary border border-primary;
}

.button-sm {
  @apply text-sm px-6 py-2;
}

.button-md {
  @apply text-sm px-8 py-3;
}

.button-lg {
  @apply text-lg py-3;
}

.no-scroll {
  @apply overflow-y-hidden;
}
</style>
