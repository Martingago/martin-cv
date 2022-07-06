<template>
    <div v-if="imagenesCargadas" class="circle-container">
        <div class="imagen-container" v-for="(imagenes, index) in useStore.imagenesLenguajes" :key="index">
            <img @mouseover="addAnimation" @mouseout="removeAnimation" class="img-tecnologia" :src="imagenes"
                alt="Imagen de una de las tecnologias que desempeño">
            <img class="img-background" src="@/assets/img/bubble.png" alt="imagen burbuja">
        </div>
        <img class="img-centrada" src="@/assets/img/imagen-sobremi.png" alt="persona sentada escritorio">
    </div>


</template>

<script setup>
import { ref } from 'vue';
import { useStorePerfilCv } from '@/store/cv/dataCv.user';
require("@/assets/css/componentes/circle-images.css");

const imagenesCargadas = ref(false)

const useStore = useStorePerfilCv()

useStore.setImagenes("lenguajes-programacion");
(async ()=>{
  await  useStore.setImagenes("lenguajes-programacion");
  imagenesCargadas.value = true;
})();


const addAnimation = e => {
    e.target.classList.add("animacion-lenguajes")
}
const removeAnimation = e => {
    setTimeout(() => {
        e.target.classList.remove("animacion-lenguajes")
    }, 1000);
}



</script>

