<template>

    <div class="header" v-bind:class="{ 'movilMenu': isActive }">
        <nav class="main-menu-section">
            <ul class="navigation-index">
                <li>
                    <div @click="isActive = !isActive"><font-awesome-icon :icon="['fa', 'bars']"></font-awesome-icon></div>
                </li>
            </ul>
            <ul class="navegation-menu">
                <li>
                    <router-link to="/inicio">Inicio</router-link>
                </li>
                <li>
                    <router-link to="/sobre-mi">Sobre mi</router-link>
                </li>
                <li>
                    <router-link to="/proyectos">Proyectos</router-link>
                </li>
                <li>
                    <router-link to="/curriculum">Currículum</router-link>
                </li>
                <li>
                    <router-link to="/contacto">Contacto</router-link>
                </li>
            </ul>
        </nav>
        <nav class="main-menu-subfooter">
            <ul class="navegation-social">
                <li>
                    <a class="a-style" @click="linkDownload(socialMedia[0]);isActive = !isActive "><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon></a>
                </li>
                <li>
                    <a class="a-style" @click="linkDownload(socialMedia[1]); isActive = !isActive"><font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon></a>
                </li>
                <li>
                    <a class="a-style" @click="linkDownload(socialMedia[2]); isActive = !isActive"><font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon></a>
                </li>
            </ul>
        </nav>
    </div>


</template>

<script setup >
import { ref } from 'vue';
require('@/assets/css/navegador.css')

let isActive = ref();
let  socialMedia = ["https://github.com/Martingago", "https://www.google.com/", "https://www.youtube.com/"];
let linkDownload = (url) =>  {
      window.open(url, '_blank') // Se abre una nueva ventana enlace externo
    };

</script>
