<template>
  <section class="section-form">
    <form @submit.prevent="guardarFormacion" class="myForm" action="#" method="POST" autocomplete="off">
      <h2>Datos formacion</h2>
      <font-awesome-icon class="close-form" :icon="['fa', 'plus']" @click="$emit('cerrarModal')"></font-awesome-icon>
      <input v-model.trim="form.formacion" type="text" name="formacion" id="input-formacion" placeholder="Formacion" required />
      <input v-model.trim="form.lugar" type="text" name="lugar" id="input-lugar" placeholder="Lugar" required />
      
      <span class="myForm-date">
        <label for="fechaInicio">Fecha inicio</label>
        <input v-model.trim="form.fecha_inicio" type="date" name="fechaInicio" id="input-fechaInicio" placeholder="Fecha inicio" required />
      </span>

      <span class="myForm-date">
        <label for="fechaFin">Fecha fin</label>
        <input v-model.trim="form.fecha_fin" type="date" name="fechaFin" id="input-fechaFin" placeholder="Fecha inicio" required />
      </span>
      
      <textarea v-model.trim="form.descripcion" id="input-descripcion" name="descripcion" rows="2" placeholder="Descricion" required></textarea>
      
      <div class="validate-form">
        <span class="btn-validate"><input type="checkbox" name="confirmacion" class="validate" required>
          <p>Confirmar datos</p>
        </span>
        <input type="submit" value="subir datos" name="send-usuario" id="submit-usuario" />
      </div>
    </form>
  </section>
</template>

<script setup>
import { useStorePerfilCv } from "@/store/cv/dataCv.user";
import {reactive} from 'vue';
require("@/assets/css/admin-design/formularios/form-admin.css");

const storeFormacion = useStorePerfilCv();

const form = reactive({
  formacion: "",
  lugar: "",
  fecha_inicio: "",
  fecha_fin: "",
  descripcion: "",
})
const reset = () => {
  form.formacion = "",
  form.lugar = "",
  form.fecha_inicio = "",
  form.fecha_fin = "",
  form.descripcion = ""
}

const guardarFormacion = async() => {
try {
  await storeFormacion.cargarDatosFormacion(form)
  reset()
} catch (error) {
  
}
}


</script>


