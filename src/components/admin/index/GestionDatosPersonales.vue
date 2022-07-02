<template>
<div class="admin-datos-personales">
    <button @click="cargarDatos = true" class="btn-add-datos-admin">Añadir Datos Personales</button>
    <DatosPersonalesVue></DatosPersonalesVue>
    <FormPerfilVue v-if="cargarDatos" @cerrarModal="cargarDatos = false"></FormPerfilVue>
</div>

</template>
<script setup>
import { ref } from 'vue';
import DatosPersonalesVue from '@/components/admin/tablas-datos/DatosPersonales.vue';
import FormPerfilVue from '../formularios/FormPerfil.vue';
require("@/assets/css/admin-design/index/admin-index.css");

const cargarDatos = ref(false)
</script>