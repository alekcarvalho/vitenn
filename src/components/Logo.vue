<template>
  <div class="logo">
    <router-link class="logo-body" :to="{ name: 'home' }">
      <svg
        id="Layer_1"
        version="1.1"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 89.9 58.7"
        style="enable-background: new 0 0 89.9 58.7"
        xml:space="preserve"
      >
        <path
          d="M22.5,0L0.1,22.3l7.3,7.3l15-15l15,15l15-15l15,15L89.9,7.2L82.6,0l-15,15L52.5,0l-15,15L22.5,0z"
        />
        <path
          d="M22.3,29.1L0,51.4l7.3,7.3l15-15l15,15l15-15l15,15l22.3-22.3l-7.3-7.2l-15,15l-15.1-15l-15,15L22.3,29.1z"
        />
      </svg>
      Vitenn
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  @apply w-full flex flex-col justify-center items-center text-center pt-14 uppercase text-2xl font-bold text-white sm:text-4xl;
  &-body {
    @apply flex flex-col justify-center items-center rounded-md bg-gradient-to-r from-indigo-500 to-primary w-32 h-32 sm:w-48 sm:h-48;
  }
  svg {
    @apply fill-current text-white mb-2 w-13 sm:w-20;
  }
}
</style>
