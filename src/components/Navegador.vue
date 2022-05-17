<template>

    <div class="header" v-bind:class="{ 'movilMenu': isActive }">
        <nav class="main-menu-section">
            <ul class="navigation-index">
                <li>
                    <div @click="isActive = !isActive"><i class="fa-solid fa-bars"></i></div>
                </li>
            </ul>
            <ul class="navegation-menu">
                <li>
                    <router-link to="/">Inicio</router-link>
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
                    <router-link to="https://github.com/Martingago"><i class="fa-brands fa-github"></i></router-link>
                </li>
                <li>
                    <router-link to="/"><i class="fa-brands fa-linkedin"></i></router-link>
                </li>
                <li>
                    <router-link to="/"><i class="fa-brands fa-instagram"></i></router-link>
                </li>
            </ul>
        </nav>
    </div>


</template>

<script setup >
import { ref } from 'vue';

let isActive = ref();

</script>

<style scoped>
.header {
    width: 100%;
    height: 88px;
    transition: all .3s linear;
}

.main-menu-section {
    position: fixed;
    width: calc(100% - 40px);
    margin: 20px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    z-index: 2;
    user-select: none;
}

.main-menu-section ul {
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    overflow: hidden;
}

.main-menu-section ul li a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    width: 100%;
    height: 100%;
    font-size: var(--textoparrafo);
    padding: 10px 0;
    background-color: rgba(125, 125, 125, .7);
    backdrop-filter: blur(4px);
    transition: background-color .3s linear;
}

/* Boton principal menu */
.main-menu-section .navigation-index li div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    width: 100%;
    height: 100%;
    font-size: var(--textoparrafo);
    padding: 10px 0;
    background-color: rgba(125, 125, 125, .7);
    backdrop-filter: blur(4px);
    font-size: 2rem;
    padding: .5rem 1rem;
    border-radius: 5px;
    cursor: pointer
}

/* Menu navegación */
.main-menu-section .navegation-menu {
    transition: transform .3s linear;
}

.main-menu-section .navegation-menu li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.main-menu-section .navegation-menu li a:hover {
    background-color: rgba(214, 194, 127, .7);
}

.main-menu-section ul li .router-link-exact-active {
    background-color: rgba(184, 64, 94, .8);
}

.router-link-exact-active:hover {
    background-color: rgba(184, 64, 94, .8) !important;
}

/* SUB-FOOTER SOCIAL MEDIA */

.main-menu-subfooter .navegation-social {
    display: grid;
    position: fixed;
    bottom: 0;
    grid-template-columns: auto auto auto;
    gap: .5rem;
    width: auto;
    margin: 20px;
    transition: transform .3s linear;
}

.main-menu-subfooter .navegation-social li {
    width: 60px;
    height: 48px;
}

.main-menu-subfooter .navegation-social li a {
    display: flex;
    font-size: var(--textoparrafo);
    justify-content: center;
    align-items: center;
    background-color: rgba(125, 125, 125, .4);
    backdrop-filter: blur(4px);
    transition: background-color .2s linear;
    font-size: 2.2rem;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    color: white;
    text-decoration: none;
}

.main-menu-subfooter .navegation-social li a:hover {
    background-color: rgba(214, 194, 127, .7);
}

/* Esconder menu en alta resolucion */

@media screen and (min-width:901px) {
    .movilMenu .main-menu-section .navegation-menu {
        transform: translateX(200%);
        overflow: hidden;
    }

    .movilMenu .main-menu-subfooter .navegation-social {
        transform: translateX(-200%);
        overflow: hidden;
    }
}


@media screen and (max-width:900px) {

    .main-menu-section .navegation-menu {
        opacity: 0;
        display: none;
    }

    .main-menu-subfooter .navegation-social {
        display: none;
    }

    /* Menu desplegable movil*/
    .header {
        position: fixed;
        transition: all .3s linear;
    }

    .header .main-menu-section {
        margin: 20px;
    }

    .movilMenu {
        position: fixed;
        background: rgb(255, 164, 5);
        background: linear-gradient(324deg, rgba(255, 164, 5, 1) 0%, rgba(26, 251, 252, 1) 100%);
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 1fr auto;
        height: 100vh;
        z-index: 1;
    }

    .movilMenu .main-menu-section {
        position: initial;
        grid-template-columns: auto;
        grid-template-rows: auto 1fr;
        gap: 20px;
    }

    .movilMenu .main-menu-section .navegation-menu {
        transition: all .3s linear;
        opacity: 1;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
    }

    .movilMenu .main-menu-section .navegation-menu li:last-child a {
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .movilMenu .main-menu-subfooter .navegation-social {
        position: initial;
        display: flex;
        margin-bottom: 3rem;
        justify-content: center;
    }

    .movilMenu .main-menu-subfooter .navegation-social li {
        width: 60px;
    }
}
</style>