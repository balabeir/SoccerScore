import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from './Homepage'
Vue.use(VueRouter)

const routes = [
  Homepage
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
