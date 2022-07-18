<template>
    <div class="contenedor-imagenes" v-if="imagenesCargadas" >
        <div  class="circle-container" :class="{onpause : pause }" >
            <div class="imagen-container"  :class="{onpause : pause }"  v-for="(imagenes, index) in useStore.imagenesLenguajes" :key="index">
                <img @mouseover="addAnimation" @mouseout="removeAnimation" class="img-tecnologia" :src="imagenes"
                    alt="Imagen de una de las tecnologias que desempeño">
                <img class="img-background" :class="{onpause : pause }" src="@/assets/img/bubble.png" alt="imagen burbuja">
            </div>
            <img class="img-centrada" :class="{onpause : pause }" src="@/assets/img/imagen-sobremi.png" alt="persona sentada escritorio">
        </div>
        <button class="btn-pause" @click="pause = !pause">
        <font-awesome-icon v-if="pause" :icon="['fa', 'play']"></font-awesome-icon>
        <font-awesome-icon v-else="pause" :icon="['fa', 'pause']"></font-awesome-icon>
        </button>
    </div>
    <SkeletonCircleImagesVue v-else="imagenesCargadas"></SkeletonCircleImagesVue>
    
</template>

<script setup>
import { ref } from 'vue';
import { useStorePerfilCv } from '@/store/cv/dataCv.user';
import SkeletonCircleImagesVue from './skeleton/SkeletonCircleImages.vue';

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

const pause = ref(false)

</script>

