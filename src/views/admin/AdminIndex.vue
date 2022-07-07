<template>
    <div class="section-admin-index">
        <span class="background-body"></span>
        <MenuAdminVue ></MenuAdminVue>
        <GestionDatosPersonalesVue></GestionDatosPersonalesVue> 
        <GestionDatosExperienciaVue></GestionDatosExperienciaVue>
        <GestionDatosLaboralVue></GestionDatosLaboralVue>
        <GestionDatosProyectosVue></GestionDatosProyectosVue>
        
              
    </div>

</template>
<script setup>
import { ref } from 'vue';
import MenuAdminVue from '@/components/admin/index/MenuAdmin.vue';
import GestionDatosExperienciaVue from "@/components/admin/index/GestionDatosExperiencia.vue";
import GestionDatosProyectosVue from '@/components/admin/index/GestionDatosProyectos.vue';
import GestionDatosLaboralVue from '@/components/admin/index/GestionDatosLaboral.vue';
import GestionDatosPersonalesVue from '@/components/admin/index/GestionDatosPersonales.vue';

</script>
