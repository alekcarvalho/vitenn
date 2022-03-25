<template>
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
</template>

<script setup>
import IconFlash from '~icons/eva/flash-outline'
import IconCube from '~icons/eva/cube-outline'
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
  @apply flex flex-row justify-center flex-wrap;
  button {
    @apply;
    &:first-child {
      @apply mr-3 mb-4 sm:mb-0;
    }
  }
}
</style>
