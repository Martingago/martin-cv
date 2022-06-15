<template>
  <div class="main-section-proyectos">
      <Proyecto></Proyecto>
      <div id="modal"></div>
  </div>
</template>

<script setup>
import Proyecto from '@/components/Proyecto.vue';

</script>

<style scoped>
.main-section-proyectos{
  max-width: 1300px;
  width: 95%;
  margin: auto;
}

@media screen and (max-width: 700px) {
  .main-section-proyectos{
    width: 100%;
  }
  
}

</style>