import { defineStore } from "pinia";
import { db } from "@/hook/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const useStoreProfile = defineStore("profile", {
  state: () => {
    return {
        datosPersonales: null
    };
  },
  actions: {
      async conseguirDatos(){
          const docRef = doc(db, "perfil", "7xygBNTdtxd1ffR9fK2D")
          const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                console.log("document data", docSnap.data())
                this.datosPersonales = docSnap.data();
            }else{
                console.log("no hay documento")
                this.datosPersonales = null
            }
      }
  }
});
