
<template>
  <div class="cv-main-section" v-if="loading">
    <section class="personal-info">
      <div class="personal-description">
        <h2>{{ data.perfil.firstName}} {{ data.perfil.secondName }}</h2>
        <h3>{{data.perfil.descripcion}}</h3>
        <p>{{data.perfil.about}}</p>
        <div class="languages">
          <img src="../assets/img/html.png" alt="icono-language-programacion">
          <img src="../assets/img/css-3.png" alt="icono-language-programacion">
          <img src="../assets/img/java-script.png" alt="icono-language-programacion">
          <img src="../assets/img/github.png" alt="icono-language-programacion">
          <img src="../assets/img/vue.png" alt="icono-language-programacion">
        </div>
      </div>
      <div class="profile-img">
        <img src="../assets/img/profile.png" alt="foto mia" />
      </div>
      <div class="contact-info">
        <p class="telephone">{{data.contacto.telephone}}</p>
        <p class="email">{{data.contacto.email}}</p>
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
          <i class="fa-solid fa-caret-right"></i><p>Formación en los lenguajes de HTML, CSS, y JS. Aprendizaje en el uso del Framework de VUE, adaptación a  trabajar en grupos de trabajo utilizando Github. Aprendizaje en Bases de datos (MySQL) y finalizando con el desarrollo de una aplicacion web</p>
        </div>
      </div>

      <div class="experience-description">
        <div class="description-data">
          <h4 class="position">Contrato de prácticas</h4>
          <p class="company">Comusys</p>
          <p class="when">Octubre 2020 - Diciembre 2020</p>
          <p class="description">{{data.experiencia.Actual.formacion}}</p>
        </div>
        <div class="description-responsabilities">
          <i class="fa-solid fa-caret-right"></i><p>{{data.experiencia.Actual.responsabilidades.tarea}}</p>
          <i class="fa-solid fa-caret-right"></i><p>{{data.experiencia.Actual.responsabilidades.tarea2}}</p>
          <i class="fa-solid fa-caret-right"></i><p>{{data.experiencia.Actual.responsabilidades.tarea3}}</p>
          <i class="fa-solid fa-caret-right"></i><p>{{data.experiencia.Actual.responsabilidades.tarea4}}</p>
        </div>
      </div>

      <div class="experience-description">
        <div class="description-data">
          <h4 class="position">Contrato de prácticas</h4>
          <p class="company">{{data.experiencia.reciente.lugar}}</p>
          <p class="when"> Abril 2018 - Junio 2018</p>
          <p class="description">{{data.experiencia.reciente.formacion}}</p>
        </div>
        <div class="description-responsabilities">
          <i class="fa-solid fa-caret-right"></i><p>{{data.experiencia.reciente.responsabilidades.tarea}}</p>
          <i class="fa-solid fa-caret-right"></i><p>{{data.experiencia.reciente.responsabilidades.tarea2}}</p>
          <i class="fa-solid fa-caret-right"></i><p>{{data.experiencia.reciente.responsabilidades.tarea3}}</p>
        </div>
      </div>
    </section>

    <hr>

    <section class="experience">
      <h2>Formación</h2>
      <div class="experience-description">
        <div class="description-data">
          <h4>{{data.estudios.Actual.lugar}}</h4>
          <p class="when">Santiago de Compostela, {{data.estudios.Actual.date}}</p>
        </div>
        <div class="description-responsabilities">
          <i class="fa-solid fa-caret-right"></i><p>{{data.estudios.Actual.formacion}}</p>  
        </div>
      </div>
      <div class="experience-description">
        <div class="description-data">
          <h4>{{data.estudios.reciente.lugar}}</h4>
          <p class="when"> Santiago de compostela {{data.estudios.reciente.date}}</p>
        </div>
        <div class="description-responsabilities">
          <i class="fa-solid fa-caret-right"></i><p>{{data.estudios.reciente.formacion}}</p>
        </div>
      </div>
      <div class="experience-description">
        <div class="description-data">
          <h4>{{data.estudios.previo.lugar}}</h4>
          <p class="when">Santiago de Compostela, {{data.estudios.previo.date}}</p>
        </div>
        <div class="description-responsabilities">
          <i class="fa-solid fa-caret-right"></i><p> {{data.estudios.previo.formacion}}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(false);

let data = ref({});
const cargarDatos = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Martingago/lectura-json/main/dataCurriculum.json"
    );
    data.value = await response.json();
    loading.value = true;
    console.log(data);
  } catch (error) {
    console.log(`${error}`);
  }
};
cargarDatos();
</script>

<style scoped>

/* DISEÑO PERFIL */
.cv-main-section {
  margin: auto;
  max-width: 794px;
  width: 90%;
  min-width: 400px;
  background-color: wheat;
  height: 1123px;
  padding: 15px 30px;
}

.personal-info {
  display: grid;
  grid-template-columns: auto 1fr;
  gap:  0 40px;
}
.personal-info .personal-description {
  grid-row: 1/ 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
}
  .personal-description h2{
    font-size: 2rem;
    text-transform: uppercase;
    margin: .5rem 0;
    line-height: 1.5rem;
  }
  .personal-description h3{
    margin: .5rem 0;
    font-size: 1.5;
    text-transform: uppercase;
    line-height: 1rem;
  }
  .personal-description p{
    margin: .5rem 0;
    font-size: 1.2rem;
    line-height: 1rem;
    text-align: justify;

  }
.personal-info .profile-img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1/ 2;
  grid-column: 2 / 3;
  border-radius: 50%;
  border:2px;
}
.contact-info{
  font-weight: 900;
}
  .contact-info .telephone{
    font-size: 1.2rem;
    line-height: 1.2rem;
    padding: 5px 0;
  }
  .contact-info .email{
    font-size: 1rem;
    line-height: 1rem;
    font-style: italic;
  }
.personal-info .languages{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
  .personal-info .languages img{
    width: 50px;
  }

hr{
  width: 90%;
  height: 5px;
  background-color: white;
  border: none;
}

/* DISEÑO EXPERIENCIA */
.experience{
  display: grid;
  grid-template-columns: auto;
  gap: 30px;
}
  .experience h2{
    grid-column: 1/ 2;
  }
.experience-description{
  display: grid;
  grid-template-columns: 40% auto;
  gap: 10px;
}
  .experience-description .description-data{
    display: flex;
    flex-direction: column;
  }
    .description-data .position{
      font-size: 1.2rem;
      line-height: 1.2rem;
      font-weight: 900;
    }
    .description-data .company{
      font-size: 1rem;
      text-decoration: underline;
    }
    .description-data .when{
      font-size: 1rem;
      font-style: italic;
      padding-top:.5rem
    }
    .description-data .description{
      line-height: .9rem;
    }
    
  .experience-description .description-responsabilities{
    display: grid;
    grid-template-columns: auto 1fr;
    text-align: left;
    line-height: 1rem;
    font-size: 1rem;
  }
  .experience-description .description-responsabilities i{
    padding: 0 5px;
    font-size: 1rem;
  }

</style>