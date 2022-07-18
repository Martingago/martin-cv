<template>
  <div class="section-contacto">
    <div class="contacto">
      <TextosimpleVue 
      :titulo="props.titulo"
      :parrafo="props.parrafo"
      :mostrarBoton = false
      >
      
      </TextosimpleVue>
      <Formulario></Formulario>
    </div>
    <BarraDatosVue></BarraDatosVue>
  </div>
 
</template>

<script setup>
import Formulario from "../components/Formulario.vue"
import TextosimpleVue from "@/components/Textosimple.vue";
import BarraDatosVue from "@/components/BarraDatos.vue";
require("@/assets/css/secciones/contacto.css");

const props = defineProps({
  titulo: {
    type: String,
    default: "¿Construimos algo juntos? ¡Me gustaría ser parte de tu proyecto!"
  },
  parrafo: {
    type: String,
    default: "Si estás buscando a alguien con motivación, implicado, con ganas de trabajar y aprender yo soy la persona indicada"
  },
})

</script>

