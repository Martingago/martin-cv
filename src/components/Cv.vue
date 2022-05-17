
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

<style scoped>
/* DISEÑO PERFIL */
.cv-main-section {
  margin: 3rem auto;
  max-width: 794px;
  width: 90%;
  min-width: 400px;
  background-color: var(--colortransparencia);
  height: auto;
  padding: 15px 30px;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 5px 5px 20px white;
}

.personal-info {
  display: grid;
  grid-template-columns: 60% calc(40% - calc(clamp(1rem, 2vw, 6rem)));
  gap: 0 calc(clamp(1rem,2vw, 6rem));
}

.personal-info .personal-description {
  grid-row: 1/ 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
}

.personal-description h2 {
  font-size: var(--textotitulo);
  line-height: var(--textotitulo);
  text-transform: uppercase;
  margin: .5rem 0;
}

.personal-description h3 {
  margin: .5rem 0;
  font-size: var(--textosubtitulo);
  line-height: var(--textosubtitulo);
  text-transform: uppercase;
}

.personal-description p {
  margin: .5rem 0;
  font-size: var(--textoparrafo);
  line-height: var(--textoparrafo);
  text-align: justify;

}

.personal-info .profile-img {
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
}

.contact-info .telephone {
  font-size: var(--textoparrafo);
  line-height: var(--textoparrafo);
  font-weight: 900;
  padding: 5px 0;
}

.contact-info .email {
  font-size: var(--textoreducido);
  line-height: var(--textoreducido);
  font-weight: 900;
  font-style: italic;
}

.personal-info .languages {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.personal-info .languages img {
  width: var(--imagenesparrafo);
}

hr {
  width: 90%;
  height: 5px;
  background-color: white;
  border: none;
}

/* DISEÑO EXPERIENCIA */
.experience {
  display: grid;
  grid-template-columns: auto;
  gap: 30px;
}

.experience h2 {
  grid-column: 1/ 2;
  font-size: var(--textosubtitulo);
}

.experience-description {
  display: grid;
  grid-template-columns: 40% auto;
  gap: 10px;
}

.experience-description .description-data {
  display: flex;
  flex-direction: column;
  font-size: var(--textoparrafo);
  line-height: var(--textoparrafo);
}

.description-data .position {
  font-weight: 900;
}

.description-data .company {
  text-decoration: underline;
}

.description-data .when {
  font-size: var(--textoreducido);
  line-height: var(--textoreducido);
  font-style: italic;
  padding-top: .5rem
}

.experience-description .description-responsabilities {
  display: grid;
  grid-template-columns: auto 1fr;
  text-align: left;
  line-height: var(--textoparrafo);
  font-size: var(--textoparrafo);
}

.experience-description .description-responsabilities i {
  padding: 0 5px;
  font-size: 1rem;
}

/* FORMACION */
.formacion {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px 10px;
}

.formacion h2 {
  grid-column: 1/ 4;
}

.formacion .experience-description {
  grid-template-columns: auto;
  grid-template-rows: auto auto;
}

@media screen and (max-width: 900px) {
  .profile-img{
    display: flex;
    width: auto;
  }
  .experience{
    gap: 20px;
  }
  .experience-description{
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    
  }
    
}

@media screen and (max-width: 600px) {
  .cv-main-section{
    min-width: 200px;
    width: 95%;
    padding: 10px;
    margin:auto

  }
  .personal-info {
    grid-template-columns: auto;
    gap: 20px;
  }
  .personal-info .profile-img{
    width: 60%;
    margin: auto
  }
  .personal-info .contact-info{
    margin: auto;
    font-size: var(--textoparrafo);
  }
  .personal-info .contact-info .email{
    font-size: var(--textoparrafo);
    line-height: var(--textoparrafo);
  }
  .formacion{
    grid-template-columns: 33% 1fr  33%;
    gap: 5px;
    text-align: center;
  }
    .formacion .position, .formacion .company{
      font-size: var(--textoreducido);
      text-align: center;
    }

}

</style>