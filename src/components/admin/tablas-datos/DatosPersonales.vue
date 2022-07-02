<template>
    <table class="proyectos-data-info">
        <tr class="tittle-proyectos-info">
            <td>Nombre</td>
            <td>Primer Apellido</td>
            <td>Segundo Apellido</td>
            <td>E-mail</td>
            <td>Número de contacto</td>
            <td>Fecha nacimiento</td>
            <td>Puesto</td>
            <td>Descripción</td>
            <td>Ajustes</td>
        </tr>
        <tr class="data-proyectos-info" v-for="(dataPersonal, index) in storePersonal.datosPersonales" >
            <td>{{dataPersonal.nombre}}</td>
            <td>{{dataPersonal.primer_apellido}}</td>
            <td>{{dataPersonal.segundo_apellido}}</td>
            <td>{{dataPersonal.email}}</td>
            <td>{{dataPersonal.telefono}}</td>
            <td>{{dataPersonal.nacimiento}}</td>
            <td>{{dataPersonal.descripcion_breve}}</td>
            <td>{{dataPersonal.descripcion}}</td>
            <td>
                <span class="options-proyecto">
                    <font-awesome-icon :icon="['fa', 'trash']"
                        @click="handleDelete({ id:dataPersonal.idCollection, name: `${dataPersonal.nombre}` })">
                    </font-awesome-icon>
                    <font-awesome-icon :icon="['fa', 'pen']"></font-awesome-icon>
                </span>
            </td>
        </tr>
    </table>

    <div class="alerta-eliminar-proyecto" v-if="mostrar">
        <div class="alerta-container">
            <h2>Atencion</h2>
            <span class="alerta-txt">
                <p>La experiencia: <span class="proyecto-nombre">{{nombre}}</span> será eliminado de forma permanente!</p>
                <p>¿Seguno que quieres continuar?</p>
            </span>
            <span class="alerta-btn">
                <button @click="eliminarPerfil">Eliminar</button>
                <button @click="mostrar = false">Cancelar</button>
            </span>
        </div>
    </div>

</template>

<script setup>

import { useStorePerfilCv } from "@/store/cv/dataCv.user";
import {ref} from 'vue'
require("@/assets/css/admin-design/tablas-datos/datos-proyectos.css");
const storePersonal = useStorePerfilCv();
storePersonal.setDatosPersonales();

const mostrar = ref(false)

const nombre = ref("");
let itemDelete = null;
const handleDelete = ({id, name}) => {
    console.log(storePersonal)
    itemDelete = id;
    mostrar.value = true
    nombre.value = name;
    console.log(itemDelete)

}

const eliminarPerfil = async () => {
    if (itemDelete) {
        await storePersonal.eliminarDatosPerfil(itemDelete)
        mostrar.value = false;
    }
}
</script>