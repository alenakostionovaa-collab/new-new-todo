import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'//данные доставка
import routes from './router'
import App from './App.vue'


const pinia = createPinia()
const app = createApp(App)//сборка

app.use(createPinia())
app.use(routes)//исп
app.use(pinia)
app.mount('#app')