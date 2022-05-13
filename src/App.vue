<template>
      <Navegador></Navegador>
      <router-view />
</template>

<style>
body {
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    153deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(252, 175, 8, 1) 100%
  );
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

