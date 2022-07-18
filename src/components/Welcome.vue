<template>
    <div class="titulo-inicio">
        <h1 class="h1-tittle" ref="el" @mouseover="addAnimation" @mouseout="removeAnimation">
            <span class="letter">H</span>
            <span class="letter">O</span>
            <span class="letter">L</span>
            <span class="letter">A</span>
            <span class="signo">, </span>
            <span><br></span>
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
            <span class="signo">.</span>
            <span><br></span>
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
            <span class="signo">.</span>
        </h1>
    </div>

</template>

<script setup>





import { ref, onMounted } from 'vue'
require('@/assets/css/welcome.css');

const el = ref()
onMounted(() => {
    animacionLetrasCarga()
})
// Animacion para la entrada de letras
const animacionLetrasCarga = () => {
    // letras y delay de aparición
    const letter = document.querySelector(".h1-tittle").childNodes;
    const delay = 200
    // recorre las letras, les añade animacion
    letter.forEach( (element, index) => {
        setTimeout(() => {
            element.classList.add("display");
        }, delay * index);
    // recorre las letras quitandoles la animación, pero dejando opacidad
        setTimeout(() => {
            element.classList.remove("display");
            element.style.opacity = 1
        }, delay * (index + 4));
    });
}

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
