<template>
    <div class="admin-datos-experiencia">
        <button @click="mostrarForm = true" class="btn-add-datos-admin">Añadir Proyecto</button>
        <DatosProyectosVue></DatosProyectosVue>
        <FormProyectoVue v-if="mostrarForm" @cerrarProyecto="mostrarForm = false"></FormProyectoVue>
        
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DatosProyectosVue from '@/components/admin/tablas-datos/DatosProyectos.vue';
import FormProyectoVue from '../formularios/FormProyecto.vue';
require("@/assets/css/admin-design/index/admin-index.css")



const mostrarForm = ref(false);
</script>