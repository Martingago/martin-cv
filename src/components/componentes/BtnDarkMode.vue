<template>
    <button class="btn-dark-mode" @click="toggleDarkMode()">
        <font-awesome-icon v-if="toggleDark" :icon="['fa', 'sun']"></font-awesome-icon>
        <font-awesome-icon v-else="toggleDark" :icon="['fa', 'moon']"></font-awesome-icon>
    </button>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import '@/assets/css/componentes/btn-dark-mode.css';
import {comprobarDarkMode, switchDarkMode } from "@/hook/darkMode.js";

const toggleDark = ref(false)
onMounted(() => {
    // Coloca el boton en la posicion indicada dependiendo si el modo oscuro está activado o no
    if(localStorage.getItem('dark-mode') == 'true'){
        toggleDark.value = true
    } else{
        toggleDark.value = false
    }
})
const toggleDarkMode = () => {
    toggleDark.value = !toggleDark.value
    if(toggleDark.value){
        localStorage.setItem('dark-mode', true)
        switchDarkMode()
    }else{
        localStorage.setItem('dark-mode', false)
        switchDarkMode()
    }
}

comprobarDarkMode();
switchDarkMode()


</script>