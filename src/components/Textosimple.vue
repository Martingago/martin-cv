<template>
   <div class="aboutme-card">
        <h2>{{titulo}}</h2>
        <p>
          {{parrafo}}
        </p>
        <router-link :to="redirect">{{boton}}</router-link>
      </div>
</template>

<script setup>
require('@/assets/css/texto-simple.css')
const props = defineProps({
  titulo: {
      type: String,
      default: `Soy Martín, un desarrollador Front-end. Contratenme, necesito comer`,
  },
  parrafo: {
      type: String,
      default: "Mi nombre es Martín, soy un desarrollador Front-end, apasionado de la maquetación y el diseño. Deando aprender y evolucionar como programador"
  },
  boton: {
      type: String,
      default: "Contacto"
  },
  redirect: {
    type: String,
    default: "/contacto"
  }
})
</script>
