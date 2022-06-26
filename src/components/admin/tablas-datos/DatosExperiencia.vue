<template>
    <table class="proyectos-data-info">
        <tr class="tittle-proyectos-info">
            <td>Experiencia</td>
            <td>Lugar trabajo</td>
            <td>contrato</td>
            <td>Descripcion breve</td>
            <td>Fecha inicio</td>
            <td>Fecha fin</td>
            <td>Responsabilidades</td>
            <td>Ajustes</td>
        </tr>
        <tr class="data-proyectos-info" v-for="(experiencia, index) in storeExperiencia.experiencia" :key="index">
            <td>{{ experiencia.puesto }}</td>
            <td>{{ experiencia.lugar_trabajo}}</td>
            <td>{{ experiencia.contrato}}</td>
            <td>{{ experiencia.descripcion_breve}}</td>
            <td>{{ experiencia.fecha_inicio}}</td>
            <td>{{ experiencia.fecha_fin}}</td>
            <tr v-for="(responsabilidades, index) in experiencia.responsabilidades" :key="index" >
            <p><font-awesome-icon class="experiencia-icon" :icon="['fa', 'circle']"></font-awesome-icon> {{responsabilidades}}</p>
            </tr>
            <td>
                <span class="options-proyecto">
                    <font-awesome-icon :icon="['fa', 'trash']" @click="handleDelete({id:proyecto.idCollection , name: `${proyecto.nombre}` })"></font-awesome-icon>
                    <font-awesome-icon :icon="['fa', 'pen']"></font-awesome-icon>
                </span>
            </td>
        </tr>
    </table>
    <div class="alerta-eliminar-proyecto" v-if="mostrar">
        <div class="alerta-container">
            <h2>Atencion</h2>
            <span class="alerta-txt">
                <p>!El proyecto: <span class="proyecto-nombre">{{nombre}}</span> será eliminado de forma permanente!</p>
                <p>¿Seguno que quieres continuar?</p>
            </span>
            <span class="alerta-btn">
                <button @click="eliminarProyecto">Eliminar</button>
                <button @click="mostrar = false">Cancelar</button>
            </span>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { storeExperienciaCv } from '@/store/cv/experiencia-cv';

require("@/assets/css/admin-design/tablas-datos/datos-proyectos.css");

const storeExperiencia = storeExperienciaCv()
storeExperiencia.bajarDatosExperiencia()


const mostrar = ref(false)

const nombre = ref("");
let itemDelete = null;
const handleDelete = ({id, name}) => {
    itemDelete = id;
    mostrar.value = true
    nombre.value = name;

}

const eliminarProyecto = async () => {
    if (itemDelete) {
        await store.eliminarDatosProyecto(itemDelete)
        mostrar.value = false;
    }
}
</script>