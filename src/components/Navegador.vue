<template>

    <nav class="main-menu-section">
        
        <ul class="navigation-index">
            <li>
                <router-link to="/" v-on:click="abrirCerrar"><i class="fa-solid fa-bars"></i></router-link>
            </li>
        </ul>
        
        <ul class="navegation-menu">
            <li>
                <router-link to="/">Sobre mi</router-link>
            </li>
            <li>
                <router-link to="/">Proyectos</router-link>
            </li>
            <li>
                <router-link to="/">Currículum</router-link>
            </li>
            <li>
                <router-link to="/">Contacto</router-link>
            </li>
        </ul>

        <ul class="navegation-social">
            <li>
                <router-link to="/">Github</router-link>
            </li>
            <li>
                <router-link to="/">Linkedln</router-link>
            </li>
            <li>
                <router-link to="/">Instagram</router-link>
            </li>
        </ul>

    </nav>


</template>

<script setup>
import { ref } from "vue";

let expandir = ref(false)

let abrirCerrar = () => {
    
}
abrirCerrar()

</script>

<style scoped>

.main-menu-section{
    position: fixed;
    top: 0;
    right: 50%;
    transform: translate(50%);
    width: calc(100% - clamp(3rem, 5vw, 10rem));
    margin: 20px auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap:10px;
    
}
.main-menu-section ul{
    display: flex;
    flex-direction: row;
    background-color: rgba(125, 125, 125, .7);
    backdrop-filter: blur(3px);
    border-radius: 5px;   
}
.main-menu-section ul li{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.main-menu-section ul li a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    width: 100%;
    font-size: var(--textoparrafo);
    padding: 10px 0;
    border-radius: 5px;
    transition: background-color .2s linear;
}
.main-menu-section ul li a:hover{
    background-color: rgba(184, 64, 94, 1);
}
.navegation-menu{
    justify-content: flex-end;
}
.main-menu-section .navigation-index li a{
    font-size: 2rem;
    padding: .5rem 1rem;
}
.navegation-social{
    display: none !important;
    grid-column: 1 / 3;
    grid-row: 1 / 1;
    justify-content: flex-end;
    align-items: center;
}



/* .main-menu-section{
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    height: 100vh;
    grid-template-columns: 60px;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    background-color: var(--colorprincipal);
}
    .main-menu-section ul li{
        display: flex;
        background-color: yellow;
        width: 100%;
        height: auto;
        text-transform: uppercase;
        font-size: .7rem;
    }
    .main-menu-section ul li a{
        width: 100%;
        height: 100%;
    }

/* EXPANDIDO */

</style>