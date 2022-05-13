<template>
  <div class="section-proyectos">
    <div class="proyectos-informacion">
      <h1>PROYECTOS</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
        sunt.
      </p>
      <img src="@/assets/img/profile.png" alt="imagen perfil" />
    </div>

    <article class="block-proyecto">
      <h3>Proyecto #3</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button>Informacion</button> <button>Visitar sitio</button></span>
    </article>
    
    <article class="block-proyecto">
      <h3>Proyecto #3</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button>Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto vertical">
      <h3>Proyecto #3</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button>Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #3</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button>Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #3</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button>Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #3</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button>Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #3</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button>Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #3</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button>Informacion</button> <button>Visitar sitio</button></span>
    </article>
    <article class="block-proyecto">
      <h3>Proyecto #3</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque minima
        sit sapiente ex debitis! Voluptatibus consequatur repellat voluptate
        molestiae omnis.
      </p>
      <span class="btn-proyecto"><button>Informacion</button> <button>Visitar sitio</button></span>
    </article>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-proyectos {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px , 1fr));
  grid-auto-flow: dense;
  width: 80%; 
  min-width: 300px;
  margin: auto;
  padding: 2rem;
  border-radius: 5px;
  gap: 10px;
  background-color: var(--colortransparencia);
}

.horizontal{
    grid-column: span 2;
}
.vertical{
    grid-row: span 2;
}
/* Tarjeta informacion */
.proyectos-informacion {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 300px;
  max-width: auto;
  grid-row: 1 / 3;
  border-radius: 5px;
  padding: 2rem 1rem;
  background-color: var(--colortransparencia);
  transition: all .4s linear;
}
.proyectos-informacion img {
  margin: 0 auto;
  border-radius: 50%;
  text-align: center;
}
/* Tarjeta proyecto */
.block-proyecto {
  display: grid;
  padding: 1rem;
  border-radius: 5px;
  min-width: 300px;
  max-width: auto;
  background-color: var(--colortransparencia);
}
    .btn-proyecto{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

@media screen and (max-width: 1080px) {
  .main-section-proyectos {
    grid-template-columns: repeat(2, auto);
  }
}
</style>

