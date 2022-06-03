<template>
    <section class="section-form">
        <form @submit.prevent="guardarDatos" class="form-contacto" action="#" method="POST" autocomplete="off">
            <h2>Datos Experiencia Laboral</h2>
            <input type="text" name="puesto" id="input-puesto" placeholder="Puesto" required />

            <input type="text" name="lugar" id="input-lugar" placeholder="Lugar" required />
            <label for="fechaInicio">Fecha inicio</label>
            <input type="date" name="fechaInicio" id="input-fechaInicio" placeholder="Fecha inicio" required />

            <label for="fechaFin">Fecha fin</label>
            <input type="date" name="fechaFin" id="input-fechaFin" placeholder="Fecha inicio" required />

            <textarea id="input-descripcion" name="short-descripcion" rows="2" placeholder="Descricion breve"></textarea>
            
            <div class="form-control" v-for="key in count" :key="key">
                <input class="input-responsabilidad" type="text" name="responsabilidad" placeholder="Responsabilidad"
                    v-model="values['responsabilidad' + key]">
                    <font-awesome-icon :icon="['fa', 'plus']" @click="remove"></font-awesome-icon>
            </div>

            <button class="btn-add" @click="add">
                <font-awesome-icon :icon="['fa', 'plus']"></font-awesome-icon>
            </button>

            <input type="submit" value="subir datos" name="send-usuario" id="submit-usuario" @click="submit"/>
        </form>
    </section>
</template>

<script>
require('@/assets/css/formulario.css')

export default {
    name: 'App',
    data: function () {
        return {
            count: 1,
            values: {}

        }
    },
    methods: {
        add: function () {
            this.count++;
        },
        remove: function () {
            this.count--;

        },
        submit: function () {
            for (var key of Object.keys(this.values)) {
                console.log(key + " -> " + this.values[key])
            }
        }


    }
}

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
    grid-template-columns: auto 1fr;
    background-color: rgba(150, 150, 150, .6);
    padding: 1rem;
}

.form-contacto h2 {
    grid-column: 1 / 3;
    text-align: center;
}

#input-puesto,
#input-lugar
{
    grid-column: 1 / 3;
}

.form-contacto label {
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: var(--colortransparencia);
    border-radius: 5px;
    padding: 0 1rem;
}

#input-descripcion {
    background-color: rgba(250, 250, 250, 0.4);
    padding: 5px;
    grid-column: 1 / 3;
    resize: none;
    border: none;
    color: var(--colorprincipal);
    border-radius: 5px;
}

#input-responsabilidad {
    width: 100%;
}

.form-control{
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
}
    .form-control svg{
        transform: rotateZ(45deg);
        color: white;
        background-color: red;
        font-size: 2rem;
        width: 26px;
        height: 26px;
        padding: .15rem;
        cursor: pointer;
        border-radius: 50%;
        margin-left: .5rem;
    }

.btn-add {
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: none;
    background-color: rgba(250, 250, 250, 0.4);
    border-radius: 50%;
    color: white;
    font-size: 2rem;
    cursor: pointer;
}

.btn-add svg {
    padding: .15rem;
}
</style>

<script setup>



</script>