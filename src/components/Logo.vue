<template>
  <div class="logo">
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
      :width="width"
      :height="height"
    >
      <path
        d="M22.5,0L0.1,22.3l7.3,7.3l15-15l15,15l15-15l15,15L89.9,7.2L82.6,0l-15,15L52.5,0l-15,15L22.5,0z"
      />
      <path
        d="M22.3,29.1L0,51.4l7.3,7.3l15-15l15,15l15-15l15,15l22.3-22.3l-7.3-7.2l-15,15l-15.1-15l-15,15L22.3,29.1z"
      />
    </svg>
    Vitenn
  </div>
</template>

<script setup>
defineProps({
  width: {
    default: 86,
    type: Number,
  },
  height: {
    default: 86,
    type: Number,
  },
})
</script>

<style lang="scss" scoped>
.logo {
  @apply w-full flex flex-col justify-center items-center text-center py-14 uppercase text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-200;
  svg {
    @apply fill-current text-primary;
  }
}
</style>
