import { createRouter, createWebHistory } from 'vue-router'//мех перекл стр и запись ссылок
import todo from '../components/todo.vue'
import child from '../components/child.vue'

const routes = [
  { path: '/', component: todo },
  { path: '/child', component: child }
]

export default createRouter({//чтобы наружи исп
  history: createWebHistory(),//отменяет стандарт обновление и вствляет наш данные
  routes
})
