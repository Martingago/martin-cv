<template>
  <div class="section-contacto">
    <Formulario></Formulario>
    <TextosimpleVue></TextosimpleVue>
  </div>
</template>

<script setup>
import Formulario from "../components/Formulario.vue"
import TextosimpleVue from "@/components/Textosimple.vue";
</script>

<style scoped>
.section-contacto{
  width: 90vw;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
}
@media screen and (max-width: 900px) {
  .section-contacto{
    grid-template-columns: auto;
    margin: auto;
  }
  .aboutme-card{
    grid-row: 1 / 2;
    max-width: 600px;
  }
}

</style>