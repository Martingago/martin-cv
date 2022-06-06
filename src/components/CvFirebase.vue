
<template>
  <div class="cv-main-section">
    <section class="personal-info">
      <div class="personal-description">
        <h2>{{ store.getNombreCompleto }}</h2>
        <h3>{{ store.datosPersonales.descripcion }}</h3>
        <p>{{ store.datosPersonales.about }}</p>
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
  <div v-if="isLoader">
    {{ datosProfile.datosPersonales.nombre }}
    <div v-if="error">
    {{error.message}}
  </div>
  </div>
  
</template>

<script setup>
// Librerias
import { ref } from "vue";
import { useStorePerfilCv } from "@/perfil";
import { getFecha } from "@/hook/librerias";
import { useStoreProfile } from "@/store/profiles";
require("@/assets/css/cv.css");

// Arrancamos store
const store = useStorePerfilCv();


// Cargamos datos
store.setFormacion();
store.setDatosPersonales();
store.setExprerienciaLaboral();

const datosProfile = useStoreProfile();
const isLoader = ref(false);
const error = ref(false)

const ejecutar = async () => {
  try {
    error.value = false
    await datosProfile.conseguirDatos()
    isLoader.value = true
  } catch (e) {
    console.log("error")
    error.value = true
  }

}

ejecutar()
</script>
