<template>
    <section class="section-form">
        <form @submit.prevent="guardarDatos" class="myForm" action="#" method="POST" autocomplete="off">
        <font-awesome-icon class="close-form" :icon="['fa', 'plus']" @click="$emit('cerrarModal')"></font-awesome-icon>
            <h2>Datos Experiencia Laboral</h2>
            <input v-model.trim="form.puesto" type="text" name="puesto" id="input-puesto" placeholder="Puesto"
                required />

            <input v-model.trim="form.lugar_trabajo" type="text" name="lugar" id="input-lugar" placeholder="Lugar"
                required />
            <input v-model.trim="form.contrato" type="text" name="contrato" id="input-contrato" placeholder="Contrato"
                required />
            <span class="myForm-date">
                <label for="fechaInicio">Fecha inicio</label>
                <input v-model.trim="form.fecha_inicio" type="date" name="fechaInicio" id="input-fechaInicio"
                    placeholder="Fecha inicio" required />
            </span>
            <span class="myForm-date">
                <label for="fechaFin">Fecha fin</label>
                <input v-model.trim="form.fecha_fin" type="date" name="fechaFin" id="input-fechaFin"
                    placeholder="Fecha inicio" required />
            </span>

            <textarea v-model.trim="form.descripcion_breve" id="input-descripcion" name="short-descripcion" rows="2"
                placeholder="Descricion breve">
            </textarea>

            <h3>Responsabilidades del puesto</h3>

            <div class="form-control" v-for="(index) in count" :key="index">
                <input :v-model.trim="form.responsabilidades" class="input-responsabilidad" type="text"
                    name="responsabilidad" :placeholder="'Responsabilidad ' + index">
                <font-awesome-icon :icon="['fa', 'plus']" @click="remove"></font-awesome-icon>
            </div>

            <div class="btn-add" @click="add">
                <font-awesome-icon :icon="['fa', 'plus']"></font-awesome-icon>
            </div>
            <hr>
             <div class="validate-form">
                <span class="btn-validate"><input type="checkbox" name="confirmacion" class="validate" required><p>Confirmar datos</p></span>
                <input type="submit" value="Subir datos" name="send-usuario" id="submit-usuario" @click="guardarExperiencia">
            </div>
        </form>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useStorePerfilCv } from '@/store/cv/dataCv.user';
require('@/assets/css/admin-design/formularios/form-admin.css');


// Acciones de carga de datos del formulario
const storeExperiencia = useStorePerfilCv()
const count = ref(1);
const form = reactive({
    puesto: "",
    lugar_trabajo: "",
    contrato: "",
    fecha_inicio: "",
    fecha_fin: "",
    descripcion_breve: "",
    responsabilidades: []
})
const reset = () => {
    form.puesto = "",
        form.lugar_trabajo = "",
        form.contrato = "",
        form.fecha_inicio = "",
        form.fecha_fin = "",
        form.descripcion_breve = "",
        form.responsabilidades = []
}

const add = () => {
    count.value++
}
const remove = () => {
    count.value--
}

// Guarda en un array los datos que experiencia que ha introducido el usuario
const guardarExperiencia = () => {
    form.responsabilidades = []
    const responsabilidad = document.querySelectorAll(".input-responsabilidad")
    for(let i=0; i<responsabilidad.length; i++){
        form.responsabilidades.push(responsabilidad[i].value)
    }
}
// Guarda todos los datos del formulario y los carga en la base de datos
const guardarDatos = async () => {
    try {
        await storeExperiencia.subirDatosExperiencia(form)
        console.log(form)
        console.log("subiendo datos")
        reset();
    } catch (error) {
        console.log(error)
    }

}

</script>
