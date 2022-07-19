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
    <BarraDatosPersonalesVue></BarraDatosPersonalesVue>
  </div>
 
</template>

<script setup>
import Formulario from "../components/Formulario.vue"
import TextosimpleVue from "@/components/Textosimple.vue";
import BarraDatosPersonalesVue from "@/components/BarraDatosPersonales.vue";
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

