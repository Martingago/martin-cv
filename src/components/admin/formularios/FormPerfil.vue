<template>
    <section class="section-form">
        <form @submit.prevent="guardarDatos" class="form-contacto" action="#" method="POST" autocomplete="off">
            <h2>Datos Personales</h2>
            <input type="text" name="nombre" id="input-nombre" placeholder="Nombre" required />
            <input type="text" name="apellido" id="input-apellido" placeholder="Primer Apellido" required />
            <input type="text" name="apellido2" id="input-apellido2" placeholder="Segundo Apellido" required />
            <input type="email" name="email" id="input-email" placeholder="E-mail" required>
            <input type="number" name="numero" id="input-number" placeholder="Número de telefono" required>
            <input type="text" name="short-description" id="input-short-description" placeholder="Especialidad" required>
            <textarea id="input-descripcion" name="descripcion" rows="2" placeholder="Descricion" required></textarea>
            <TheUploaderVue></TheUploaderVue>
            <input type="submit" value="subir datos" name="send-usuario" id="submit-usuario" />
        </form>
    </section>
</template>

<script setup>
import TheUploaderVue from '../TheUploader.vue';

</script>

<style scoped>
.section-form{
    height: fit-content;
}
.form-contacto {
    width: 90vw;
    max-width: 500px;
    margin: auto;
    display: grid;
    background-color: rgba(150, 150, 150, .6);
    padding: 1rem;
}

.form-contacto h2 {
    grid-column: 1 / 3;
    text-align: center;
}

#input-nombre,
#input-email,
#input-apellido,
#input-apellido2,
#input-number,
#input-short-description,
#cargar-img {
    grid-column: 1 / 3;
}

#input-descripcion {
    background-color: rgba(250, 250, 250, 0.4);
    padding: 5px;
    resize: none;
    border: none;
    color: var(--colorprincipal);
    border-radius: 5px;
    grid-column: 1/ 3
}


</style>