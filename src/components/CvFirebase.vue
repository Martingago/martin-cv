
<template>
  <div class="cv-main-section" v-if="loader">
    <section class="personal-info" v-for="(datosPersonales, index) in store.datosPersonales">
      <div class="personal-description">
        <h2>{{datosPersonales.nombre}} {{datosPersonales.primer_apellido}} {{datosPersonales.segundo_apellido}}</h2>
        <h3>{{ datosPersonales.descripcion_breve }}</h3>
        <p>{{ datosPersonales.descripcion }}</p>
        <div class="languages">
          <img v-for="(imagen, index) in store.imagenesLenguajes" :key="index" :src="imagen">
        </div>
      </div>
      <div class="profile-img">
        <img src="../assets/img/profile.png" alt="foto mia" />
      </div>
      <div class="contact-info">
        <p class="telephone">{{datosPersonales.telefono }}</p>
        <p class="email">{{datosPersonales.email }}</p>
      </div>
    </section>

    <hr />

    <section class="experience">
      <h2>Experiencia laboral</h2>
      <div class="cv-description" v-for="(experiencia, index) in store.experiencia" :key="index">
        <div class="description-data">
          <h4 class="position">{{ experiencia.puesto }}</h4>
          <p class="company">{{ experiencia.lugar_trabajo }}</p>
          <p class="description">{{ experiencia.contrato }}</p>
          <p class="when">
            {{experiencia.fecha_inicio }} <br />
            {{experiencia.fecha_fin }}
          </p>
        </div>
        <div class="description-responsabilities">
          <span class="responsability" v-for="(responsabilidades, index) in experiencia.responsabilidades" :key="index">
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
import {ref } from "vue";
import { useStorePerfilCv } from "@/store/cv/dataCv.user";
import { getFecha } from "@/hook/librerias";
import SkeletonCvVue from "./SkeletonCv.vue";
require("@/assets/css/cv.css");

const loader = ref(false);
const store = useStorePerfilCv();

// Cargamos datos
store.bajarDatosExperiencia();
store.setFormacion();
store.setDatosPersonales();

store.setImagenes("lenguajes-programacion")
.then(() => { loader.value = true })
  .catch(error => console.log(error));

</script>
