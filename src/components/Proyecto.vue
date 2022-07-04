<template>
  <div class="section-proyectos" v-if="loading">
    <div class="proyectos-informacion">
      <h1>PROYECTOS</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
        sunt.
      </p>
      <img src="@/assets/img/profile.png" alt="imagen perfil" />
    </div>
    <!-- Bloques -->
    <article class="block-proyecto" v-for="(datos, index) in store.datos_proyecto" v-bind:key="index">
      <h3>{{ datos.nombre }}</h3>
      <p>{{ datos.descripcion_breve }}</p>
      <span class="btn-proyecto">
        <button @click="handleModal(datos)"> Informacion </button>
      </span>
    </article>

    <!-- Modal -->
    <ModalWindow v-if="isModalOpen"
    :cargando="loadingFicha"
    :titulo_proyecto="datosProyecto.nombre"
    :informacion_descripcion="ArrayDescripciones"
    :enlace="datosProyecto.url"
    :codigo_fuente="datosProyecto.github"
    :imagenes_proyecto="listaImagenes"
    ></ModalWindow>

  </div>
    <SkeletonProyecto v-else="loading"></SkeletonProyecto>
</template>

<script setup>
import { ref } from "vue";
import SkeletonProyecto from "@/components/SkeletonProyecto.vue";
import { useStoreProyectos } from "@/store/proyectos";
import { obtenerColeccionImagenes, obtenerImagen } from "@/hook/firebase.storage";
import ModalWindow from "./ModalWindow.vue";
require("@/assets/css/proyecto.css");



const isModalOpen = ref(false);
const store = useStoreProyectos()
const loading = ref(false);

const posicion = 0;


// Muestra el modal del proyecto, y carga su imagen correspondiente

const datosProyecto = ref({});
const ArrayDescripciones = ref([])
const listaImagenes = ref([]);

const handleModal = async (datos) => {
    cargarDatosProyecto(datos)
    cargarDatosImagenesProyecto(datos)
  isModalOpen.value = true;
  
}
store.bajarDatosProyecto("martin-proyectos")
  .then(() => { loading.value = true })
  .catch(error => console.log(error));


// Mostrar enlace a otra web
const linkDownload = (link) => {
  window.open(link, '_blank')
  console.log(link)
}

/**
 * Funcion que permite cargar la información del proyecto acorde a la solicitud del usuario
 * @param {Objet} datos objeto en el que se incluye TODA la información relacionada con el Proyecto.
 * De las imagenes se obtiene su dirección en firebase. Es necesaria otra función para mostrarlas 
 */
const cargarDatosProyecto = (datos) => {
  datosProyecto.value = {};
  ArrayDescripciones.value = []
  datosProyecto.value = datos
  ArrayDescripciones.value = [datosProyecto.value.descripcion, datosProyecto.value.desarrollo, datosProyecto.value.conclusiones]
}

const uid = ref('');

let loadingFicha = ref(false)
const cargarDatosImagenesProyecto = async (datos) => {
try {
  loadingFicha.value = false
  listaImagenes.value = []
    uid.value =  datos.almacen_imagenes;
    listaImagenes.value =  await obtenerColeccionImagenes(uid.value);
    loadingFicha.value = true;

  } catch (error) {
    console.log(error)
  }
}




</script>



