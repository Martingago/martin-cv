// Obtener informacion BBDD y mostrar en el CV

import { defineStore } from "pinia";
import { db } from "@/hook/firebase.config";
import { obtenerColeccionImagenes } from "@/hook/firebase.storage";
import { cargarDatosFirebase, eliminarDatosFirebase, obtenerDatosFirebase } from "@/hook/firestore.db";

// Informacion de mi CV
export const useStorePerfilCv = defineStore("idPerfil", {
  state: () => {
    return {
      formaciones: [],
      datosPersonales: [],
      experiencia: [],
      imagenesLenguajes: []
    };
  },
  actions: {
    // Perfil
    async bajarDatosPersonales() {
      if(!this.datosPersonales.length)
      this.datosPersonales = await obtenerDatosFirebase("perfil")
    },
    async cargarDatosPersonales(data) {
        await cargarDatosFirebase("perfil", data)
        return true
    },

    async eliminarDatosPerfil(uid) {
      await eliminarDatosFirebase("perfil", uid)
    },

    //Formacion
    async bajarDatosFormacion() {
      if(!this.formaciones.length)
      this.formaciones = await obtenerDatosFirebase("formacion")
    },
    async cargarDatosFormacion(data) {
        await cargarDatosFirebase("formacion", data)
        return true
    },
    async eliminarDatosFormacion(uid) {
      await eliminarDatosFirebase("formacion", uid)
    },
    //Experiencia laboral

    async subirDatosExperiencia(data) {
      await cargarDatosFirebase("experiencia", data)
    },
    async bajarDatosExperiencia() {
      if (!this.experiencia.length)
        this.experiencia = await obtenerDatosFirebase("experiencia")
        return true
    },
    async eliminarDatosExperiencia(uid) {
      await eliminarDatosFirebase("experiencia", uid)
    },
    //Obtener imagenes de los lenguajes de programación
    async setImagenes(uid) {
      if(!this.imagenesLenguajes.length)
      this.imagenesLenguajes = await obtenerColeccionImagenes(uid)
    }
  },
  getters: {
    getNombreCompleto(state) {
      return `${state.datosPersonales.nombre} ${state.datosPersonales.primer_apellido} ${state.datosPersonales.segundo_apellido}`;
    },
  },
});
