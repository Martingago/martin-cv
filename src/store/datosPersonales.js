import { defineStore } from "pinia";
import { db } from "@/hook/firebase.config";
import { collection, query, getDocs } from "firebase/firestore";

export const useStoreDatosPersonales = defineStore("datosPersonales", {
  state: () => {
    return {
        curriculum: [],
        cvdatos:[]
    };
  },
  actions: {
    async setDatosCurriculum() {
      const formacionRef = collection(db, "formacion");
      const cvDatosRef = collection(db, "perfil");
      let consulta = query(formacionRef);
      let resultado = await getDocs(consulta);
      resultado.forEach((fila) => {
         this.curriculum.push(fila.data());
      });
      consulta = query(cvDatosRef);
      resultado = await getDocs(consulta);
      resultado.forEach((fila) => {
         this.cvdatos.push(fila.data());
      });
    },
  },
});
