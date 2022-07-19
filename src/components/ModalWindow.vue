<template>
    <div v-if="cerrarModal" class="main-desplegable-background" @click.self="cerrarModal = false">
        <article v-if="cargando" class="desplegable-info">
            <span class="cerrar-btn" @click="cerrarModal = false">
                <font-awesome-icon :icon="['fa', 'circle-xmark']"></font-awesome-icon>
            </span>
            <h3>{{ titulo_proyecto }}</h3>

            <div class="modulo-informacion-proyecto">
                <nav class="informacion-proyecto-selector">
                    <a href="#" ref="button" class="proyecto-selector-btn" @click="mostrarDatos(index)" @mouseenter="activarHover(index)" @mouseleave="desactivarHover(index)"
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
            <Carrusel :imagenes="imagenes_proyecto"></Carrusel>

        </article>
        <SkeletonModalProyectoVue v-else="cargando"></SkeletonModalProyectoVue>

    </div>


</template>
<script setup>
import SkeletonModalProyectoVue from "@/components/skeleton/SkeletonModalProyecto.vue";
import { ref, onUpdated} from "vue";
import Carrusel from "./Carrusel.vue";
require("@/assets/css/modal-window.css");

const props = defineProps({
    cerrarModal: {
        type: Boolean,
        default: true
    },
    cargando: {
        type: Boolean,
        default: false
    },
    titulo_proyecto: {
        type: String,
        default: "Titulo proyecto"
    },
    imagenes_proyecto: {
        type: Array,
        default: []
    },
    titulo_descripcion: {
        type: Array,
        default: [
            "Descripcion", "Desarrollo", "Conclusiones"
        ]
    },
    informacion_descripcion: {
        type: Array,
        default: ["Texto de prueba 01",
            "Texto de prueba 02",
            "texto de prueba 03"]
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

const button = ref();
let posicionDatos = ref(0)
onUpdated(()=> {
    button.value
    if(posicionDatos.value == 0 && button.value[0]) {button.value[0].classList.add("proyecto-btn-active")}

})

// Mostrar datos

const mostrarDatos = (i) => {
    button.value.forEach(element => {
        element.classList.remove("proyecto-btn-active")
    });
    button.value[i].classList.add("proyecto-btn-active")
    posicionDatos.value = i;
}

const activarHover = (index) => {
    if (!button.value[index].classList.contains("proyecto-btn-active")){
        button.value[index].classList.add("proyecto-btn-hover");
    }
}
const desactivarHover = (index) => {
    button.value[index].classList.remove("proyecto-btn-hover")
}

</script>
