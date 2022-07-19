import { createRouter, createWebHistory } from 'vue-router'

const routes = [
 
  {
    path: '/',
    name: 'inicio',
    meta: {
      tittle: `Inicio - Martín CV`
    },
    component: function () {
      return import('@/views/Inicio.vue')
    }
  },
  {
    path: '/contacto',
    name: 'contacto',
    meta: {
      tittle: 'Contacto - Martín CV'
    },
    component: function () {
      return import('@/views/Contacto.vue')
    }
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    meta: {
      tittle: 'Proyectos - Martín CV'
    },
    component: function () {
      return import('@/views/Proyectos.vue')
    }
  },
  {
    path: '/sobre-mi',
    name: 'sobre-mi',
    meta: {
      tittle: 'Sobre mi - Martín CV'
    },
    component: function () {
      return import('@/views/About.vue')
    }
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    meta: {
      tittle: "Curriculum - Martín CV"
    },
    component: function() {
      return import('@/views/CurriculumFirebase.vue')
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error-404',
    meta: {
      tittle: 'Error 404 Página no encontrada'
    },
    component: function(){
      return import('@/components/PageNotFound.vue')
    }
  },
  // zona administrativa
  {
    path: '/admin',
    name: 'admin',
    component: function() {
      return import('@/views/admin/AdminIndex.vue')
    }
  },
  {
    path: '/adminlogin',
    name: 'admin-login',
    component: function() {
      return import('@/views/admin/AdminLogin.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=> {
  window.document.title = to.meta.tittle ? to.meta.tittle :  'Martin Portfolio';
  next();
})

export default router
