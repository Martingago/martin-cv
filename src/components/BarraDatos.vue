<template>
  <div class="aboutme-skills">
      
      <article class="skills-block">
        <font-awesome-icon :icon="['fa', 'mug-hot']"></font-awesome-icon>
        <h4>¿Quién soy?</h4>
        <p>Encantado, soy Martín, y desde el 2021 he descubierto que la programación, pero sobretodo la maquetación y diseño web, es la materia a la que quiero dedicar mi tiempo y esfuerzo. <br>
        Mi forma de ser, me obliga a implicarme en la materia, no quedando satisfecho hasta obtener los resultados deseados.
        </p>
      </article>
      <article class="skills-block">
        <font-awesome-icon :icon="['fa', 'pen']"></font-awesome-icon>
        <h4>Objetivos Personales</h4>
        <p> A nivel personal me gusta asumir nuevos retos que me obliguen a dar mi mejor desempeño. <br>
         Veo la programación  como una herramienta capaz de resolver un problema en forma de Puzzle, y como recompensa, la satisfacción propia de solucionar una necesidad y sentir un progreso personal.
          
        </p>
      </article>
      <article class="skills-block">
        <font-awesome-icon :icon="['fa', 'code']"></font-awesome-icon>
        <h4>Objetivos Profesionales</h4>
        <p>En lo referente a lo profesional, mi objetivo es mejorar mis capacidades como programador: aprender acerca del desarrollo web y el mundo que lo relaciona. <br>
          Ampliar mis conocimientos sobre la programación, estructura web, y en lo que más me apasiona: Diseño y Maquetación web. 
          </p>
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
