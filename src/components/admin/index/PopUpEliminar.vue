<template>
     <div class="alerta-eliminar-proyecto">
        <div class="alerta-container">
            <h2>Atencion</h2>
            <span class="alerta-txt">
                <p>La experiencia: <span class="nombre-eliminar">{{nombre}}</span> será eliminado de forma permanente!</p>
                <p>¿Seguno que quieres continuar?</p>
            </span>
            <span class="alerta-btn">
                <button @click="$emit('eliminarExperiencia')">Eliminar</button>
                <button @click="$emit('ocultarEliminar')">Cancelar</button>
            </span>
        </div>
    </div>

</template>
<script setup>
require("@/assets/css/admin-design/index/popUp-eliminar.css")


</script>