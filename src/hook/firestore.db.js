import { db } from "./firebase.config";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";


/**
 * @param {string} uid id/nombre de la colección a la que se quieren mandar los datos
 * @param {object} datos se almacena la informacion de los campos del formulario. ej:
 * {nombre: "",
 * apellidos: "",
 * asunto: ""}
 * @returns {object} devuelve el objeto con un ID añadido
 */
export const cargarDatosFirebase = async (uid, datos) => {
  const data = {
    id: Date.now(),
    ...datos,
  }
  const docRef = await addDoc(collection(db, uid), data);
  return data;
};


/**
 * @param {string} uid id/nombre de la coleccion de la que queremos extraer los datos
 * @returns {array} contiene objetos que son los datos de la coleccion de firebase
 */
export const obtenerDatosFirebase = async (uid) => {
  const querySnapshot = await getDocs(collection(db, uid));
  const temporal = [];
  querySnapshot.forEach((doc) => {
    temporal.push({
      idCollection: doc.id,
      ...doc.data(), //destructuring - datos que se encuentran en firebase
    })
  });
  return temporal;
}


/**
 * 
 * @param {string} collection nombre de la colección en la cual queremos borrar el elemento
 * @param {string} uid id/nombre del elemento que queremos eliminar
 */
export const eliminarDatosFirebase = async (collection, uid) => {
  await deleteDoc(doc(db,collection,uid))
}