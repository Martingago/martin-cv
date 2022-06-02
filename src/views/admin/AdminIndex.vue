<template>
    <span class="background-body"></span>
    <MenuAdminVue></MenuAdminVue>
    <div class="elements-grid">
        <FormLaboralVue></FormLaboralVue>
        <FormLaboralVue></FormLaboralVue>
    </div>

</template>
<script setup>
import FormLaboralVue from '@/components/admin/FormLaboral.vue';
import MenuAdminVue from '@/components/admin/MenuAdmin.vue';
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
    z-index: 0;
}

.header {
    display: none;
}

.elements-grid{
    margin-left: 200px;
    width: calc(100% - 200px);
    padding: 2rem;
    display: grid;
    justify-content: center;
    gap: 2rem;
    grid-template-columns: repeat(2, auto);
}

</style>