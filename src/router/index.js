import { createRouter, createWebHistory } from 'vue-router'
import todo from '../components/todo.vue'
import child from '../components/child.vue'

const routes = [
  { path: '/', component: todo },
  { path: '/child', component: child }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
