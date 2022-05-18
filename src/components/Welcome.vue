<template>
    <div class="section-inicio">
        <div class="titulo-inicio">
            <h1 @mouseover="addAnimation">
                <span class="letter">H</span>
                <span class="letter">O</span>
                <span class="letter">L</span>
                <span class="letter">A</span>
                <span class="signo">,</span> <br>
                <span class="letter">B</span>
                <span class="letter">I</span>
                <span class="letter">E</span>
                <span class="letter">N</span>
                <span class="letter">V</span>
                <span class="letter">E</span>
                <span class="letter">N</span>
                <span class="letter">I</span>
                <span class="letter">D</span>
                <span class="letter">O</span>
                <span class="signo">.</span> <br>
                <span class="letter">S</span>
                <span class="letter">O</span>
                <span class="letter">Y</span>
                <span class="signo">&nbsp;</span>
                <span class="letter">M</span>
                <span class="letter">A</span>
                <span class="letter">R</span>
                <span class="letter">T</span>
                <span class="letter">I</span>
                <span class="letter">N</span>


            </h1>
        </div>
        <div class="imagen-titulo">
            <img src="@/assets/img/imagen-sobremi.png" alt="">
        </div>


    </div>
</template>

<script setup>


const addAnimation = e => {
    if (e.target.className === 'letter') {
        e.target.classList.toggle("animacion")
    }
}
const removeAnimation = e => {
    if (e.target.className === 'letter')
        e.target.classList.remove("animacion")
}

</script>

<style scoped>
.section-inicio {
    width: 100%;
    min-height: calc(100vh - 88px);
    display: grid;
    grid-template-columns: auto auto;
}

.titulo-inicio {
    margin: auto;
}

.letter {
    display: inline-block;
    font-size: clamp(5rem, 4vw, 7rem);
    font-weight: 900;
    border: 2px solid black;
    border-radius: 5px;
    margin: .2rem;
    padding: .3rem;
}

.signo {
    display: inline-block;
    font-size: clamp(5rem, 4vw, 7rem);

}

.imagen-titulo {
    margin: auto
}

.animacion {
    background-color: red;
    transform: rotateX(3deg);
    animation: flipAnimacion 1s linear;
}

@keyframes flipAnimacion {
    0% {
        transform: rotateY(0deg);
    }

    50% {
        transform: rotateY(180deg);
    }
}

@media screen and (max-width:1250px) {
    .section-inicio {
        grid-template-columns: auto;
    }

    .section-inicio .letter,
    .section-inicio .signo {
        font-size: clamp(1.5rem, 6vw, 7rem);
    }
}

@media screen  and (max-width: 500px){
    .titulo-inicio{
        margin: 4rem auto;
        padding: 16px 5px;
    }
    .section-inicio .letter{
        font-size: 2.3rem;
        padding: .1rem;
        margin: .1rem;
    }
    
}
</style>