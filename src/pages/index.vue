<template>
  <div class="container">
    <div class="description">Opinionated Vite Starter Template</div>
    <div class="buttons">
      <button class="button button--primary" type="button" @click="count++">
        <icon-flash class="button__icon-left" />
        count REF is: {{ count }}
      </button>
      <button
        class="button button--secondary"
        type="button"
        @click="counter.increment()"
      >
        <icon-cube class="button__icon-left" />
        count STORE is: {{ counter.count }}
      </button>
    </div>
    <div class="images">
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
  name: "home",
  meta: {requiresAuth: false}
}
</route>

<script setup>
import IconFlash from '~icons/eva/flash-outline'
import IconCube from '~icons/eva/cube-outline'
import { useCounterStore } from '~/stores/counter'
import Image from '~/assets/images/folks.jpg?w=400&h=300&webp'

//data
const count = ref(0)

//store
const counter = useCounterStore()
// counter.count++
// counter.increment()
</script>

<style lang="scss" scoped>
.description {
  @apply text-center mb-8 text-xl font-extralight text-blue-900;
}
.buttons {
  @apply flex flex-row justify-center;
  button {
    @apply mr-3;
  }
}

.images {
  @apply w-full flex justify-center items-center mt-20;
  img {
    @apply rounded-md;
  }
}
</style>
