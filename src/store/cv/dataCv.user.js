// Obtener informacion BBDD y mostrar en el CV

import { defineStore } from "pinia";
import { db } from "@/hook/firebase.config";
import { doc, collection, query, getDocs, getDoc } from "firebase/firestore";
import { obtenerColeccionImagenes } from "@/hook/firebase.storage";
import { cargarDatosFirebase, eliminarDatosFirebase } from "@/hook/firestore.db";

// Informacion de mi CV
export const useStorePerfilCv = defineStore("idPerfil", {
  state: () => {
    return {
      formaciones: [],
      datosPersonales: []
    };
  },
  actions: {
    // Perfil
    async setDatosPersonales() {
      this.datosPersonales = []
      const q = query(collection(db, "perfil"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.datosPersonales.push({
          idCollection: doc.id,
          ...doc.data()});
      });
    },
    async cargarDatosPersonales(uid){
      await cargarDatosFirebase("perfil", uid)
    },

    async eliminarDatosPerfil(uid){
      await eliminarDatosFirebase("perfil", uid)
    },

    //Formacion
    async setFormacion() {
      this.formaciones = [];
      const q = query(collection(db, "formacion"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.formaciones.push({
          idCollection: doc.id,
          ...doc.data()});
      });
    },
    async cargarDatosFormacion(uid){
      await cargarDatosFirebase("formacion", uid)
    },
    async eliminarDatosFormacion(uid){
      await eliminarDatosFirebase("formacion", uid)
    },


    async setExprerienciaLaboral() {
      const q = query(collection(db, "experiencia"));
      const querySnapshot = await getDocs(q);
      this.experiencia = [];
      querySnapshot.forEach((doc) => {
        this.experiencia.push({
          idCollection: doc.id,
          ...doc.data()
        });
      });
    },
    async setImagenes(uid) {
      await obtenerColeccionImagenes(uid)
    }
  },
  getters: {
    getNombreCompleto(state) {
      return `${state.datosPersonales.nombre} ${state.datosPersonales.primer_apellido} ${state.datosPersonales.segundo_apellido}`;
    },
  },
});
