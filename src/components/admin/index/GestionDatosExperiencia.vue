<template>
    <div class="admin-datos-experiencia">
        <button @click="mostrarForm = true" class="btn-add-datos-admin">Añadir Experiencia</button>
        <DatosExperienciaVue></DatosExperienciaVue>
        <FormExperienciaVue v-if="mostrarForm" @cerrarModal="mostrarForm = false"></FormExperienciaVue>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DatosExperienciaVue from '@/components/admin/tablas-datos/DatosExperiencia.vue';
import FormExperienciaVue from '@/components/admin/formularios/FormExperiencia.vue';
require("@/assets/css/admin-design/index/admin-index.css")

const mostrarForm = ref(false);
</script>