<template>
  <div>
    <!-- <nav>
      <router-link to="/">Sobre</router-link> |
      <router-link to="/about">About</router-link>
      
    </nav> -->
   <Cv></Cv>
   <router-view/>
  </div>
</template>

<style  scoped>

</style>

<script setup>
import Cv from "@/components/Cv.vue";
require("@/assets/reset.css")

</script>

