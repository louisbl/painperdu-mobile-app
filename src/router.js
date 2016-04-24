import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  abstract: true,
  hashbang: false,
  history: true,
})

export default router
