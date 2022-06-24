<template>
    <div v-if="cerrarModal" 
    class="main-desplegable-background">
        <article v-if="cargando" class="desplegable-info">
            <span class="cerrar-btn" @click="cerrarModal = false">
                <font-awesome-icon :icon="['fa', 'circle-xmark']"></font-awesome-icon>
            </span>
            <h3>{{titulo}}</h3>
            <span class="info-proyect">
                <p>{{descripcion}}</p>
                <a class="btn-visitar" :href="enlace" target="_blank">Visitar sitio</a>
                
            </span>

            <div class="proyecto-carrousel">
                <div class="carrousel-imagenes">
                    <font-awesome-icon @click="restarPosicion()" :icon="['fa', 'circle-chevron-left']"></font-awesome-icon>
                    <div class="image-carrusel" v-for="(imagen, index) in imagenes" :key="index" :style="`background-image:url(${imagen})`"> </div>
                    <font-awesome-icon @click="sumarPosicion()" :icon="['fa', 'circle-chevron-right']"></font-awesome-icon>
                </div>
                <div class="posicion">
                    <a class="posicion-carrusel" href="#" v-for="(n, index) in imagenes.length" :key="n" @click="moverSlider(n)"><font-awesome-icon  :icon="['fa', 'circle']" ></font-awesome-icon> </a>  
                </div>
            </div>
        </article>
        <SkeletonModalProyectoVue v-else="cargando"></SkeletonModalProyectoVue>
    
    </div>
    
    
</template>
<script setup>
import SkeletonModalProyectoVue from "./SkeletonModalProyecto.vue";
import { useStoreProyectos } from "@/store/proyectos";
require("@/assets/css/modal-window.css");

const props = defineProps({
    cerrarModal: {
        type: Boolean,
        default: true
    },
    titulo: {
        type: String,
        default: "Titulo proyecto"
    },
    descripcion: {
        type: String,
        default: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis  labore, incidunt ullam doloremque quibusdam blanditiis voluptatum, facilis necessitatibus ratione assumenda soluta eum. nihil, oluptate praesentium vero atque laboriosam est cum magnam, officiis soluta magni culpa, omnis dolorem. Dolorem?"
    },
    enlace: {
        type: String,
        default: "https://www.youtube.com/watch?v=GdWrYfDfqRE"

    },
    cargando: {
        type: Boolean,
        default: true
    },
    imagenes: {
        type: Array,
        default: ["https://firebasestorage.googleapis.com/v0/b/dfdd-227d8.appspot.com/o/Default%2Fimagen-default.jpg?alt=media&token=aaffd26b-ce22-4d59-a175-fef6d133a19f",
        "https://firebasestorage.googleapis.com/v0/b/dfdd-227d8.appspot.com/o/Default%2Fimagen-default.jpg?alt=media&token=aaffd26b-ce22-4d59-a175-fef6d133a19f",
        "https://firebasestorage.googleapis.com/v0/b/dfdd-227d8.appspot.com/o/Default%2Fimagen-default.jpg?alt=media&token=aaffd26b-ce22-4d59-a175-fef6d133a19f"],
    }
})

const moverSlider = (n) => {
console.log(n)
}


</script>
