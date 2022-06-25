<template>
    <div v-if="cerrarModal" class="main-desplegable-background" @click.self="cerrarModal = false">
        <article v-if="cargando" class="desplegable-info">
            <span class="cerrar-btn" @click="cerrarModal = false">
                <font-awesome-icon :icon="['fa', 'circle-xmark']"></font-awesome-icon>
            </span>
            <h3>{{ titulo_proyecto }}</h3>

            <div class="modulo-informacion-proyecto">
                <nav class="informacion-proyecto-selector">
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

            <div class="proyecto-carrousel">
                <div class="carrousel-imagenes">
                    <font-awesome-icon @click="posicion--; limitar()" :icon="['fa', 'circle-chevron-left']">
                    </font-awesome-icon>
                    <div class="image-carrusel" v-for="(imagen, index) in imagenes" :key="index"
                        v-show="index == posicion" :style="`background-image:url(${imagen})`"> </div>
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
        </article>
        <SkeletonModalProyectoVue v-else="cargando"></SkeletonModalProyectoVue>

    </div>


</template>
<script setup>
import SkeletonModalProyectoVue from "./SkeletonModalProyecto.vue";
import { ref } from "vue";
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
        default: ["Primero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis  labore, incidunt ullam doloremque quibusdam blanditiis voluptatum, facilis necessitatibus ratione assumenda soluta eum. nihil, oluptate praesentium vero atque laboriosam est cum magnam, officiis soluta magni culpa, omnis dolorem. Dolorem?Primero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis  labore, incidunt ullam doloremque quibusdam blanditiis voluptatum, facilis necessitatibus ratione assumenda soluta eum. nihil, oluptate praesentium vero atque laboriosam est cum magnam, officiis soluta magni culpa, omnis dolorem. Dolorem?Primero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis  labore, incidunt ullam doloremque quibusdam nihil, oluptate praesentium vero atque laboriosam est cum magnam, officiis soluta magni culpa, omnis dolorem. Dolorem?Primero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis  labore, incidunt ullam doloremque quibusdam blanditiis voluptatum, facilis necessitatibus ratione assumenda soluta eum. nihil, oluptate praesentium vero atque laboriosam est cum magnam, officiis soluta magni culpa, omnis dolorem. Dolorem?Primero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis  labore, incidunt ullam doloremque quibusdam nihil, oluptate praesentium vero atque laboriosam est cum magnam, officiis soluta magni culpa, omnis dolorem. Dolorem?Primero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis  labore, incidunt ullam doloremque quibusdam blanditiis voluptatum, facilis necessitatibus ratione assumenda soluta eum. nihil, oluptate praesentium vero atque laboriosam est cum magnam, officiis soluta magni culpa, omnis dolorem. Dolorem?Primero Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis  labore, incidunt ullam doloremque quibusdam ",
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

    imagenes: {
        type: Array,
        default: ["https://firebasestorage.googleapis.com/v0/b/dfdd-227d8.appspot.com/o/Default%2Fimagen-default.jpg?alt=media&token=aaffd26b-ce22-4d59-a175-fef6d133a19f",
            "https://firebasestorage.googleapis.com/v0/b/dfdd-227d8.appspot.com/o/lenguajes-programacion%2Fhtml.png?alt=media&token=e06a6f1e-8c03-46b2-aa59-ddb821c76bfd"],
    }
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
