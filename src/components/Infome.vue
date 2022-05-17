<template>
    <section class="aboutme-header">
        <div class="aboutme-info">
            <div class="aboutme-card">
                <h2>Soy un desarrollador Front-End. Contratenme, necesito comer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque vero laboriosam esse ullam
                    similique ratione, impedit provident accusantium autem.</p>
                <router-link to="/contacto">Contactame</router-link>
            </div>
            <div class="aboutme-image">
                <!-- <img src="@/assets/img/profile.png" alt="imagen-perfil"> -->

            </div>
        </div>
        <div class="aboutme-skills">
            <article class="skills-block">
                <i class="fa-solid fa-code"></i>
                <h4>Programacion</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quasi.</p>
            </article>
            <article class="skills-block">
                <i class="fa-solid fa-crop"></i>
                <h4>Diseño</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quasi.</p>
            </article>
            <article class="skills-block">
                <i class="fa-regular fa-heart"></i>
                <h4>Cafe</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quasi.</p>
            </article>
        </div>
    </section>

</template>

<script setup>

</script>

<style scoped>
.aboutme-header {
    width: 100%;
    min-height: calc(100vh - 88px);
    display: grid;
    grid-template-rows: 1fr auto;
    
}

.aboutme-info {
    display: grid;
    grid-template-columns: 50% 50%;
}

.aboutme-card {
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 400px;
    max-width: 500px;
    margin: auto;
    padding: 2rem
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
    padding: .25rem 1rem;
    border-radius: 3px;
    border: 1px solid black;
    color: black;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: white;
    box-shadow: 1px 1px 4px gray;
}

.aboutme-image {
    margin: auto auto 0 auto
}

.aboutme-skills {
    display: grid;
    width: 100%;
    padding: 0 2rem;
    grid-template-columns: repeat(3, auto);
    background-color: var(--colortransparencia);
    justify-content: center;
    -webkit-box-shadow: inset 0px 78px 15px -74px rgba(255,252,255,1);
-moz-box-shadow: inset 0px 78px 15px -74px rgba(255,252,255,1);
box-shadow: inset 0px 78px 15px -74px rgba(255,252,255,1);
}

.skills-block {
    display: flex;
    flex-direction: column;
    min-width: 250px;
    max-width: 400px;
    height: 250px;
    justify-content: center;
    align-items: center;
}
.skills-block:nth-child(2){
    border-right: 4px solid white;
    border-left: 4px solid white;
}

.skills-block i {
    font-size: 2.5rem;
}

.skills-block h4 {
    margin: 0 auto;
    padding: .5rem;
    font-size: 1.2rem;
}

.skills-block p {
    margin: 0 auto;
    padding: .5rem 1rem;
    font-size: 1rem;
}

.skills-block p {
    text-align: center;
}
</style>