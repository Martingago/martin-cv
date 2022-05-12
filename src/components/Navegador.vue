<template>

    <nav class="main-menu-section">

        <ul class="navigation-index">
            <li>
                <div @click="isActive = !isActive"><i class="fa-solid fa-bars"></i></div>
            </li>
        </ul>

        <ul class="navegation-menu menu-web" v-bind:class="{ 'menuHidden': isActive }">

            <li>
                <router-link to="/">Inicio</router-link>
            </li>
            <li>
                <router-link to="/">Sobre mi</router-link>
            </li>
            <li>
                <router-link to="/">Proyectos</router-link>
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
        <ul class="navegation-social menu-web" v-bind:class="{ 'navigationHidden': isActive }">
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


</template>

<script setup >
import { ref } from 'vue';

let isActive = ref();

</script>

<style scoped>
.main-menu-section {
    position: fixed;
    top: 0;
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


.menu-web {
    transition: all .3s linear;

}

.menuHidden {
    transform: translateX(200%);
    display: none;
}

.navigationHidden {
    transform: translateX(-200%);
    display: none;
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
    background-color: rgba(125, 125, 125, .7);
    backdrop-filter: blur(4px);
    transition: background-color .2s linear;
    font-size: 2.2rem;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    color: white;
    text-decoration: none;
}
.main-menu-subfooter .navegation-social li a:hover{
    background-color: rgba(214, 194, 127, .7);
}


@media screen and (max-width:600px) {

    /* Menu navegacion */
    .main-menu-section {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        margin: 5px auto;
    }

    .main-menu-section .navigation-index {
        display: none;
    }

    .main-menu-section .navegation-menu {
        grid-column: 1 / 3;
    }

    .main-menu-section ul li a {
        box-sizing: border-box;
        font-size: var(--textoreducido);
    }

    /* Menu social media */
    .main-menu-subfooter .navegation-social {
        position: fixed;
        margin: 5px;
    }

    .navegation-social li {
        width: auto !important;
        height: auto !important;
    }

    .main-menu-subfooter .navegation-social li a i {
        font-size: 1.5rem;
        padding: .5rem
    }
}
</style>