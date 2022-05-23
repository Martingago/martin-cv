<template>
   <div class="aboutme-card">
        <h2>{{titulo}}</h2>
        <p>
          {{parrafo}}
        </p>
        <router-link to="/contacto">{{boton}}</router-link>
      </div>
</template>

<script setup>
const props = defineProps({
  titulo: {
      type: String,
      default: "Soy un desarrollador Front-End. Contratenme, necesito comer",
  },
  parrafo: {
      type: String,
      default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque vero laboriosam esse ullam similique ratione, impedit provident accusantium autem."
  },
  boton: {
      type: String,
      default: "Visitar"
  }
})
</script>

<style scoped>

.aboutme-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 400px;
  max-width: 500px;
  margin: auto;
  padding: 2rem;
}

.aboutme-card h2 {
  padding: 1rem 0;
  font-size: 2.5rem;
  line-height: 2.5rem;
  text-transform: capitalize;
}

.aboutme-card p {
  padding: 1rem 0;
  font-size: var(--textoparrafo);
}

.aboutme-card a {
  width: fit-content;
  margin: 1rem 0;
  text-decoration: none;
  padding: 0.25rem 1rem;
  border-radius: 3px;
  border: 1px solid black;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: white;
  box-shadow: 1px 1px 4px gray;
}
.aboutme-card a:hover{
    animation: bounce-7 2.4s infinite;
}
@keyframes bounce-7 {
        0%   { transform: scale(1,1)}
        10%  { transform: scale(1.1,.9)}
        30%  { transform: scale(.9,1.1); }
        50%  { transform: scale(1.05,.95)}
        57%  { transform: scale(1,1);}
        64%  { transform: scale(1,1)}
        100% { transform: scale(1,1)}
    }

.aboutme-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem;
}

@media screen and (max-width: 900px) {
  .aboutme-card {
    width: 100%;
    max-width: 400px;
    min-width: auto;
    margin: 4rem auto;
    padding: 0.5rem;
  }
  .aboutme-card a{
    margin: auto
  }
  }

</style>