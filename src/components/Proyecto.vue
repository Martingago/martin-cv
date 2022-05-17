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
        <button @click="activo = !activo; posicion = index; url= data[posicion].enlace" >Informacion</button>
      </span>
    </article>


    <div class="main-desplegable-info" v-bind:class="{ 'ocultar-info': !activo }">
      <div class="desplegable-info">
        <span class="cerrar-btn" @click="activo = !activo"><i class="fa-solid fa-circle-xmark"></i></span>
        <h3>{{ data[posicion].titulo }} </h3>
        <span class="info-proyect">
          <p>{{ data[posicion].descripcion }}</p>
          <img :src="conseguirImagen(data[posicion].imagen)" alt="imagen proyecto">
        </span>

         <a class="a-style" @click="linkDownload(url)"> Visitar sitio</a>
      </div>
    </div>
  </div>


</template>

<script setup>
  
import { ref } from 'vue';
let activo = ref();
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

//Visitar enlaces
let enlazame = (link) => {
  return link
}

let linkDownload = (url) =>  {
      window.open(url, '_blank') // Se abre una nueva ventana enlace externo
    };

let conseguirImagen = (src) => {
return src
}

</script>

<style scoped>
.section-proyectos {
  position: relative;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  grid-auto-flow: dense;
  max-width: fit-content;
  width: 90%;
  margin: auto;
  padding: 2rem;
  border-radius: 5px;
  gap: 10px;
  background-color: var(--colortransparencia);
}

/* Tarjeta informacion */
.proyectos-informacion {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 300px;
  max-width: auto;
  grid-row: 1 / 3;
  border-radius: 5px;
  padding: 2rem 1rem;
  background-color: var(--colortransparencia);
  transition: all .4s linear;
}

.proyectos-informacion img {
  margin: 0 auto;
  width: 90%;
  max-width: 350px;
  border-radius: 50%;
  text-align: center;
}

/* Tarjeta proyecto */
.block-proyecto {
  display: grid;
  padding: 1rem;
  border-radius: 5px;
  min-width: 300px;
  max-width: auto;
  background-color: var(--colortransparencia);
  box-shadow: inset -2px 0 7px  white;
}

.block-proyecto:nth-child(4) {
  grid-row: span 2;
}

.btn-proyecto {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.btn-proyecto button{
  cursor: pointer;
}
.btn-proyecto button:hover {
  animation: bounce-7 2.4s infinite;
}

/* DESPLEGABLE INFO */

.main-desplegable-info {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: var(--colortransparencia);
  backdrop-filter: blur(3px);
  overflow-y: hidden;
}

.ocultar-info {
  width: 0;
  height: 0;
}

.desplegable-info {
  position: relative;
  display: grid;
  max-width: 700px;
  width: 90%;
  background-color: white;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  gap: 0 20px;
  box-shadow: 4px 4px 10px gray;
}

.cerrar-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .4rem;
  top: 0;
  right: 0;
  font-size: 1.6rem;
  cursor: pointer;
  
}

.desplegable-info h3 {
  grid-column: 1 / 2;
}

.info-proyect {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.desplegable-info p {
  width: 100%;
  text-align: justify;
}

.desplegable-info img {
  margin: auto;
  width: 100%;
  max-width: 320px;
}

.desplegable-info a {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  text-decoration: none;
  padding: .25rem 1rem;
  border-radius: 3px;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  background-color: white;
  box-shadow: 1px 1px 4px gray;
}

.desplegable-info a:hover {
  animation: bounce-7 2.4s infinite;
}

@keyframes bounce-7 {
        0%   { transform: scale(1,1)}
        10%  { transform: scale(1.1,.9)}
        30%  { transform: scale(.9,1.1); }
        50%  { transform: scale(1.05,.95)}
        57%  { transform: scale(1,1);}
        64%  { transform: scale(1,1)}
        100% { transform: scale(1,1)}
    }


</style>

