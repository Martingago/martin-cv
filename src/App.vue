<template>
  <Navegador></Navegador>
  <router-view />
</template>


<script setup>
import Navegador from "@/components/Navegador.vue";
require("@/assets/css/reset.css");
require("@/assets/css/app.css");
</script>

