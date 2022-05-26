
<template>
  <div class="cv-main-section" v-if="loading">

    <section class="personal-info">
      <div class="personal-description">
        <h2>{{ data.perfil.firstName }} {{ data.perfil.secondName }}</h2>
        <h3>{{ data.perfil.descripcion }}</h3>
        <p>{{ data.perfil.about }}</p>
        <div class="languages">
          <img src="../assets/img/html.png" alt="icono-language-programacion" />
          <img src="../assets/img/css-3.png" alt="icono-language-programacion" />
          <img src="../assets/img/java-script.png" alt="icono-language-programacion" />
          <img src="../assets/img/github.png" alt="icono-language-programacion" />
          <img src="../assets/img/git.png" alt="icono-language-programacion" />
          <img src="../assets/img/vue.png" alt="icono-language-programacion" />
        </div>
      </div>
      <div class="profile-img">
        <img src="../assets/img/profile.png" alt="foto mia" />
      </div>
      <div class="contact-info">
        <p class="telephone">{{ data.perfil.telephone }}</p>
        <p class="email">{{ data.perfil.email }}</p>
      </div>
    </section>

    <hr />

    <section class="experience">
      <h2>Experiencia laboral</h2>
      <div class="cv-description" v-for="(experience) in data.laboral.Experiencia">
        <div class="description-data">
          <h4 class="position">{{ experience.puesto }}</h4>
          <p class="company">{{ experience.lugar }}</p>
          <p class="description">{{ experience.formacion }}</p>
          <p class="when">{{ experience.fecha }}</p>
        </div>
        <div class="description-responsabilities">
          <span class="responsability" v-for="(responsabilidad) in experience.responsabilidades">
            <font-awesome-icon :icon="['fa', 'circle']"></font-awesome-icon>
            <p>{{ responsabilidad }}</p>
          </span>
        </div>
      </div>
    </section>

    <hr />

    <section class="formacion">
      <h2>Formación</h2>
      <div class="cv-description" v-for="(estudios) in data.estudios.Formacion">
        
          <h4 class="position">{{ estudios.formacion }}</h4>
          <p class="company">{{ estudios.lugar }}</p>
          <p class="when">{{ estudios.fecha }}</p>
        
      </div>
    </section>
  </div>
  <div v-else="loading">
    <SkeletonCv></SkeletonCv>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SkeletonCv from "@/components/SkeletonCv.vue";

require("@/assets/css/cv.css");
const loading = ref(false);
let data = ref({});
const cargarDatos = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Martingago/lectura-json/main/dataCurriculum.json"
    );
    data.value = await response.json();
    setTimeout(() => {
      loading.value = true;
    }, 500);
  } catch (error) {
    console.log(`${error}`);
  }
};
cargarDatos();
</script>

