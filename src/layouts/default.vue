<template>
  <main>
    <Logo />
    <div class="content">
      <div class="description">Opinionated Vite Starter Template</div>
      <router-view />
      <Footer />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.description {
  @apply text-center my-8 text-xl font-extralight text-blue-900;
}
</style>
