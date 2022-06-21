import { defineStore } from "pinia";
import { auth } from "@/hook/firebase.config";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, } from "firebase/auth";

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
    logout() {
      signOut(auth)
        .then(() => {
          this.user = null;
        })
        .catch((error) => {
          // An error happened.
        });
        return user
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
