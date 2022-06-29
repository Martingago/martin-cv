<template>
    <table class="proyectos-data-info">
        <tr class="tittle-proyectos-info">
            <td>Proyecto</td>
            <td>Descripción Breve</td>
            <td>Descripción</td>
            <td>Desarrollo</td>
            <td>Conclusiones</td>
            <td>Fecha</td>
            <td>Enlace</td>
            <td>Github</td>
            <td>Imagenes</td>
            <td>Ajustes</td>
        </tr>
        <tr class="data-proyectos-info" v-for="(proyecto, index) in store.datos_proyecto" :key="index">
            <td>{{ proyecto.nombre }}</td>
            <td>{{ proyecto.descripcion_breve }}</td>
            <td>{{ proyecto.descripcion }}</td>
            <td>{{proyecto.desarrollo}}</td>
            <td>{{proyecto.conclusiones}}</td>
            <td class="data-fecha">{{ proyecto.fecha }}</td>
            <td>{{ proyecto.url }}</td>
            <td>{{proyecto.github}}</td>
            <td>{{ proyecto.imagen_miniatura }}</td>
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
import { useStoreProyectos } from '@/store/proyectos';
require("@/assets/css/admin-design/tablas-datos/datos-proyectos.css")
const store = useStoreProyectos()
store.bajarDatosProyecto("martin-proyectos");


const mostrar = ref(false)

const nombre = ref("");
let itemDelete = null;
const handleDelete = ({id, name}) => {
    itemDelete = id;
    console.log(itemDelete)
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

