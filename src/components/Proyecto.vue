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
        <button @click="handleModal(datos.almacen_imagenes); posicion = index; almImg = store.datos_proyecto[posicion].almacen_imagenes"> Informacion </button>
      </span>
    </article>

    <!-- Modal -->

    <!-- <teleport to="#modal">
      <transition name="modal">
        <div class="main-desplegable-background" v-if="isModalOpen" @click.self="isModalOpen = false; modalCargado = false">
          <div v-if="modalCargado" class="desplegable-info" ref="modal">
            <span class="cerrar-btn" @click="isModalOpen = false; modalCargado= false">
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
                <img v-for="(imagen, index) in listaImagenes" :src="imagen" >
                <font-awesome-icon :icon="['fa', 'circle-chevron-right']"></font-awesome-icon>
              </div>
              <div class="posicion">
                <font-awesome-icon :icon="['fa', 'circle']"></font-awesome-icon>
                <font-awesome-icon :icon="['fa', 'circle']"></font-awesome-icon>
                <font-awesome-icon :icon="['fa', 'circle']"></font-awesome-icon>
              </div>
            </div>
          </div>

          <SkeletonModalProyecto v-else="modalCargado"></SkeletonModalProyecto>
        </div>

      </transition>
    </teleport> -->


  </div>
    <SkeletonProyecto v-else="loading"></SkeletonProyecto>
</template>

<script setup>
import { ref } from "vue";
import SkeletonProyecto from "@/components/SkeletonProyecto.vue";
import SkeletonModalProyecto from "@/components/SkeletonModalProyecto.vue";
import { useStoreProyectos } from "@/store/proyectos";
import { obtenerColeccionImagenes, obtenerImagen } from "@/hook/firebase.storage";


require("@/assets/css/proyecto.css");


// Ventana modal
const isModalOpen = ref(false);
const store = useStoreProyectos()
const loading = ref(false);
const uid = ref('');
const posicion = 0;
const almImg = ref('')

// Muestra el modal del proyecto, y carga su imagen correspondiente

const modalCargado = ref(false)
const listaImagenes = ref([]);

const handleModal = async (url) => {
  isModalOpen.value = true;
  try {
    uid.value = await url;
    listaImagenes.value =  await obtenerColeccionImagenes(uid.value);
    modalCargado.value = true;

    console.log(listaImagenes)

  } catch (error) {
    console.log(error)
  }

}
store.bajarDatosProyecto("martin-proyectos")
  .then(() => { loading.value = true })
  .catch(error => console.log(error));


// Mostrar enlace a otra web
const linkDownload = (link) => {
  window.open(link, '_blank')
  console.log(link)
}
</script>



