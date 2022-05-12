<template>
  <section class="section-form">
    <form class="form-contacto" action="#" method="POST" autocomplete="off">
      <input
        type="text"
        name="name-usuario"
        id="input-name"
        placeholder="Nombre / Compañía"
        required
      />
      <input
        type="email"
        name="email-usuario"
        id="input-email"
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="subject-usuario"
        id="input-subject"
        placeholder="Asunto"
        required
      />
      <textarea
        id="input-textarea"
        name="message-usuario"
        rows="10"
        placeholder="Mensaje"
        required
      >
      </textarea>
      <input
        type="submit"
        value="enviar"
        name="send-usuario"
        id="submit-usuario"
      />
    </form>
  </section>
</template>

<script>
</script>

<style scoped>
::placeholder {
  color: var(--colorprincipal);
}
.section-form {
  margin: auto;
}
.section-form .form-contacto {
  display: grid;
  margin: auto;
  padding: 2rem 1rem;
  max-width: 700px;
  width: 90%;
  grid-template-columns: 50% 50%;
  gap: 5px;
  font-size: var(--textoparrafo);
  background-color: rgba(250, 250, 250, 0.4);
  backdrop-filter: blur(3px);
  box-shadow: 5px 5px 10px var(--colorprincipal);
  border-radius: 10px;
  
}
.section-form .form-contacto input {
  border: none;
  padding: 5px;
  background-color: rgba(250, 250, 250, 0.4);
  border-radius: 5px;
}
#input-subject {
  grid-column: 1/ 3;
  color: var(--colorprincipal);
}
#input-textarea {
  background-color: rgba(250, 250, 250, 0.4);
  padding: 5px;
  grid-column: 1 / 3;
  resize: none;
  border: none;
  color: var(--colorprincipal);
  border-radius: 5px;
}
#submit-usuario {
  grid-column: 1/ 3;
  margin: .5rem auto 0 auto;
  width: 150px;
  text-transform: uppercase;
  border-radius: 5px;
  transition: transform .2s linear;
  cursor: pointer;
  color: var(--colorprincipal);
  font-weight: 800;
}
#submit-usuario:hover {
  animation: bounce-7 2.4s infinite;
}

@keyframes bounce-7 {
        0%   { transform: scale(1,1)}
        10%  { transform: scale(1.1,.9)}
        30%  { transform: scale(.9,1.1); }
        50%  { transform: scale(1.05,.95)}
        57%  { transform: scale(1,1);}
        64%  { transform: scale(1,1)}
        100% { transform: scale(1,1)}
    }


.section-form .form-contacto input:focus,
.section-form .form-contacto textarea:focus {
  outline: none;
}
@media screen and (max-width: 600px) {
    
    .section-form #input-name{
        grid-column: 1/ 3;
    }
    .section-form #input-email{
        grid-column: 1 / 3;
        width: 100%;
    }
}
</style>