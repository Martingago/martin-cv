
<template>
  <div class="cv-main-section" v-if="loading">
    <section class="personal-info">
      <div class="personal-description">
        <h2>{{ data.perfil.firstName }} {{ data.perfil.secondName }}</h2>
        <h3>{{ data.perfil.descripcion }}</h3>
        <p>{{ data.perfil.about }}</p>
        <div class="languages">
          <img src="../assets/img/html.png" alt="icono-language-programacion">
          <img src="../assets/img/css-3.png" alt="icono-language-programacion">
          <img src="../assets/img/java-script.png" alt="icono-language-programacion">
          <img src="../assets/img/github.png" alt="icono-language-programacion">
          <img src="../assets/img/git.png" alt="icono-language-programacion">
          <img src="../assets/img/vue.png" alt="icono-language-programacion">

        </div>
      </div>
      <div class="profile-img">
        <img src="../assets/img/profile.png" alt="foto mia" />
      </div>
      <div class="contact-info">
        <p class="telephone">{{ data.contacto.telephone }}</p>
        <p class="email">{{ data.contacto.email }}</p>
      </div>
    </section>
    <hr>

    <section class="experience">
      <h2>Experiencia laboral</h2>

      <div class="experience-description">
        <div class="description-data">
          <h4 class="position">Desarrollador Front-end</h4>
          <p class="company">Obradoiro: Santiago Sustentable III</p>
          <p class="when">Agosto 2021 - Agosto 2022</p>
          <p class="description">Contrato de formación</p>
        </div>
        <div class="description-responsabilities">
          <i class="fa-solid fa-caret-right"></i>
          <p>Formación en los lenguajes de HTML, CSS, y JS. Aprendizaje en el uso del Framework de VUE, adaptación a
            trabajar en grupos de trabajo utilizando Github. Aprendizaje en Bases de datos (MySQL) y finalizando con el
            desarrollo de una aplicacion web</p>
        </div>
      </div>

      <div class="experience-description">
        <div class="description-data">
          <h4 class="position">Contrato de prácticas</h4>
          <p class="company">Comusys</p>
          <p class="when">Octubre 2020 - Diciembre 2020</p>
          <p class="description">{{ data.experiencia.Actual.formacion }}</p>
        </div>
        <div class="description-responsabilities">
          <i class="fa-solid fa-caret-right"></i>
          <p>{{ data.experiencia.Actual.responsabilidades.tarea }}</p>
          <i class="fa-solid fa-caret-right"></i>
          <p>{{ data.experiencia.Actual.responsabilidades.tarea2 }}</p>
          <i class="fa-solid fa-caret-right"></i>
          <p>{{ data.experiencia.Actual.responsabilidades.tarea3 }}</p>
          <i class="fa-solid fa-caret-right"></i>
          <p>{{ data.experiencia.Actual.responsabilidades.tarea4 }}</p>
        </div>
      </div>

      <div class="experience-description">
        <div class="description-data">
          <h4 class="position">Contrato de prácticas</h4>
          <p class="company">{{ data.experiencia.reciente.lugar }}</p>
          <p class="when"> Abril 2018 - Junio 2018</p>
          <p class="description">{{ data.experiencia.reciente.formacion }}</p>
        </div>
        <div class="description-responsabilities">
          <i class="fa-solid fa-caret-right"></i>
          <p>{{ data.experiencia.reciente.responsabilidades.tarea }}</p>
          <i class="fa-solid fa-caret-right"></i>
          <p>{{ data.experiencia.reciente.responsabilidades.tarea2 }}</p>
          <i class="fa-solid fa-caret-right"></i>
          <p>{{ data.experiencia.reciente.responsabilidades.tarea3 }}</p>
        </div>
      </div>
    </section>

    <hr>

    <section class="formacion">
      <h2>Formación</h2>
      <div class="experience-description">
        <div class="description-data">
          <h4 class="position">Curso DAW</h4>
          <p class="company"> CERSIA empresa</p>
          <p class="when"> Agosto 2021 - Agosto 2022</p>
        </div>
        <div class="description-responsabilities">
        </div>
      </div>
      <div class="experience-description">
        <div class="description-data">
          <h4 class="position">Ciclo.sup Gestión de Ventas </h4>
          <p class="company">{{ data.estudios.reciente.lugar }}</p>
          <p class="when">{{ data.estudios.reciente.date }}</p>
        </div>
        <div class="description-responsabilities">
        </div>
      </div>
      <div class="experience-description">
        <div class="description-data">
          <h4 class="position">Ciclo.sup Comercio Internacional</h4>
          <p class="company">{{ data.estudios.previo.lugar }}</p>
          <p class="when">{{ data.estudios.previo.date }}</p>
        </div>
        <div class="description-responsabilities">

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from "vue";
require('@/assets/css/cv.css')

const loading = ref(false);

let data = ref({});
const cargarDatos = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Martingago/lectura-json/main/dataCurriculum.json"
    );
    data.value = await response.json();
    loading.value = true;
  } catch (error) {
    console.log(`${error}`);
  }
};
cargarDatos();
</script>
