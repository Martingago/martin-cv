<template>
    <div v-if="cerrarModal" class="main-desplegable-background" @click.self="cerrarModal = false">
        <article v-if="cargando" class="desplegable-info">
            <span class="cerrar-btn" @click="cerrarModal = false">
                <font-awesome-icon :icon="['fa', 'circle-xmark']"></font-awesome-icon>
            </span>
            <h3>{{ titulo_proyecto }}</h3>

            <div class="modulo-informacion-proyecto">
                <nav class="informacion-proyecto-selector">
                    <a href="#" class="proyecto-selector-btn selector-btn-images">Previsualizar</a>
                    <a href="#" class="proyecto-selector-btn" @click="mostrarDatos(index)"
                        v-for="(titulo, index) in titulo_descripcion" :key="index">{{ titulo }}</a>
                </nav>

                <p class="informacion-proyecto" v-for="(descripcion, index) in informacion_descripcion" :key="index"
                    v-show="index == posicionDatos">
                    {{ descripcion }}</p>
                <span class="btn-proyecto-info">
                    <a class="btn-visitar" :href="enlace" target="_blank">Ver proyecto</a>
                    <a class="btn-visitar" :href="codigo_fuente" target="_blank">Github</a>
                </span>
            </div>

            <Carrusel></Carrusel>
        </article>
        <SkeletonModalProyectoVue v-else="cargando"></SkeletonModalProyectoVue>

    </div>


</template>
<script setup>
import SkeletonModalProyectoVue from "./SkeletonModalProyecto.vue";
import { ref } from "vue";
import Carrusel from "./Carrusel.vue";
require("@/assets/css/modal-window.css");

const props = defineProps({
    cerrarModal: {
        type: Boolean,
        default: true
    },
    cargando: {
        type: Boolean,
        default: true
    },
    titulo_proyecto: {
        type: String,
        default: "Titulo proyecto"
    },
    titulo_descripcion: {
        type: Array,
        default: [
            "Descripcion", "Desarrollo", "Conclusiones"
        ]
    },
    informacion_descripcion: {
        type: Array,
        default: ["Primero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis  labore, incidunt ullam doloremque quibusdam blanditiis voluptatum, facilis necessitatibus ratione assumenda soluta eum. nihil, oluptate praesentium vero atque laboriosam est cum magnam, officiis soluta magni culpa, omnis dolorem. Dolorem?Primero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis  labore, incidunt ullam doloremque quibusdam blanditiis voluptatum, facilis necessitatibus ratione assumenda soluta eum. nihil, oluptate praesentium vero atque laboriosam est cum magnam, officiis soluta magni culpa",
            "Segundo Incidunt ullam doloremque quibusdam blanditiis voluptatum, facilis necessitatibus ratione assumenda soluta eum. nihil, oluptate praesentium vero atque laboriosam est cum magnam, officiis soluta magni culpa, omnis dolorem. Dolorem?",
            "Tercero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis  labore, incidunt ullam doloremque quibusdam blanditiis voluptatum, facilis necessitatibus ratione assumenda soluta eum. nihil"]
    },
    enlace: {
        type: String,
        default: "https://www.youtube.com/watch?v=GdWrYfDfqRE"
    },
    codigo_fuente: {
        type: String,
        default: "https://github.com/Martingago"
    },

})

// Mostrar datos
let posicionDatos = ref(0)
const mostrarDatos = (i) => {
    posicionDatos.value = i;
}


let posicion = ref(0)
const moverSlider = (i) => {
    posicion.value = i - 1;
    console.log("posicionado en", posicion.value)
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
