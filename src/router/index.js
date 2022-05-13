import { createRouter, createWebHistory } from 'vue-router'

const routes = [
 
   
  {
    path: '/curriculum',
    name: 'curriculum',
    component: function () {
      return import('@/views/Curriculum.vue')
    }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: function () {
      return import('@/views/Contacto.vue')
    }
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: function () {
      return import('@/views/Proyectos.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
