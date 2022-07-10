import { defineStore } from "pinia";
import { cargarDatosFirebase, obtenerDatosFirebase, eliminarDatosFirebase } from "@/hook/firestore.db";
import { subirImagenStorage, eliminarImagenStorage} from "@/hook/firebase.storage";

export const useStoreProyectos = defineStore("proyectos", {
  state: () => {
    return {
      datos_proyecto: []
    };
  },
  actions: {
    async subirProyecto(data) {
      await cargarDatosFirebase("martin-proyectos", data);
    },
    async bajarDatosProyecto(uid){
        if(!this.datos_proyecto.length)
          this.datos_proyecto = await obtenerDatosFirebase(uid)
          return true;   
    },
    async eliminarDatosProyecto(uid){
      await eliminarDatosFirebase("martin-proyectos", uid)
    },
    async subirImagenProyecto({ruta, file}) {
      await subirImagenStorage({ruta, file})
    },
    async eliminarImagenesProyecto(uid){
      await eliminarImagenStorage("proyectos-programacion/" ,uid)
    }
  },
});
