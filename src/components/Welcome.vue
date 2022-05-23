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
                <span class="signo">.</span>
            </h1>
        </div>

</template>

<script setup>
require('@/assets/css/welcome.css')

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
