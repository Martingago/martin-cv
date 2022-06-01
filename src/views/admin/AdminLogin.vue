<template>
  <div class="modal-login-user">
    <div class="login-martin-cv">
      <h2>Área de Mantenimiento</h2>
      <img class="admin-img" src="@/assets/img/profile.png" />
      <p>Sólo las cuentas autorizadas pueden acceder aquí</p>
      {{store.getEmailUser}}
    </div>
    <div class="login">
      <h2>Iniciar Sesión</h2>
      <div class="login-user">
        <form class="admin-form" @submit.prevent="autentificar" action="#" id="myForm">
          <font-awesome-icon :icon="['fa', 'user']"></font-awesome-icon>
          <input v-model="form.email" type="email" placeholder="E-mail"  id="email" required  />
          <font-awesome-icon :icon="['fa', 'key']"></font-awesome-icon>
          <input v-model="form.password" type="password" placeholder="Contraseña" id="contraseña" required />
          <input type="submit" value="Iniciar Sesión"/> 
        </form>
      </div>
      <div class="login-social">
        <p>También puedes iniciar con:</p>
        <button class="login-google" @click="autentificarGooglePopup">
          <img src="@/assets/img/google-logo.svg" alt="logotipo de google" />
          Continuar con Google
        </button>
      </div>
      <input type="submit" value="logout" @click="desconectar">
    </div>
  </div>
</template>


<script setup>
import { useStoreUsers } from '@/store/users';
import {reactive} from 'vue';
require('@/assets/css/admin-design/login.css');

const store = useStoreUsers();
const form = reactive({
    email: '',
    password: ''

})

const autentificar = () => {
    store.signInEmail(form)
}
const autentificarGooglePopup = () => {
    store.signInGooglePopup()
}

const desconectar = () => {
    store.logout()
}

</script>
