<template>
  <div>
    <Navegador></Navegador>
   <router-view/>
   
  </div>
</template>

<style>
body {
	min-height: 100vh;
	scroll-behavior: smooth;
	text-rendering: optimizeSpeed;
	line-height: 1.5;
	margin-top: 100px !important;
	background: rgb(34,193,195);
	background: linear-gradient(153deg, rgba(34,193,195,1) 0%, rgba(252,175,8,1) 100%);
}

@media screen and (max-width:600px) {
  body{
    margin-top: 50px !important;
    background-color:red !important;
  }
}


</style>



<script setup>
import Navegador from "@/components/Navegador.vue";
import Cv from "./components/Cv.vue";
require("@/assets/reset.css");
require("@/assets/app.css")

</script>

