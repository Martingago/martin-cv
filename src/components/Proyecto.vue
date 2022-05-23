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

    <article class="block-proyecto" v-for="(proyecto, index) in data" v-bind:key="index">
      <h3>{{ proyecto.titulo }}</h3>
      <p>{{ proyecto.descripcion }}</p>
      <span class="btn-proyecto">
        <button @click="isModalOpen = true; posicion = index; url = data[posicion].enlace">Informacion</button>
      </span>
    </article>

    <teleport to="#modal">
      <transition name="modal">
        <div class="main-desplegable-background" v-if="isModalOpen" @click.self="isModalOpen = false">
          <div class="desplegable-info" ref="modal">
            <span class="cerrar-btn" @click="isModalOpen = false">
              <font-awesome-icon :icon="['fa', 'circle-xmark']"></font-awesome-icon>
            </span>
            <h3>{{ data[posicion].titulo }} </h3>
            <span class="info-proyect">
              <p>{{ data[posicion].descripcion }}</p>
              <img :src="data[posicion].imagen" alt="imagen proyecto">
            </span>

            <a class="a-style" :href="data[posicion].enlace" target="_blank"> Visitar sitio</a>
          </div>
        </div>
      </transition>
    </teleport>
  </div>


</template>

<script setup>
import { ref } from 'vue';
require("@/assets/css/proyecto.css")

const loading = ref(false);
let data = ref({});
let posicion = 1;

// Cargamos datos desde la base de datos
const cargarProyectos = async () => {
  try {
    const response = await fetch("https://raw.githubusercontent.com/Martingago/lectura-json/main/dataProyectos.json");
    data.value = await response.json();
    loading.value = true;
  } catch (error) {
    console.log(`${error}`)
  }
}
cargarProyectos();

// Ventana modal
const isModalOpen = ref(false);

</script>



