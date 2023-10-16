import { createApp } from 'vue'
import './style.css'

import App from './views/Inicio.vue'
import router from '@/router.js'  // Importa el enrutador

const app = createApp(App)
app.use(router)  // Usa el enrutador con tu aplicación
app.mount('#app')
