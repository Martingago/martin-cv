<template>
    <div class="modal-login-user">
      <div class="login-martin-cv">
        <h2>Área de Mantenimiento</h2>
        <img class="admin-img" src="@/assets/img/profile.png" />
        <p>Sólo las cuentas autorizadas pueden acceder aquí</p>
        <span class="user-data">{{ store.getEmailUser }}</span>
      </div>
      <div class="login">
        <h2>Iniciar Sesión</h2>
        <div class="login-user">
          <form class="admin-form" @submit.prevent="autentificar" action="#" id="myForm">
            <font-awesome-icon :icon="['fa', 'user']"></font-awesome-icon>
            <input v-model.trim="form.email" type="email" placeholder="E-mail" id="email" required />
            <font-awesome-icon :icon="['fa', 'key']"></font-awesome-icon>
            <input v-model.trim="form.password" type="password" placeholder="Contraseña" id="contraseña" required />
            <span class="error-section">
              <p v-if="validacionError" class="error-autentificacion">{{validacionError}}</p>
            </span>
            <input type="submit" value="Iniciar Sesión" :disabled="store.user===null?false:true" />
          </form>
        </div>
        <button class="user-disconnect" @click="desconectar">Desconectar</button>
      </div>
    </div>
  
</template>

<script setup>
import { useStoreUsers } from "@/store/users";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
require("@/assets/css/admin-design/index/login.css");

const router = useRouter();

const store = useStoreUsers();
const form = reactive({
  email: "",
  password: "",
});
const validacionError = ref(false)

const autentificar = async () => {
  try {
    validacionError.value = false;
    await store.signInEmail(form);
    router.push({name: 'admin'})
  } catch (error) { 
    validacionError.value = "Datos inicio sesión incorrectos";
  }
};

const desconectar =  async () => {
  store.logout();
};

</script>

<style>

#app{
  grid-template-rows: auto;
}
.header{
  display: none;
}


.user-data{
  width: 100%;
  height: 20px;
  text-align: center;
}

.user-disconnect{
  margin: auto;
  margin-top: 1rem;
}

</style>