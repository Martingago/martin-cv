
<template>
  <div class="cv-main-section" v-if="loader">
    <section class="personal-info">
      <div class="personal-description">
        <h2>{{ store.getNombreCompleto }}</h2>
        <h3>{{ store.datosPersonales.descripcion }}</h3>
        <p>{{ store.datosPersonales.about }}</p>
        <div class="languages">
          <img v-for="(imagen, index) in listaDeImagenes" :key="index" :src="imagen">
        </div>
      </div>
      <div class="profile-img">
        <img src="../assets/img/profile.png" alt="foto mia" />
      </div>
      <div class="contact-info">
        <p class="telephone">{{ store.datosPersonales.telefono }}</p>
        <p class="email">{{ store.datosPersonales.email }}</p>
      </div>
    </section>

    <hr />

    <section class="experience">
      <h2>Experiencia laboral</h2>
      <div class="cv-description" v-for="(experiencia, index) in store.experiencia" :key="index">
        <div class="description-data">
          <h4 class="position">{{ experiencia.puesto }}</h4>
          <p class="company">{{ experiencia.lugar }}</p>
          <p class="description">{{ experiencia.formacion }}</p>
          <p class="when">
            {{ getFecha(experiencia.fechaInicio) }} <br />
            {{ getFecha(experiencia.fechaFin) }}
          </p>
        </div>
        <div class="description-responsabilities">
          <span class="responsability" v-for="(responsabilidades, index) in experiencia.experiencia" :key="index">
            <font-awesome-icon :icon="['fa', 'circle']"></font-awesome-icon>
            <p>{{ responsabilidades }}</p>
          </span>
        </div>
      </div>
    </section>

    <hr />

    <section class="formacion">
      <h2>Formación</h2>
      <div class="cv-description" v-for="formacion in store.formaciones" :key="formacion">
        <h4 class="position">{{ formacion.formacion }}</h4>
        <p class="company">{{ formacion.lugar }}</p>
        <p class="when">
          {{ getFecha(formacion.fechaInicio) }} <br />
          {{ getFecha(formacion.fechaFin) }}
        </p>
      </div>
    </section>
  </div>
  <div class="skeleton-loader" v-else="loader">
    <SkeletonCvVue></SkeletonCvVue>
  </div>

</template>

<script setup>
// Librerias
import { reactive, ref } from "vue";
import { useStorePerfilCv } from "@/hook/dataCv.user";
import { getFecha } from "@/hook/librerias";
import SkeletonCvVue from "./SkeletonCv.vue";
// imagenes
import { cargarImagenes} from "@/hook/firebase.storage";
require("@/assets/css/cv.css");

const loader = ref(false)

const listaDeImagenes = ref([]);
(async () => {
  listaDeImagenes.value = await cargarImagenes("lenguajes-programacion")
    loader.value = true;

})()

const store = useStorePerfilCv();
// Cargamos datos
store.setFormacion();
store.setDatosPersonales();
store.setExprerienciaLaboral();

</script>
