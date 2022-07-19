<template>
  <div class="aboutme-skills">

    <article class="skills-block">
      <font-awesome-icon :icon="['fa', 'mug-hot']"></font-awesome-icon>
      <h4>¿Contactamos?</h4>
      <p>En caso de que lo prefieras podemos contactar por otros medios. <br>¿Que tal a través de mis redes sociales?
        <br> ¿Vía e-mail? ¿número de telefono? <br>Tú decides.
      </p>
    </article>
    <article class="skills-block">
      <font-awesome-icon :icon="['fa', 'pen']"></font-awesome-icon>
      <h4>Datos de contacto</h4>
      <p class="contact-info"><span><font-awesome-icon :icon="['fa', 'phone']"></font-awesome-icon></span> +34 690 670 271</p>
      <p class="contact-info"><span><font-awesome-icon :icon="['fa', 'envelope']"></font-awesome-icon></span> gagochorenmartin@gmail.com</p>
      <nav class="social-btn-nav">
        <ul class="list-social-btn">
          <li><a href="https://www.linkedin.com/in/mart%C3%ADn-gago-chor%C3%A9n-6b1814241/" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
            </a></li>
          <li><a href="https://www.twitch.tv/" target="_blank">
              <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
            </a></li>
        </ul>
      </nav>
    </article>
  </div>

</template>

<script setup>
require('@/assets/css/barra-datos.css')
const props = defineProps({
  titulo: {
    type: Array,
    default: ["titulo 1"],
  },
  parrafo: {
    type: String,
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque vero laboriosam esse ullam similique ratione, impedit provident accusantium autem."
  }

})
</script>
<style scoped>


.contact-info{
  display: grid;
  width: 100%;
  grid-template-columns: 30px 1fr;
  margin-bottom: .25rem;
}
.contact-info span svg{
  font-size: 1.5rem;
}

.social-btn-nav{
  margin-top: 1rem;
}
.list-social-btn{
  width: 100%;
  display: flex;
  gap: .5rem;
}
  .list-social-btn li a svg{
    font-size: 2rem;
  }



@media screen and (min-width:1081px) {
  .skills-block:nth-child(1) {
    border-left: 4px solid white;
    border-right: 2px solid white;
  }

  .skills-block:nth-child(2) {
    border-left: 2px solid white;
  }
}
</style>
