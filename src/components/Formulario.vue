<template>
  <section class="section-form">
    <form class="form-contacto" action="#" method="POST" autocomplete="off">
      <input type="text" name="name-usuario" id="input-name" placeholder="Nombre / Compañía" required />
      <input type="email" name="email-usuario" id="input-email" placeholder="Email" required />
      <input type="text" name="subject-usuario" id="input-subject" placeholder="Asunto" required />
      <textarea id="input-textarea" name="message-usuario" rows="10" placeholder="Mensaje" required>
      </textarea>
      <input type="submit" value="enviar" name="send-usuario" id="submit-usuario" />
    </form>
  </section>
</template>

<script setup>
require('@/assets/css/formulario.css')
</script>
