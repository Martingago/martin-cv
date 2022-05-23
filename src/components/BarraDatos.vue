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

<style scoped>
.aboutme-skills {
  display: grid;
  width: 100%;
  height: fit-content;
  padding: 0 2rem;
  grid-template-columns: repeat(3, auto);
  background-color: var(--colortransparencia);
  justify-content: center;
  -webkit-box-shadow: inset 0px 78px 15px -74px rgba(255, 252, 255, 1);
  -moz-box-shadow: inset 0px 78px 15px -74px rgba(255, 252, 255, 1);
  box-shadow: inset 0px 78px 15px -74px rgba(255, 252, 255, 1);
}

.skills-block {
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 400px;
  padding: 2rem;
  height: fit-content;
  justify-content: center;
  align-items: center;
}
.skills-block:nth-child(2) {
  border-right: 4px solid white;
  border-left: 4px solid white;
}

.skills-block svg {
  font-size: 2.5rem;
}

.skills-block h4 {
  margin: .5rem auto;
  font-size: 1.2rem;
}

.skills-block p {
  margin: 0 auto;
  font-size: 1rem;
}

.skills-block p {
  text-align: center;
}

@media screen and (max-width: 900px) {

  .aboutme-skills {
    width: auto;
    padding: 1rem;
    gap: 1rem;
    grid-template-columns: auto;
  }
  .skills-block {
    padding: .2rem;
    border-left: 3px solid white;
    border-right: 3px solid white;
  }
}

</style>