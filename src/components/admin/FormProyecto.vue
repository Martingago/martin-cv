<template>
    <section class="section-form">
        <form class="form-contacto" @submit.prevent="subirDatos">
            <h2>Cargar Proyecto</h2>
            <span class="proyecto-identify">
                <input v-model.trim="form.nombre" type="text" name="nombre-proyecto" id="nombre-proyecto" placeholder="Nombre proyecto">
                <input type="number" name="proyecto-id" id="proyecto-ID" placeholder="Código">
            </span>
            <input v-model="form.descripcion_breve" type="text" name="descripcion-corta-proyecto" id="descripcion-corta-proyecto"
                placeholder="Descripción breve">
            <textarea v-model="form.descripcion" name="descripcion-proyecto" id="descripcion-proyecto" cols="30" rows="10"
                placeholder="Descripcion del proyecto"></textarea>

            <input v-model="form.url" type="url" name="proyecto-url" id="proyecto-url" placeholder="Enlace web">
            <span class="proyecto-fecha-fin">
                <label for="proyecto-fecha">Fecha finalización:</label>
                <input v-model="form.fecha" type="date" name="proyecto-fecha" id="proyecto-fecha">
            </span>
            <TheUploader @emitirFichero="gestionarFichero"></TheUploader>
            
            <button class="proyecto-btn" type="submit">Cargar Proyecto</button>
        </form>

    </section>
</template>
<script setup>
import TheUploader from "@/components/TheUploader.vue";
import { uploadImages } from "@/hook/firebase.storage";
import {useStoreProyectos} from "@/store/proyectos";
import {reactive} from "vue";
require("@/assets/css/formulario.css");

const form = reactive({
    nombre: "",
    descripcion_breve: "",
    descripcion: "",
    url: "",
    fecha: "",
    imagen_url: "",
    almacen_imagenes: "",

});

const storeProyectos = useStoreProyectos();
const storeImagenes = uploadImages();

// Almacena provisionalmente las imagenes del usuario
let imagenAlmacen = null;
const gestionarFichero = imagen => {
    imagenAlmacen = imagen;

    console.log("guardando imagen")
    console.log(imagenAlmacen)
    return imagenAlmacen
}
// Sube datos al servidor
const subirDatos = async () => {
    try {
        if(imagenAlmacen){
            form.almacen_imagenes = `proyectos-programacion/${form.nombre}`
            form.imagen_url = `proyectos-programacion/${form.nombre}/${imagenAlmacen.name}`;
            storeImagenes.subirImagen({ruta: form.imagen_url, file: imagenAlmacen})
        }
        await storeProyectos.cargarProyecto("martin-proyectos", form)
    } catch (error) {
        console.log(ErrorEvent)
    }
}

</script>

<style scoped>
.section-form {
    width: fit-content;
}

.form-contacto {
    width: 90vw;
    max-width: 500px;
    margin: auto;
    display: grid;
    grid-template-columns: auto;
    background-color: rgba(150, 150, 150, .6);
    padding: 1rem;
    border-radius: 10px;
    gap: .25rem;
}

input[type="text"] {
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: var(--colortransparencia);
    border-radius: 5px;
    padding: 0 .5rem;
}

#descripcion-proyecto {
    background-color: rgba(250, 250, 250, 0.4);
    padding: 5px;
    resize: none;
    border: none;
    color: var(--colorprincipal);
    border-radius: 5px;
}

.proyecto-btn {
    width: fit-content;
    margin: .5rem auto auto auto;
    border: none;
    outline: none;
    background-color: var(--colortransparencia);
    border-radius: 5px;
    padding: .5rem;
    font-weight: 600;
    text-transform: uppercase;
}

.proyecto-identify {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: .25rem
}

#proyecto-ID {
    width: 100px;
}

.proyecto-fecha-fin {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: .5rem;
}

.proyecto-fecha-fin label {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--colortransparencia);
    border-radius: 5px;
    padding: 0 .5rem;
}
</style>
