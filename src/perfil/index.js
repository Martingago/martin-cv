// Obtener informacion BBDD y mostrar en el CV

import { defineStore } from "pinia";
import { db } from "@/hook/firebase.config";
import { doc, collection, query, getDocs, getDoc } from "firebase/firestore";

export const useStorePerfilCv = defineStore("idPerfil", {
  state: () => {
    return {
      formaciones: [],
      datosPersonales: {
        nombre: "nombre",
        apellido1: "apellido",
        apellido2: "apellido",
        nacimiento: null,
        telefono: "telefono",
        email: "email",
        about: "sobre mi",
        descripcion: "puesto",
      },
      experiencia: [],
    };
  },
  actions: {
    async setDatosPersonales() {
      const docRef = doc(db, "perfil", "7xygBNTdtxd1ffR9fK2D");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        for (let indice in this.datosPersonales) {
          if (docSnap.data()[indice])
            this.datosPersonales[indice] = docSnap.data()[indice];
        }
      } else {
        console.log("No such document!");
      }
    },
    async setFormacion() {
      this.formaciones = [];
      const q = query(collection(db, "formacion"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.formaciones.push(doc.data());
      });
    },
    async setExprerienciaLaboral() {
      this.experiencia = [];
      const q = query(collection(db, "experiencia"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        this.experiencia.push(doc.data());
      });
    },
  },
  getters: {
    getNombreCompleto(state) {
      return `${state.datosPersonales.nombre} ${state.datosPersonales.apellido1} ${state.datosPersonales.apellido2}`;
    },
  },
});
