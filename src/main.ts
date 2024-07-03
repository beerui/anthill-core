import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next'
import './style.css'
import App from './App.vue'
import HelloWord from './components/HelloWorld.vue'
import Anthill from '@brewer/anthill-core'
// console.log(Anthill);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'HW', component: HelloWord }
    ],
    scrollBehavior() {
        return {
            el: '#app',
            top: 0,
            behavior: 'smooth'
        }
    }
})
import 'tdesign-vue-next/es/style/index.css'
import '@brewer/anthill-core/es/style.css'
import {createRouter, createWebHistory} from "vue-router";
const app = createApp(App)
app.use(router)
app.use(TDesign)
app.use(Anthill)
app.mount('#app')
