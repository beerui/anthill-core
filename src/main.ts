import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Anthill from '@brewer/anthill-core'
console.log(Anthill);

const app = createApp(App)
app.use(Anthill)
console.log(app)
console.log(app._context.components);
app.mount('#app')
