<template>
  <div class="aboutme-skills">
      <article class="skills-block">
        <font-awesome-icon :icon="['fa', 'code']"></font-awesome-icon>
        <h4>{{titulo}}</h4>
        <p>
          {{parrafo}}
        </p>
      </article>
      <article class="skills-block">
        <font-awesome-icon :icon="['fa', 'pen']"></font-awesome-icon>
        <h4>{{titulo}}</h4>
        <p>
          {{parrafo}}
        </p>
      </article>
      <article class="skills-block">
        <font-awesome-icon :icon="['fa', 'mug-hot']"></font-awesome-icon>
        <h4>{{titulo}}</h4>
        <p>
         {{parrafo}}
        </p>
      </article>
    </div>
</template>

<script setup>
require('@/assets/css/barra-datos.css')
const props = defineProps({
  titulo: {
      type: String,
      default: "tittle",
  },
  parrafo: {
      type: String,
      default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque vero laboriosam esse ullam similique ratione, impedit provident accusantium autem."
  }
  
})
</script>
