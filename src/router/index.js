import { createRouter, createWebHistory } from 'vue-router'

const routes = [
 
  {
    path: '/',
    name: 'Inicio',
    component: function () {
      return import('@/views/Inicio.vue')
    }
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: function () {
      return import('@/views/Curriculum.vue')
    }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: function () {
      return import('@/views/Contacto.vue')
    }
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: function () {
      return import('@/views/Proyectos.vue')
    }
  },
  {
    path: '/sobre-mi',
    name: 'Sobre mi',
    component: function () {
      return import('@/views/About.vue')
    }
  },
  {
    path: '/firebase',
    name: 'Firebase',
    component: function() {
      return import('@/views/CurriculumFirebase.vue')
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error 404',
    component: function(){
      return import('@/components/PageNotFound.vue')
    }
  },
  // zona administrativa
  {
    path: '/admin',
    name: 'Admin',
    component: function() {
      return import('@/views/admin/AdminIndex.vue')
    }
  },
  {
    path: '/adminlogin',
    name: 'Admin Login',
    component: function() {
      return import('@/views/admin/AdminLogin.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
