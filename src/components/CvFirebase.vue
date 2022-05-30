
<template>
<div class="cv-main-section">

    <section class="personal-info">
      <div class="personal-description">
        <h2>Curriculum</h2>
        <h3></h3>
        <p></p>
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
        <p class="telephone"></p>
        <p class="email"></p>
      </div>
    </section>

    <hr />

    <section class="experience">
      <h2>Experiencia laboral</h2>
      <div class="cv-description">
        <div class="description-data">
          <h4 class="position">{{data.formacion}}</h4>
          <p class="company">{{data.lugar}}</p>
          <p class="description">{{data.descripcion}}</p>
          <p class="when">{{data.fechaInicio}}{{data.fechaFin}}</p>
        </div>
        <div class="description-responsabilities">
          <span class="responsability">
            <font-awesome-icon :icon="['fa', 'circle']"></font-awesome-icon>
            <p></p>
          </span>
        </div>
      </div>
    </section>

    <hr />

    <section class="formacion">
      <h2>Formación</h2>
      <div class="cv-description">
        
          <h4 class="position">{{data.formacion}}</h4>
          <p class="company">{{data.lugar}}</p>
          <p class="when">{{data.fechaInicio}}{{}}</p>
        
      </div>
    </section>

</div>
</template>

<script setup>
import {ref} from 'vue'
import { db } from '@/hook/firebase.config';
import { collection,getDocs } from 'firebase/firestore';
require('@/assets/css/cv.css');

const data = ref({})

const leerDatos = async() => {
  const querySnapshot = await getDocs(collection(db, "formacion"));
querySnapshot.forEach((doc) => {
   data.value = doc.data();
   
});
}

leerDatos();
  
</script>
