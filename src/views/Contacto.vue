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
</script>

<style scoped>
.section-contacto{
  width: 100%;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto;
  gap: 3rem;
}

.contacto{
  width: 90vw;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
}

@media screen and (max-width: 1080px) {
  .contacto{
    grid-template-columns: auto;
    margin: auto;
  }
}

</style>