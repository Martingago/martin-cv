import { defineStore } from "pinia";
import { auth } from "@/hook/firebase.config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

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
