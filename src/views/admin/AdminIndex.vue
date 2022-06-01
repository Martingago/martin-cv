<template>
<div>
    <MenuAdminVue></MenuAdminVue>
    <FormLaboralVue></FormLaboralVue>
    <FormLaboralVue></FormLaboralVue>
    <FormLaboralVue></FormLaboralVue>
    <FormLaboralVue></FormLaboralVue>
    
</div>

</template>
<script setup>
import FormLaboralVue from '@/components/admin/FormLaboral.vue';
import MenuAdminVue from '@/components/admin/MenuAdmin.vue';
</script>

<style>

body{
    background: rgb(238,238,238);
background: linear-gradient(137deg, rgba(238,238,238,1) 22%, rgba(200,200,200,1) 88%);
}
.header{
    display: none;
}
</style>