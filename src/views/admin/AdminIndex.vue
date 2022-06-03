<template>
    <span class="background-body"></span>
    <MenuAdminVue></MenuAdminVue>
    <div class="elements-grid">
        <div class="formularios">
            <FormLaboralVue></FormLaboralVue>
            <FormExperienciaVue></FormExperienciaVue>
            <FormPerfilVue></FormPerfilVue>
        
        </div>
        <div class="datos">
            <TablaDatosVue></TablaDatosVue>
        </div>
    </div>

</template>
<script setup>
import FormExperienciaVue from '@/components/admin/FormExperiencia.vue';
import FormLaboralVue from '@/components/admin/FormLaboral.vue';
import MenuAdminVue from '@/components/admin/MenuAdmin.vue';
import FormPerfilVue from '@/components/admin/FormPerfil.vue';
import TablaDatosVue from '@/components/admin/TablaDatos.vue';

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
    gap: 2rem;
    grid-template-columns: auto 1fr;
}
.formularios{
    display: grid;
    gap: 2rem;
}
</style>