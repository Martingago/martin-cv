
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
const provider = new GoogleAuthProvider();

// Crea una pestaña emergente para que el usuario pueda ingresar correo y contraseña
const auth = getAuth();
 signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
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
  });

// Permite al usuario desloguearse

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});