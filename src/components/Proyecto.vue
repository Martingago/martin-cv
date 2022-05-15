<template>
  <div class="section-proyectos">
    <div class="proyectos-informacion">
      <h1>PROYECTOS</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
        sunt.
      </p>
      <img src="@/assets/img/profile.png" alt="imagen perfil" />
    </div>

    <article class="block-proyecto">
      <h3>Proyecto #1</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button @click="activo = !activo; posicion = 0">Informacion</button> <button>Visitar sitio</button></span>
    </article>

    <article class="block-proyecto">
      <h3>Proyecto #2</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button @click="activo = !activo; posicion = 1">Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto vertical">
      <h3>Proyecto #3</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button @click="activo = !activo; posicion = 2">Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #4</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button @click="activo = !activo; posicion = 3">Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #5</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button @click="activo = !activo; posicion = 4">Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #6</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button @click="activo = !activo; posicion = 5">Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #7</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button @click="activo = !activo; posicion = 6">Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #8</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button @click="activo = !activo; posicion = 7">Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #9</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button @click="activo = !activo; posicion = 8">Informacion</button> <button @click="muestrame()">Visitar
          sitio</button></span>
    </article>

  </div>

  <!-- Desplegable de informacion -->

  <div class="main-desplegable-info" v-if="loading" v-bind:class="{ 'ocultar-info': !activo }">
    <div class="desplegable-info">
      <span class="cerrar-btn" @click="activo = !activo"><i class="fa-solid fa-circle-xmark"></i></span>
      <h3>{{data[posicion].titulo}}</h3>
      <span class="info-proyect">
        <p>{{data[posicion].descripcion}}</p>
        <img src="https://picsum.photos/300" alt="imagen proyecto">
      </span>

      <router-link to="">Visitar</router-link>
    </div>
  </div>


</template>

<script setup>
import { ref } from 'vue';

let posicion = 0;
let activo = ref();
const loading = ref(false);
let data = ref();

// Cargamos datos desde la base de datos

const cargarProyectos = async () => {
  try {
    const response = await fetch("https://raw.githubusercontent.com/Martingago/lectura-json/main/dataProyectos.json");
    data.value = await response.json()
    console.log(data.value);
    loading.value = true;

  } catch (error) {
    console.log(`${error}`)
  }

}
cargarProyectos();

</script>

<style scoped>
.section-proyectos {
  position: relative;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  grid-auto-flow: dense;
  width: 80%;
  min-width: 350px;
  margin: auto;
  padding: 2rem;
  border-radius: 5px;
  gap: 10px;
  background-color: var(--colortransparencia);
}

.horizontal {
  grid-column: span 2;
}

.vertical {
  grid-row: span 2;
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
}

.btn-proyecto {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

/* DESPLEGABLE INFO */

.main-desplegable-info {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: rgba(255, 255, 255, .2);
  backdrop-filter: blur(1.5px);
  overflow: hidden;
  transition: width .3s linear;
}

.ocultar-info {
  width: 0;
  height: 0;
}

.desplegable-info {
  position: relative;
  display: grid;
  max-width: 700px;
  width: fit-content;
  background-color: white;
  border-radius: 5px;
  padding: 1rem 2rem;
  gap: 0 20px;
}

.cerrar-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  top: 0;
  right: 0;
  font-size: 1.5rem;
  cursor: pointer;
}

.desplegable-info h3 {
  grid-column: 1 / 2;
}

.info-proyect {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
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
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  text-decoration: none;
  padding: .25rem 1rem;
  border-radius:3px;
  border:1px solid black;
  color: black;
}


@media screen and (max-width: 780px) {
  .section-proyectos .block-proyecto:nth-child(8) {
    position: relative;
  }


}
</style>

