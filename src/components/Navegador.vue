<template>

    <div class="navegador-componente">
        <div class="header" v-bind:class="{'expanded-movile-menu ': isActive}">
            <nav class="main-menu-section">
                <ul class="navigation-index">
                    <li>
                        <div @click="isActive = !isActive"><font-awesome-icon :icon="['fa', 'bars']"></font-awesome-icon></div>
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
                        <a class="a-style" href="https://github.com/Martingago" target="_blank"><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon></a>
                    </li>
                    <li>
                        <a class="a-style" href="https://www.linkedin.com/in/mart%C3%ADn-gago-chor%C3%A9n-6b1814241/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon></a>
                    </li>
                    <li>
                        <a class="a-style" href="https://www.twitch.tv/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>


</template>

<script setup >
import { ref } from 'vue';
require('@/assets/css/navegador.css')

const isActive = ref(false)

const cerrarMenu = () => {
    if(document.documentElement.scrollWidth < 1080){
        isActive.value = !isActive
    }
}


</script>
