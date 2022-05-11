<template>
  <div>
    <Navegador></Navegador>
   <router-view/>
   <Cv></Cv>
  </div>
</template>

<style>

</style>

<script setup>
import Cv from "@/components/Cv.vue";
import Navegador from "@/components/Navegador.vue";
require("@/assets/reset.css");
require("@/assets/app.css")

</script>

