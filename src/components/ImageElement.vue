<template>
  <div class="section-image">
    <img src="@/assets/img/imagen-sobremi.png" alt="imagen mia" />
  </div>
</template>

<script setup>

</script>

<style scoped>
.section-image {
  display: flex;
  width: 100%;
  min-width: 350px;
  max-width: 600px;
  justify-content: center;
  align-content: center;
  margin: auto;
}

.section-image img {
  display: flex;
  width: 100%;
}
@media screen  and (max-width:650px){
  .section-image img{
    width: 90%;
  }
}
</style>