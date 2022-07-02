<template>
    <nav class="admin-nav">
        <ul class="section-buttons">
            <li><button @click="posicion(1)">Perfil</button></li>
            <li><button @click="posicion(2)">Formación</button></li>
            <li><button @click="posicion(3)">Experiencia</button></li>
            <li><button @click="posicion(4)">Proyectos</button></li>
        </ul>
        <ul class="user-buttons">
            <li class="user-info"> <img class="user-profile-image" src="@/assets/img/profile.png" alt="profile">
                <p class="user-profile-name">{{ store.getEmailUser }}</p>
            </li>
            <li class="user-logout">
                <button class="logout" @click="desconectar">
                    <font-awesome-icon :icon="['fa', 'arrow-right-from-bracket']"></font-awesome-icon> Cerrar sesión
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup>

import { useStoreUsers } from "@/store/users";
import { ref } from "vue";
import { useRouter } from "vue-router";
require("@/assets/css/admin-design/index/menu-admin.css")
const router = useRouter();

const store = useStoreUsers()
const desconectar = () => {
    try {
        router.push({ name: 'admin-login' })
        store.logout();
    } catch (error) {
    }
};
const props = defineProps({
    mostrarEl:{
        default: ref(1)
    }
})

const posicion = (e) => {
props.mostrarEl.value = e;
let valor = props.mostrarEl.value
 console.log(valor)
}
</script>
