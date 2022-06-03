<template>
    <div class="admin-menu-section" v-bind:class="{ 'expanded': isActive }">
        <span class="background-fixed"></span>
        <nav class="admin-menu">
            <ul class="nav-buttons">
                <li>
                    <h2>MARTIN CV</h2>
                </li>
                <li>Formularios</li>
                <li>Datos</li>
            </ul>
        </nav>
        <div class="admin-menu-var">
            <ul class="var-buttons">
                <li><button class="menu-btn" @click="isActive = !isActive">
                        <font-awesome-icon :icon="['fa', 'bars']"></font-awesome-icon>
                    </button></li>
                <li class="user-info"> <img class="user-profile-image" src="@/assets/img/profile.png" alt="profile">
                    <p class="user-profile-name">Martin</p>
                </li>
                <li class="user-logout"><button class="logout">
                        <font-awesome-icon :icon="['fa', 'arrow-right-from-bracket']"></font-awesome-icon> Cerrar sesión
                    </button></li>
            </ul>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const isActive = ref({})


</script>

<style scoped>
.admin-menu-section {
    width: 100%;
    overflow: hidden;
    height: 100px;
}
.background-fixed{
    position: fixed;
    left: 0;
    width: 100%;
    height: 200px;
    background: rgb(169, 95, 228);
    background: linear-gradient(90deg, rgba(169, 95, 228, 1) 0%, rgba(59, 202, 240, 1) 69%);
    -webkit-box-shadow: 0px 5px 10px 5px #646464;
    box-shadow: 0px 3px 10px 3px #646464;
    transition: all .3s linear;
    z-index: -1;
}

.admin-menu {
    position: fixed;
    width: var(--tamañomenu);
    height: 100vh;
    transform: translateX(-200px);
    transition: transform .3s linear;
    z-index: 1;
    overflow: hidden;
    background: rgb(255, 255, 255);
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 47%, rgba(232, 232, 232, 1) 98%);
    -webkit-box-shadow: inset -5px 0px 10px -3px #3D3D3D;
    box-shadow: inset -1px 0px 7px -3px #3D3D3D;
    
}

.admin-menu-var {
    z-index: 1;
    left: 0;
    position: fixed;
    width: 100%;
    height: 53px;
    transition: all .3s linear;
    
    
}

/* Menu superior */

.admin-menu-var ul {
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-self: center;
    gap: 1rem;
    padding: .5rem 1rem;
    background: rgb(169, 95, 228);
    background: linear-gradient(90deg, rgba(169, 95, 228, .6) 0%, rgba(59, 202, 240, .6) 69%);
    backdrop-filter: blur(5px);
}

.admin-menu-var .menu-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: white;
}

.admin-menu-var .menu-btn svg {
    font-size: 2rem;
}

.admin-menu-var .user-info {
    display: grid;
    height: 100%;
    grid-template-columns: auto auto;
    gap: .5rem;
    align-self: center;
    align-items: center;
}

.admin-menu-var .user-info .user-profile-image {
    width: 25px;
    border-radius: 50%;
}

.admin-menu-var .user-info .user-profile-name {
    font-size: 1.2rem;
    line-height: 1.2rem;
    height: fit-content;
}

.admin-menu-var .user-logout {
    display: flex;
    justify-content: center;
    align-items: center;
}

.admin-menu-var .logout {
    cursor: pointer;
    font-size: 1rem;
    line-height: 1rem;
    padding: .25rem .5rem;
}

/* Botones del menu lateral expansible */
.nav-buttons li:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 53px;
}

/* Expandido */

.expanded .admin-menu {
    transform: translateX(0);
}

.expanded .admin-menu-var {
    left: var(--tamañomenu);
    width: calc(100% - var(--tamañomenu));
}
.expanded .background-fixed{
    width: calc(100% - var(--tamañomenu));
    left: var(--tamañomenu);
}
</style>