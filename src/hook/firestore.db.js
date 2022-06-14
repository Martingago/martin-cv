import { db } from "./firebase.config";
import { collection, addDoc, Timestamp } from "firebase/firestore";


/**
 * 
 * @param {String} uid Ruta en firestore donde almaceno datos 
 * @param {Object} datos Objeto de propiedades/campo => valor donde almacenos los datos. Ejemplo:   { nombre: "", descripcion_breve: "", descripcion: "", fecha: Timestamp}
 */
export const cargarDatos = async (uid="martin-proyectos",datos) => {
  const docRef = await addDoc(collection(db, uid),datos);
}



 