import { defineStore } from "pinia";
import { cargarDatosFirebase, obtenerDatosFirebase, eliminarDatosFirebase } from "@/hook/firestore.db";

export const storeExperienciaCv = defineStore("experiencia", {
    state: () => {
        return {
            experiencia: []
        }
    },
    actions: {
        async subirDatosExperiencia(data) {
            await cargarDatosFirebase("experiencia", data)
        },
        async bajarDatosExperiencia() {
            this.experiencia = await obtenerDatosFirebase("experiencia")
        },
        async eliminarDatosExperiencia(uid) {
            await eliminarDatosFirebase("experiencia", uid)
        }
    }
})