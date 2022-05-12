<template>

    <nav class="main-menu-section">
        
        <ul class="navigation-index">
            <li>
                <router-link to="/"><i class="fa-solid fa-bars"></i></router-link>
            </li>
        </ul>
        
        <ul class="navegation-menu">
            <li>
                <router-link to="/" >Sobre mi</router-link>
            </li>
            <li>
                <router-link to="/">Proyectos</router-link>
            </li>
            <li>
                <router-link to="/curriculum" >Currículum</router-link>
            </li>
            <li>
                <router-link to="/contacto">Contacto</router-link>
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
const btnActivo = () => {
    console.log("estas aqui")
}
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
    border-radius: 5px;
    background-color: rgba(125, 125, 125, .7);
    backdrop-filter: blur(3px);
    overflow: hidden;
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
    transition: background-color .2s linear;
}
.main-menu-section ul li a:hover{
    background-color: rgba(200, 200, 200);
}
.navegation-menu{
    justify-content: flex-end;
}
.main-menu-section .navigation-index li a{
    font-size: 2rem;
    padding: .5rem 1rem;
    border-radius:5px;
}
.navegation-social{
    display: none !important;
    grid-column: 1 / 3;
    grid-row: 1 / 1;
    justify-content: flex-end;
    align-items: center;
}
.router-link-exact-active{
    z-index:1;
    background-color: rgba(184, 64, 94, 1);
}

@media screen and (max-width:600px) {
    .main-menu-section{
        width: calc(100% - 10px);
        margin: 5px auto;
        gap:5px;
    }

        .main-menu-section ul li a{
            font-size: var(--textoreducido);
        }

        .main-menu-section .navigation-index li a i{
            font-size: 20px;
        }
}



</style>