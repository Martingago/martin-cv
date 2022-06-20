import { defineStore } from "pinia";
import { cargarDatos } from "@/hook/firestore.db";
import { getData } from "@/hook/bajarDatos";

export const useStoreProyectos = defineStore("formularios", {
  state: () => {
    return {
      nombre: null,
      descripcion_breve: null,
      descripcion: null,
      enlace: null,
      fecha: null,
      imagen_url: null,
      almacen_imagenes: null,
      datos_proyecto: []
    };
  },
  actions: {
    async cargarProyecto(uid, data) {
      await cargarDatos(uid, data);
    },
    async setDatosProyecto(){
        if(!this.datos_proyecto.length)
          this.datos_proyecto = await getData("martin-proyectos")
          return true;   
    }
  },
});
