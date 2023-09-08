// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BaseCard from '@/components/BaseCard.vue'

import App from './App.vue'

const app = createApp(App)

app.component('base-card', BaseCard)
app.use(createPinia())

app.mount('#app')
