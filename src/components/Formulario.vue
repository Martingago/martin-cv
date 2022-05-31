<template>
  <section class="section-form" >
    <div v-bind:class="{oculto: confirmation}">
      <form class="form-contacto" action="#" method="POST" autocomplete="off">
        <input type="text" name="name-usuario" id="input-name" placeholder="Nombre / Compañía" required />
        <input type="email" name="email-usuario" id="input-email" placeholder="Email" required />
        <input type="text" name="subject-usuario" id="input-subject" placeholder="Asunto" required />
        <textarea id="input-textarea" name="message-usuario" rows="10" placeholder="Mensaje" required></textarea>
        <input type="submit" value="enviar" name="send-usuario" id="submit-usuario" @click="confirmation = true" />
      </form>
    </div>
    <div v-if="confirmation" class="confirmation-contact">
        <h3>!GENIAL!</h3>
        <p>Tu mensaje se ha enviado con éxito</p>
        <button @click="confirmation = false">Volver</button>
    </div>
  </section>

    
</template>

<script setup>
import { ref } from 'vue';
require('@/assets/css/formulario.css');
const confirmation = ref(false)
</script>

