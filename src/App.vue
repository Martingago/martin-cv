<template>
  <Navegador></Navegador>
  <router-view />
</template>

<style>
body {
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background: rgb(255, 164, 5);
  background: linear-gradient(324deg, rgba(255, 164, 5, 1) 0%, rgba(26, 251, 252, 1) 100%);
}

#app {
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr;
}
</style>



<script setup>
import Navegador from "@/components/Navegador.vue";
require("@/assets/reset.css");
require("@/assets/app.css");
</script>

