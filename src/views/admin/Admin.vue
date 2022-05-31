<template>
    <div class="modal-login-user">
        <div class="login-martin-cv">
            <h2>Área de Mantenimiento</h2>
            <img class="admin-img" src="@/assets/img/profile.png">
            <p>Sólo las cuentas autorizadas pueden acceder aquí</p>
        </div>
        <div class="login">
            <h2>Iniciar Sesión</h2>
            <div class="login-user">
                <form class="admin-form">
                    <font-awesome-icon :icon="['fa', 'user']"></font-awesome-icon> <input type="email"
                        placeholder="E-mail" required>
                    <font-awesome-icon :icon="['fa', 'key']"></font-awesome-icon> <input type="password"
                        placeholder="Contraseña" required>
                    <input type="submit" value="Iniciar Sesión">
                </form>
            </div>
            <div class="login-social">
                <p>También puedes iniciar con: </p>
                <button class="login-google" @click="cargarPopup()"><img src="@/assets/img/google-logo.svg" alt="logotipo de google"> Continuar con Google</button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6KVYQoGB9McOcoFDrpirvUZ94cZqRU-Y",
  authDomain: "dfdd-227d8.firebaseapp.com",
  projectId: "dfdd-227d8",
  storageBucket: "dfdd-227d8.appspot.com",
  messagingSenderId: "205161990835",
  appId: "1:205161990835:web:032059532861f40959bec6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app)

const cargarPopup =() => { signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert(user.displayName);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage)
  });
// Initialize Cloud Firestore and get a reference to the service
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}

</script>

<style scoped>

.modal-login-user {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin: auto;
    width: 90vw;
    max-width: 900px;
    height: 500px;
    background-color: white;
    box-shadow: 5px 5px 10px gray;
    border-radius: 5px;
}
.login-martin-cv{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    background-color: rgba(100, 100, 100, .3);
    padding: 1rem;
}
.login-martin-cv .admin-img{
    border-radius: 50%;
    width: 70%;
    margin: auto
}
.login-martin-cv p{
    font-size: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
}

h2 {
    text-align: center;
    text-transform: uppercase;
}
.login{
    padding: 1rem;
}
.login-user {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
}

.admin-form {
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 2rem 1rem;
    max-width: 350px;
    min-width: 300px;
    gap: .5rem;
    border-radius: 5px;
}

.admin-form ::placeholder {
    color: rgba(100, 100, 100, 1);
}

.admin-form svg {
    margin: auto;
    color: rgba(100, 100, 100, 1);
    font-size: 1.5rem;
    width: fit-content;
}

.admin-form input[type=email],
.admin-form input[type=password] {
    font-size: 1.3rem;
    line-height: 1.3rem;
    border: none;
    background-color: transparent;
    color: rgba(100, 100, 100, 1);
    border-bottom: .3rem solid rgba(100, 100, 100, .3);
    margin-bottom: .5rem;
    transition: border .3s linear;
}

.admin-form input[type=email]:focus,
.admin-form input[type=password]:focus {
    outline: none;
    border-bottom: .3rem solid rgba(100, 100, 100, 1);
}

.admin-form input[type=email]:required:valid,
.admin-form input[type=password]:required:valid {
    border-bottom: .3rem solid green;
}

.admin-form input[type=email]:hover,
.admin-form input[type=password]:hover {
    border-bottom: .3rem solid rgba(100, 100, 100, 1);
}

.admin-form input[type=submit] {
    grid-column: 1/ 3;
    width: fit-content;
    margin: 1rem auto auto auto;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    padding: .5rem;
    background-color: rgba(100, 100, 100, .3);
    cursor: pointer;
    transition: all .3s linear;
}

.admin-form input[type=submit]:hover {
    background-color: rgba(100, 100, 100, 1);
    color: white;
}
/* Login social */
.login-social{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    align-items: center;
}
.login-google {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: none;
    padding: 1rem 3rem;
    border-radius: 15px;
    cursor: pointer;
    background-color: rgba(100, 100, 100, .3);
    transition: background-color .3s linear;
    color: white;
    font-size: 1rem;
    line-height: 1rem;
}
.login-google:hover{
    background-color: rgba(100, 100, 100, 1);
}
.login-google img{
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translate(-50% , -50%);
    padding: .25rem .5rem;
    color: white;
    width: 3rem;
    height: 3rem;
}

@media screen and (max-width:900px) {
    .modal-login-user{
        grid-template-columns: auto;
        height: fit-content;
        width: 90vw;
        max-width: 500px;
    }
    .login h2, .login-martin-cv h2{
        font-size: clamp(1.3rem, 2vw, 2rem);
        line-height: clamp(1.3rem, 2vw, 2rem);
    }
    .login-martin-cv .admin-img{
        margin: 1rem auto;
        width: 60%;
    }

    
    .login{
        padding:  2rem 0;
    }
    .admin-form svg{
        font-size: 1.5rem;
    }
    .admin-form input[type="email"], .admin-form input[type="password"]{
        font-size: 1rem;
    }
    
}
</style>