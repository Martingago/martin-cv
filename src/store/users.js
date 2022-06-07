import { defineStore } from "pinia";
import { auth, provider } from "@/hook/firebase.config";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, } from "firebase/auth";

// Credenciales de los usuarios
export const useStoreUsers = defineStore("users", {
  state: () => {
    return {
      user: null,
    };
  },
  getters: {
    getEmailUser: (state) => {
      if (state.user && state.user.email) return state.user.email;
      else return "";
    },
  },
  actions: {
    async signInEmail({ email, password }) {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      this.user = userCredential.user;
    },
    signInGooglePopup() {
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
    logged() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          // ...
        } else {
          this.user = null;
        }
      });
    },
  },
});
