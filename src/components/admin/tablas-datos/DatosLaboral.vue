<template>
    <table class="proyectos-data-info">
        <tr class="tittle-proyectos-info">
            <td>Formacion</td>
            <td>Lugar</td>
            <td>Descripción</td>
            <td>Fecha Inicio</td>
            <td>Fecha fin </td>
            <td>Ajustes</td>
        </tr>
        <tr class="data-proyectos-info" v-for="(formacion, index) in storeLaboral.formaciones" :key="index">
            <td>{{ formacion.formacion }}</td>
            <td>{{ formacion.lugar }}</td>
            <td>{{formacion.descripcion}}</td>
            <td>{{ formacion.fecha_inicio }}</td>
            <td>{{ formacion.fecha_fin }}</td>
            <td>
                <span class="options-proyecto">
                    <font-awesome-icon :icon="['fa', 'trash']"
                        @click="handleDelete({ id:formacion.idCollection, name: `${formacion.formacion}` })">
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
                <button @click="eliminarExperiencia">Eliminar</button>
                <button @click="mostrar = false">Cancelar</button>
            </span>
        </div>
    </div>

</template>

<script setup>
import { useStorePerfilCv } from "@/store/cv/dataCv.user";
import {ref} from 'vue'
require("@/assets/css/admin-design/tablas-datos/datos-proyectos.css");
const storeLaboral = useStorePerfilCv();
storeLaboral.bajarDatosFormacion();

const mostrar = ref(false)

const nombre = ref("");
let itemDelete = null;
const handleDelete = ({id, name}) => {
    console.log(storeLaboral)
    itemDelete = id;
    mostrar.value = true
    nombre.value = name;
}

const eliminarExperiencia = async () => {
    if (itemDelete) {
        await storeLaboral.eliminarDatosFormacion(itemDelete)
        mostrar.value = false;
    }
}


</script>
