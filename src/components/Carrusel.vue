<template>

    <div class="proyecto-carrousel">
        <div class="carrousel-imagenes">
            <font-awesome-icon @click="posicion--; limitar()" :icon="['fa', 'circle-chevron-left']">
            </font-awesome-icon>
            <div class="image-carrousel" v-for="(imagen, index) in imagenes" :key="index" v-show="index == posicion"
                :style="`background-image:url(${imagen})`"> </div>
            <font-awesome-icon @click="posicion++; limitar()" :icon="['fa', 'circle-chevron-right']">
            </font-awesome-icon>
        </div>
        <div class="posicion">
            <a class="posicion-carrusel" href="#" v-for="(i, index) in imagenes.length" :key="i"
                @click="moverSlider(i)">
                <font-awesome-icon :icon="['fa', 'circle']"></font-awesome-icon>
            </a>
        </div>
    </div>

</template>

<script setup>
import { ref } from "vue";
require("@/assets/css/carrusel.css");


const props = defineProps({
    cargando: {
        type: Boolean,
        default: true
    },
    imagenes: {
        type: Array,
        default: ["https://firebasestorage.googleapis.com/v0/b/dfdd-227d8.appspot.com/o/Default%2Fimagen-default.jpg?alt=media&token=aaffd26b-ce22-4d59-a175-fef6d133a19f",
            "https://firebasestorage.googleapis.com/v0/b/dfdd-227d8.appspot.com/o/lenguajes-programacion%2Fhtml.png?alt=media&token=e06a6f1e-8c03-46b2-aa59-ddb821c76bfd"],
    }
})


let posicion = ref(0)
const moverSlider = (i) => {
    posicion.value = i - 1;
    return posicion
}

const limitar = () => {
    if (posicion.value > props.imagenes.length - 1) {
        posicion.value = 0;
    }
    if (posicion.value < 0) {
        posicion.value = props.imagenes.length - 1
    }
}


</script>