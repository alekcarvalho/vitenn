<template>
  <div class="request">
    <div class="container">
      <table v-if="!loading">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in users" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.username }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class="placeholder">
        <content-loader
          v-for="index in 4"
          :key="index"
          :image="false"
          :header="false"
          :text="true"
          :lines="4"
        />
      </div>
    </div>
  </div>
</template>

<route>
{
  name: "axios-request",
  meta: {requiresAuth: false}
}
</route>

<script setup>
import { customHead } from '~/utils/head'

//head
customHead({
  title: 'Axios Request',
})

//injects
const $http = inject('$http')

const loading = ref(false)
const users = ref([])

//methods
const getData = async () => {
  loading.value = true
  await $http.get(`/users`).then((res) => {
    setTimeout(() => {
      users.value = res.data
      loading.value = false
    }, 3000)
  })
}

//Mounted
onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped>
.container {
  @apply w-full flex justify-center items-center;
}

.placeholder {
  @apply w-sm;
}
</style>
