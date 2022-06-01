import { defineStore } from "pinia";
import { auth, provider } from "@/hook/firebase.config";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const useStoreUsers = defineStore("users", {
  state: () => {
    return {
      user: null,
    };
  },
  getters: {
    getEmailUser: (state) => {
      if (state.user && state.user.email) return state.user.email;
      else return "No hay usuario";
    },
  },
  actions: {
    signInEmail({ email, password }) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          this.user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, "=>", errorMessage);
        });
    },
    signInGooglePopup(){
      
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        this.user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert(errorMessage);
      });
    },

    logout() {
      signOut(auth)
        .then(() => {
          this.user = null;
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
});
