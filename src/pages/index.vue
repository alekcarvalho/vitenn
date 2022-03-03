<template>
  <div class="container">
    <div class="buttons">
      <button class="button button-primary" type="button" @click="count++">
        count REF is: {{ count }}
      </button>
      <button
        class="button button-primary-alt"
        type="button"
        @click="counter.increment()"
      >
        count STORE is: {{ counter.count }}
      </button>
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
import { useCounterStore } from '~/stores/counter'

//data
const count = ref(0)

//store
const counter = useCounterStore()
// counter.count++
// counter.increment()
</script>

<style lang="scss" scoped>
.buttons {
  @apply flex flex-row justify-center;
  button {
    @apply mr-3;
  }
}
</style>
