
<template>
  <div class="cv-main-section">
    <!-- <pre>
      {{store.curriculum[0]["Fecha fin"] }}
      {{store.cvdatos }}
    </pre> -->
    <section class="personal-info">
      <div class="personal-description">
        <h2>{{store.cvdatos[0].Nombre}} {{store.cvdatos[0].Apellidos}}</h2>
        <h3>{{store.cvdatos[0].Descripcion}}</h3>
        <p>{{store.cvdatos[0].About}}</p>
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
        <p class="telephone">{{ }}</p>
        <p class="email">{{}}</p>
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
          <p class="description">{{}}</p>
        </div>
        <div class="description-responsabilities">
          <i class="fa-solid fa-caret-right"></i>
          <p>{{ }}</p>
          <i class="fa-solid fa-caret-right"></i>
          <p>{{ }}</p>
          <i class="fa-solid fa-caret-right"></i>
          <p>{{ }}</p>
          <i class="fa-solid fa-caret-right"></i>
          <p>{{ }}</p>
        </div>
      </div>

      <div class="experience-description">
        <div class="description-data">
          <h4 class="position">Contrato de prácticas</h4>
          <p class="company">{{ }}</p>
          <p class="when"> Abril 2018 - Junio 2018</p>
          <p class="description">{{  }}</p>
        </div>
        <div class="description-responsabilities">
          <i class="fa-solid fa-caret-right"></i>
          <p>{{  }}</p>
          <i class="fa-solid fa-caret-right"></i>
          <p>{{  }}</p>
          <i class="fa-solid fa-caret-right"></i>
          <p>{{  }}</p>
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
          <p class="company">{{ }}</p>
          <p class="when">{{  }}</p>
        </div>
        <div class="description-responsabilities">
        </div>
      </div>
      <div class="experience-description">
        <div class="description-data">
          <h4 class="position">Ciclo.sup Comercio Internacional</h4>
          <p class="company">{{  }}</p>
          <p class="when">{{  }}</p>
        </div>
        <div class="description-responsabilities">

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import {useStoreDatosPersonales} from "@/store/datosPersonajes.js"
import {ref} from 'vue'
require('@/assets/css/cv.css')

// const loading = ref(false)
const store = useStoreDatosPersonales();
store.setDatosCurriculum()


</script>
