import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Productos from '@/views/Productos.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  }
  // ... puedes agregar más rutas aquí si es necesario
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
