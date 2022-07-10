<template>
  <div class="section-contacto">
    <div class="contacto">
      <TextosimpleVue parrafo="Contactame si lo necesitas" titulo="Contactame"></TextosimpleVue>
      <Formulario></Formulario>
    </div>
    <BarraDatosVue></BarraDatosVue>
  </div>
 
</template>

<script setup>
import Formulario from "../components/Formulario.vue"
import TextosimpleVue from "@/components/Textosimple.vue";
import BarraDatosVue from "@/components/BarraDatos.vue";
require("@/assets/css/secciones/contacto.css")
</script>

