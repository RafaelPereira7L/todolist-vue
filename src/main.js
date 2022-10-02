import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/global.css'
import store from './store'

createApp(App).use(store).mount('#app')
