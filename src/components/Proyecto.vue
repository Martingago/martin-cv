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
        <button @click="handleModal(datos.imagen_url); posicion = index; almImg = store.datos_proyecto[posicion].almacen_imagenes"> Informacion </button>
      </span>
    </article>

    <!-- Modal -->

    <teleport to="#modal">
      <transition name="modal">
        <div class="main-desplegable-background" v-if="isModalOpen" @click.self="isModalOpen = false">
          <div class="desplegable-info" ref="modal">
            <span class="cerrar-btn" @click="isModalOpen = false">
              <font-awesome-icon :icon="['fa', 'circle-xmark']"></font-awesome-icon>
            </span>
            <h3>{{ store.datos_proyecto[posicion].nombre}}</h3>

            <span class="info-proyect">
              <p>{{ store.datos_proyecto[posicion].descripcion }}</p>
              <a @click="linkDownload(store.datos_proyecto[posicion].url)">Visitar sitio</a>
            </span>

            <div class="proyecto-carrousel">
              <div class="carrousel-imagenes">
                <font-awesome-icon :icon="['fa', 'circle-chevron-left']"></font-awesome-icon>
                <img v-for="(imagen, index) in carruselImagenes" :key="index" :src="imagen">
                <font-awesome-icon :icon="['fa', 'circle-chevron-right']"></font-awesome-icon>
              </div>
              <div class="posicion">
                <font-awesome-icon :icon="['fa', 'circle']"></font-awesome-icon>
                <font-awesome-icon :icon="['fa', 'circle']"></font-awesome-icon>
                <font-awesome-icon :icon="['fa', 'circle']"></font-awesome-icon>
              </div>
            </div>

          </div>
        </div>
      </transition>
    </teleport>

  </div>
  <div v-else="loading">
    <SkeletonProyecto></SkeletonProyecto>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SkeletonProyecto from "@/components/SkeletonProyecto.vue";
import { useStoreProyectos } from "@/store/proyectos";
import { downloadURL } from "@/hook/firebase.storage";
import { cargarImagenes} from "@/hook/firebase.storage";
require("@/assets/css/proyecto.css");


// Ventana modal
const isModalOpen = ref(false);
const store = useStoreProyectos()
const loading = ref(false);
const uid = ref('');
const posicion = 0;
const almImg = ref('')
let imagen = ref({})

// Muestra el modal del proyecto, y carga su imagen correspondiente
const handleModal = async (url) => {
  isModalOpen.value = true;
  try {
    uid.value = await downloadURL(url);
  } catch (error) {
    console.log(error)
  }

}
store.setDatosProyecto()
  .then(() => { loading.value = true })
  .catch(error => console.log(error));


// Listado de imagenes del modal --- carrusel
const storeImagenes = cargarImagenes();
const carruselImagenes = ref([]);
const cargarArray =  async () => {
  console.log(almImg._value)
  carruselImagenes.value = await cargarImagenes(`${almImg._value}`)
   
}


// Mostrar enlace a otra web
const linkDownload = (link) => {
  window.open(link, '_blank')
  console.log(link)
}
</script>



