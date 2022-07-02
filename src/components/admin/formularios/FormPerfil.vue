<template>
    <section class="section-form">
        <form @submit.prevent="guardarPerfil" class="myForm" action="#" method="POST" autocomplete="off">
            <h2>Datos Personales</h2>
            <font-awesome-icon class="close-form" :icon="['fa', 'plus']" @click="$emit('cerrarModal')">
            </font-awesome-icon>
            <input v-model.trim="form.nombre" type="text" name="nombre" id="input-nombre" placeholder="Nombre"
                required />
            <input v-model.trim="form.primer_apellido" type="text" name="apellido" id="input-apellido"
                placeholder="Primer Apellido" required />
            <input v-model.trim="form.segundo_apellido" type="text" name="apellido2" id="input-apellido2"
                placeholder="Segundo Apellido" required />
            <span class="myForm-date">
                <label for="fecha-nacimiento">Fecha Nacimiento</label>
                <input v-model.trim="form.nacimiento" type="date" name="fecha-nacimiento" id="fecha-nacimiento">
            </span>
            <h3>Contacto</h3>
            <input v-model.trim="form.email" type="email" name="email" id="input-email" placeholder="E-mail" required>
            <input v-model.trim="form.telefono" type="number" name="numero" id="input-number"
                placeholder="Número de telefono" required>
            <h3>Descripcion</h3>
            <input v-model.trim="form.descripcion_breve" type="text" name="short-description"
                id="input-short-description" placeholder="Especialidad" required>
            <textarea v-model.trim="form.descripcion" id="input-descripcion" name="descripcion" rows="4"
                placeholder="Descricion" required></textarea>
            <TheUploaderVue></TheUploaderVue>
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
import { reactive } from 'vue';
import TheUploaderVue from '@/components/TheUploader.vue';
import { useStorePerfilCv } from "@/store/cv/dataCv.user";
require("@/assets/css/admin-design/formularios/form-admin.css");

const storePersonal = useStorePerfilCv();

const form = reactive({
    nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    nacimiento: "",
    email: "",
    telefono: "",
    descripcion_breve: "",
    descripcion: ""
})
const reset = () => {
    form.nombre = "",
        form.primer_apellido = "",
        form.segundo_apellido = "",
        form.nacimiento = "",
        form.email = "",
        form.descripcion_breve = "",
        form.descripcion = ""
}

const guardarPerfil = async () => {
    try {
        await storePersonal.cargarDatosPersonales(form)
        console.log(form)
        reset()
    } catch (error) {
        console.log(error)
    }
}

</script>
