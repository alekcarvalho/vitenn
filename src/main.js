import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import { http } from '~/services/http'
import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import VueLazyLoad from 'vue3-lazyload'
import App from './App.vue'

// css
import 'virtual:windi.css'
import '~/assets/scss/main.scss'

//libs
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
const head = createHead()
const pinia = createPinia()

app.use(router)
app.use(head)
app.use(pinia)
app.use(VueLazyLoad)

//provides
app.provide('$http', http)

//mount app
app.mount('#app')
