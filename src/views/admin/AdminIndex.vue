<template>
    <div class="section-admin-index">
        <span class="background-body"></span>
        <MenuAdminVue ></MenuAdminVue>
        <GestionDatosPersonalesVue v-if="index == 1"></GestionDatosPersonalesVue> 
        <GestionDatosExperienciaVue v-if="index == 2"></GestionDatosExperienciaVue>
        <GestionDatosLaboralVue v-if="index == 3"></GestionDatosLaboralVue>
        <GestionDatosProyectosVue v-if="index == 4"></GestionDatosProyectosVue>
        
              
    </div>

</template>
<script setup>
import { ref } from 'vue';
import MenuAdminVue from '@/components/admin/index/MenuAdmin.vue';
import GestionDatosExperienciaVue from "@/components/admin/index/GestionDatosExperiencia.vue";
import GestionDatosProyectosVue from '@/components/admin/index/GestionDatosProyectos.vue';
import GestionDatosLaboralVue from '@/components/admin/index/GestionDatosLaboral.vue';
import GestionDatosPersonalesVue from '@/components/admin/index/GestionDatosPersonales.vue';


const index = ref(1);

</script>
