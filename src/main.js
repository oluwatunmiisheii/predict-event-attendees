import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AppPageHeader from "@/components/shared/PageHeader"
import AppButton from "@/components/button"
import Tix from './tix.js';
const app = createApp(App)
// global component registration
app.component('AppPageHeader', AppPageHeader)
app.component('AppButton', AppButton)
app.provide('TixScript', Tix);
app.use(store).use(router).mount('#app')
