<template>
    <Navegador></Navegador>
    <router-view />
</template>

<script setup>
import Navegador from "@/components/Navegador.vue";
import { useStoreUsers } from "./store/users";
require("@/assets/css/reset.css");
require("@/assets/css/app.css");

// Mantiene al usuario registrado en la app
const almacen = useStoreUsers();
almacen.logged()
</script>

