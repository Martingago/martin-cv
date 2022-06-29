<template>
    <section class="section-form">
        <form class="myForm" @submit.prevent="subirNuevoProyecto">
            <h2>Cargar Proyecto</h2>
            <font-awesome-icon class="close-form" :icon="['fa', 'plus']" @click="$emit('cerrarProyecto')"></font-awesome-icon>
            <input v-model.trim="form.nombre" type="text" name="nombre-proyecto" id="nombre-proyecto"
                placeholder="Titulo proyecto">
            <!-- Textareas -->
            <textarea v-model.trim="form.descripcion_breve" name="descripcion-breve-proyecto" id="descripcion-breve-proyecto" cols="30"
                rows="2" placeholder="Descripcion breve del proyecto"></textarea>
            <textarea v-model.trim="form.descripcion" name="descripcion-proyecto" id="descripcion-proyecto" cols="30"
                rows="4" placeholder="Descripcion del proyecto"></textarea>
            <textarea v-model.trim="form.desarrollo" name="desarrollo-proyecto" id="desarollo-proyecto" cols="30"
                rows="4" placeholder="Desarrollo del proyecto"></textarea>
            <textarea v-model.trim="form.conclusiones" name="conclusiones-proyecto" id="conclusiones-proyecto" cols="30"
                rows="4" placeholder="Conclusiones del proyecto"></textarea>

            <!-- Links -->
            <input v-model.trim="form.url" type="url" name="proyecto-url" id="proyecto-url" placeholder="Enlace web">
            <input v-model.trim="form.github" type="url" name="proyecto-github" id="proyecto-github" placeholder="Enlace Git hub">
            <span class="myForm-date-proyecto">
                <label for="proyecto-fecha">Fecha finalización:</label>
                <input v-model.trim="form.fecha" type="date" name="proyecto-fecha" id="proyecto-fecha">
            </span>
            <TheUploader @emitirFichero="gestionarFichero"></TheUploader>

            <hr>
            <div class="validate-form">
                <span class="btn-validate"><input type="checkbox" name="confirmacion" class="validate" required>
                    <p>Confirmar datos</p>
                </span>
                <button class="proyecto-btn" type="submit">Cargar Proyecto</button>
            </div>

        </form>

    </section>
</template>
<script setup>
import TheUploader from "@/components/TheUploader.vue";
import { useStoreProyectos } from "@/store/proyectos";
import { reactive } from "vue";
require("@/assets/css/admin-design/formularios/form-proyecto.css")

const storeProyectos = useStoreProyectos();

// Almacena provisionalmente las imagenes del usuario
let imagenAlmacen = null;
const gestionarFichero = imagen => {
    imagenAlmacen = imagen;
    console.log("guardando imagen")
    console.log(imagenAlmacen)
    return imagenAlmacen
}

const form = reactive({
    nombre: "",
    descripcion_breve: "",
    descripcion: "",
    desarrollo: "",
    conclusiones: "",
    url: "",
    github: "",
    fecha: "",
    imagen_miniatura: "",
    almacen_imagenes: "",
});
const reset = () => {
    form.nombre = "",
        form.descripcion_breve = "",
        form.descripcion = "",
        form.desarrollo = "",
        form.conclusiones = "",
        form.url = "",
        form.github = "",
        form.fecha = "",
        form.imagen_miniatura = "",
        form.almacen_imagenes = ""
}

const subirNuevoProyecto = async () => {
    try {
        if (imagenAlmacen) {
            form.almacen_imagenes = `proyectos-programacion/${form.nombre}`
            form.imagen_miniatura = `proyectos-programacion/${form.nombre}/${imagenAlmacen.name}`;
            storeProyectos.subirImagenProyecto({ ruta: form.imagen_miniatura, file: imagenAlmacen })
        }
        await storeProyectos.subirProyecto(form)
        console.log("subiendo datos")
        reset();
    } catch (error) {
        console.log(ErrorEvent)
    }
}

</script>

