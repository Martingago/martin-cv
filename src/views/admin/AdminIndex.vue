<template>
    <div class="section-admin-index">
        <span class="background-body"></span>
        <MenuAdminVue></MenuAdminVue>
        <GestionDatosExperienciaVue></GestionDatosExperienciaVue>
        <GestionDatosProyectosVue></GestionDatosProyectosVue>
        <GestionDatosLaboralVue></GestionDatosLaboralVue>

        
    </div>

</template>
<script setup>
import { ref } from 'vue';
import MenuAdminVue from '@/components/admin/index/MenuAdmin.vue';
import GestionDatosExperienciaVue from "@/components/admin/index/GestionDatosExperiencia.vue";
import GestionDatosProyectosVue from '@/components/admin/index/GestionDatosProyectos.vue';
import GestionDatosLaboralVue from '@/components/admin/index/GestionDatosLaboral.vue';



const mostrarForm = ref(false)

</script>
