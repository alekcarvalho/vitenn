<template>
  <div class="request">
    <div class="container">
      <table>
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
//injects
const $http = inject('$http')

const users = ref([])

//methods
const getData = async () => {
  await $http.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    users.value = res.data
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
</style>
