<template>
    <table class="proyectos-data-info">
        <tr class="tittle-proyectos-info">
            <td>Proyecto</td>
            <td>Descripción Breve</td>
            <td>Descripción</td>
            <td>Fecha</td>
            <td>Enlace</td>
            <td>Imagenes</td>
            <td>Ajustes</td>
        </tr>
        <tr class="data-proyectos-info" v-for="(proyecto, index) in store.datos_proyecto" :key="index">
            <td>{{ proyecto.nombre }}</td>
            <td>{{ proyecto.descripcion_breve }}</td>
            <td>{{ proyecto.descripcion }}</td>
            <td>{{ proyecto.fecha }}</td>
            <td>{{ proyecto.url }}</td>
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
                <button @click="eliminarProyecto()">Eliminar</button>
                <button @click="mostrar = false">Cancelar</button>
            </span>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { useStoreProyectos } from '@/store/proyectos';
const store = useStoreProyectos()
store.bajarDatosProyecto("martin-proyectos");


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

<style scoped>
.alerta-eliminar-proyecto {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(181, 182, 181, 0.377);
    backdrop-filter: blur(5px);
    z-index: 2;
}

.alerta-container {
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: fit-content;
    height: fit-content;
    background-color: rgb(196, 84, 84);
    border-radius: 5px;
    margin: auto;
    padding: 1rem;
}

.alerta-container h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
}

.alerta-container .alerta-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
}
    .alerta-container .alerta-txt .proyecto-nombre{
        font-weight: 800;
    }

.alerta-container .alerta-btn {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}


.proyectos-data-info {
    width: 100%;
    border: none;
}

.proyectos-data-info td {
    border-left: 2px solid black;
    border-bottom: 2px solid black;
}

.tittle-proyectos-info {
    width: 100%;
    background-color: gray;
    color: white;
    border: none;
}

.data-proyectos-info {
    width: 100%;
    background-color: white;
    padding: 0;
    margin: 0;
}

.data-proyectos-info:nth-child(odd) {
    background-color: lightgray;
}

.options-proyecto {
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
}
</style>

