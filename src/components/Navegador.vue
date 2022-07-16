<template>

    <div class="navegador-componente">
        <div class="header" v-bind:class="{ 'expanded-movile-menu ': isActive }">
            <nav class="main-menu-section">
                <ul class="navigation-index">
                    <li>
                        <button>
                            <font-awesome-icon @click="isActive = !isActive" :icon="['fa', 'bars']"></font-awesome-icon>
                        </button>
                    </li>
                </ul>
                <ul class="navegation-menu">
                    <li>
                        <router-link @click="cerrarMenu" to="/">Inicio</router-link>
                    </li>
                    <li>
                        <router-link @click="cerrarMenu" to="/sobre-mi">Sobre mi</router-link>
                    </li>
                    <li>
                        <router-link @click="cerrarMenu" to="/proyectos">Proyectos</router-link>
                    </li>
                    <li>
                        <router-link @click="cerrarMenu" to="/curriculum">Currículum</router-link>
                    </li>
                    <li>
                        <router-link @click="cerrarMenu" to="/contacto">Contacto</router-link>
                    </li>
                </ul>
            </nav>
            <nav class="main-menu-subfooter">
                <ul class="navegation-social">
                    <li>
                        <a class="a-style" href="https://github.com/Martingago" target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                        </a>
                    </li>
                    <li>
                        <a class="a-style" href="https://www.linkedin.com/in/mart%C3%ADn-gago-chor%C3%A9n-6b1814241/"
                            target="_blank">
                            <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
                        </a>
                    </li>
                    <li>
                        <a class="a-style" href="https://www.twitch.tv/" target="_blank">
                            <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
                        </a>
                    </li>
                </ul>
                <ul class="toggle-dark-mode-nav">
                    <li>
                        <button @click="toggleDarkMode">
                            <font-awesome-icon v-if="darkMode" :icon="['fa', 'sun']"></font-awesome-icon>
                            <font-awesome-icon v-else="darkMode" :icon="['fa', 'moon']"></font-awesome-icon>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>


</template>

<script setup >
import { ref } from 'vue';
require('@/assets/css/navegador.css');

const body = document.querySelector("body");
const darkMode = ref(false);
const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    if(darkMode.value){
        darkMode.value = true
        body.classList.add('dark-mode')}
    else{
        darkMode.value = false
        body.classList.remove('dark-mode');
    }

}

const isActive = ref(false);
const cerrarMenu = () => {
    if (document.documentElement.scrollWidth < 1080) {
        isActive.value = !isActive
    }
}


</script>
