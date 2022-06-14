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
    <article
      class="block-proyecto" v-for="(datos,index) in store.datos_proyecto" v-bind:key="index">
      <h3>{{datos.nombre}}</h3>
      <p>{{datos.descripcion_breve }}</p>
      <span class="btn-proyecto">
        <button @click="isModalOpen = true; posicion = index"> Informacion </button>
      </span>
    </article>

    <!-- Modal -->
   
    
      <transition name="modal">
        <div
          class="main-desplegable-background"
          v-if="isModalOpen"
          @click.self="isModalOpen = false"
        >
          <div class="desplegable-info" ref="modal">
            <span class="cerrar-btn" @click="isModalOpen = false">
              <font-awesome-icon
                :icon="['fa', 'circle-xmark']"
              ></font-awesome-icon>
            </span>
            <h3>{{store.datos_proyecto[posicion].nombre}}</h3>
            <span class="info-proyect">
              <p>{{store.datos_proyecto[posicion].descripcion}}</p>
              <img :src="imagen(store.datos_proyecto[posicion].imagen_url)" alt="imagen proyecto" />
            </span>
          </div>
        </div>
      </transition>
    
  </div>
  <div v-else="loading">
      <SkeletonProyecto></SkeletonProyecto>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SkeletonProyecto from "@/components/SkeletonProyecto.vue";
import {useStoreProyectos} from "@/store/proyectos";
require("@/assets/css/proyecto.css");

const store = useStoreProyectos()

store.setDatosProyecto()

const posicion = 0;


const loading = ref(true);
// Ventana modal
const isModalOpen = ref(false);
</script>



