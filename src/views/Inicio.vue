<template>
  <div class="section-inicio">
    <Welcome></Welcome>
    <ImageElementVue></ImageElementVue>
    <!-- <CircleImages></CircleImages> -->
  </div>
</template>

<script setup>
import Welcome from "@/components/Welcome.vue";
import ImageElementVue from "@/components/ImageElement.vue";
import CircleImages from "@/components/CircleImages.vue";

</script>


<style scoped>
.section-inicio {
  width: 95vw;
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
}
@media screen and (max-width: 1250px) {
  .section-inicio {
    grid-template-columns: auto;
    gap: 2rem;
  }
  .section-inicio .titulo-inicio{
    margin: auto;
  }
  .section-inicio .section-image{
    max-width: 500px;
  }
}
</style>