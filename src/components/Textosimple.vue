<template>
   <div class="aboutme-card">
        <h2>{{titulo}}</h2>
        <p>
          {{parrafo}}
        </p>
        <router-link to="/contacto">{{boton}}</router-link>
      </div>
</template>

<script setup>
require('@/assets/css/texto-simple.css')
const props = defineProps({
  titulo: {
      type: String,
      default: "Soy un desarrollador Front-End. Contratenme, necesito comer",
  },
  parrafo: {
      type: String,
      default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque vero laboriosam esse ullam similique ratione, impedit provident accusantium autem."
  },
  boton: {
      type: String,
      default: "Visitar"
  }
})
</script>
