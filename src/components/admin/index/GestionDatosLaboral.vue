<template>
<button @click="cargarDatos = true" class="btn-add-datos-admin">Añadir Formación</button>
<DatosLaboralVue></DatosLaboralVue>
<FormLaboral v-if="cargarDatos" @cerrarModal="cargarDatos = false"></FormLaboral>
</template>

<script setup>
import { ref } from 'vue';
import FormLaboral from "@/components/admin/formularios/FormLaboral.vue";
import DatosLaboralVue from "@/components/admin/tablas-datos/DatosLaboral.vue";
require("@/assets/css/admin-design/index/admin-index.css")

const cargarDatos = ref(false)

</script>