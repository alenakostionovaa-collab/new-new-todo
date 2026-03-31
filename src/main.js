import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import routes from './router'
import App from './App.vue'


const pinia = createPinia()
const app = createApp(App)

app.use(createPinia())
app.use(routes)

app.mount('#app')