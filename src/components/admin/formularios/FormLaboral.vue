<template>
  <section class="section-form">
    <form @submit.prevent="guardarDatos" class="form-contacto" action="#" method="POST" autocomplete="off">
    <h2>Datos formacion</h2>
      <input
        type="text"
        name="formacion"
        id="input-formacion"
        placeholder="Formacion"
        required
      />
      <input
        type="text"
        name="lugar"
        id="input-lugar"
        placeholder="Lugar"
        required
      />
      <label for="fechaInicio">Fecha inicio</label>
      <input
        type="date"
        name="fechaInicio"
        id="input-fechaInicio"
        placeholder="Fecha inicio"
        required
      />
      <label for="fechaFin">Fecha fin</label>
      <input
        type="date"
        name="fechaFin"
        id="input-fechaFin"
        placeholder="Fecha inicio"
        required
      />
      <textarea
        id="input-descripcion"
        name="descripcion"
        rows="2"
        placeholder="Descricion"
        required
      ></textarea>

      <input
        type="submit"
        value="subir datos"
        name="send-usuario"
        id="submit-usuario"
      />
    </form>
  </section>
</template>

<script>

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

.form-contacto h2{
  grid-column: 1 / 3;
  text-align: center;
}

#input-formacion,
#input-lugar {
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
</style>

