<template>
    <div>
        <span class="background-body"></span>
        <MenuAdminVue></MenuAdminVue>
        <div class="elements-grid">
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
import TablaDatosVue from '@/components/admin/TablaDatos.vue';
import FormProyectoVue from '@/components/admin/FormProyecto.vue';


</script>

<style>
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
    margin-left: 200px;
    width: calc(100% - 200px);
    padding: 2rem;
    display: grid;
    justify-content: center;
    align-self: start;
    align-items: start;
    gap: 2rem;
    grid-template-columns: auto auto;
}
</style>