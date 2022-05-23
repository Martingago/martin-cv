<template>
        <div class="titulo-inicio">
            <h1 @mouseover="addAnimation" @mouseout="removeAnimation">
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

</template>

<script setup>

const addAnimation = e => {
    if (e.target.className === 'letter') {
        e.target.classList.add("animacion")
    }
}
const removeAnimation = e => {
    setTimeout(() => {
        e.target.classList.remove("animacion")
    }, 1000); 
}

</script>

<style scoped>

.titulo-inicio {
    width: max-content;
    user-select: none;
    overflow: hidden;
}
.letter {
    display: inline-block;
    font-size: clamp(2.5rem, 15vw, 5rem);
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
    margin: auto;
    user-select: none;
}

.animacion {
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
    100% {
        transform: rotateY(0deg)
    }
}

@media screen and (max-width:1250px) {

    
    .titulo-inicio .letter,
    .titulo-inicio .signo {
        font-size: clamp(2rem, 5vw, 4rem);
    }
}

@media screen  and (max-width: 500px){
    
    .titulo-inicio .letter{
        font-size: clamp(1.4rem, 5vw, 3rem);
        padding: .1rem;
        margin: .1rem;
    }

}
</style>