import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Tix from './tix.js';
const app = createApp(App)
app.provide('TixScript', Tix);
app.provide('location', 'North Pole');

console.log('from main.js', app.provide)

createApp(App).use(store).use(router).mount('#app')
