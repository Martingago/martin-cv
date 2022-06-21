<template>
    <div class="section-admin-index">
        <span class="background-body"></span>
        <MenuAdminVue></MenuAdminVue>
        <div>
            <DatosProyectosVue></DatosProyectosVue>
        </div>
        <div class="elements-grid">
            <h2>Cargar datos </h2>
                <FormLaboralVue></FormLaboralVue>
                <FormExperienciaVue></FormExperienciaVue>
                <FormPerfilVue></FormPerfilVue>
                <FormProyectoVue></FormProyectoVue>  
        </div>
        
    </div>

</template>
<script setup>
import FormExperienciaVue from '@/components/admin/FormExperiencia.vue';
import FormLaboralVue from '@/components/admin/FormLaboral.vue';
import MenuAdminVue from '@/components/admin/MenuAdmin.vue';
import FormPerfilVue from '@/components/admin/FormPerfil.vue';
import FormProyectoVue from '@/components/admin/FormProyecto.vue';
import DatosProyectosVue from '@/components/admin/DatosProyectos.vue';


</script>

<style>

.section-admin-index{
    margin-top: 45px;
}
.background-body {
    width: 100%;
    min-height: 100vw;
    position: fixed;
    top: 0;
    right: 0;
    background: rgb(238, 238, 238);
    background: linear-gradient(137deg, rgba(238, 238, 238, 1) 22%, rgba(200, 200, 200, 1) 88%);
    z-index: -1;
}

.header {
    display: none;
}

.elements-grid {
    width: 100%;
    display: grid;
    justify-content: center;
    align-self: start;
    align-items: start;
    gap: 2rem;
    grid-template-columns: repeat(2, auto);
}
    .elements-grid h2{
        text-align: center;
        grid-column: 1 / 3;
        font-size: 2rem;
        text-transform: uppercase;
    }
</style>