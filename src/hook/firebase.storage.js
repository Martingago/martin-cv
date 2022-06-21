import { storage } from "./firebase.config";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";


// función para obtener una sola imagen
/**
 * 
 * @param {string} uid  id/nombre de la imagen que queremos visualizar
 * @returns devuelve un string con la url de la imagen
 */
export const obtenerImagen = async (uid) => {
  return await getDownloadURL(ref(storage, uid));
}

/**
 * Función para obtener todas las imagenes de una colección
 * @param {string} uid id/nombre de la coleccion de imagenes que queremos visualizar
 * @returns {array} que contiene STRINGS con las URL de las imagenes dentro de la colección
 */
export const obtenerColeccionImagenes = async (uid) => {
  const listRef = ref(storage, uid);
  const resp = await listAll(listRef);
  const { items } = resp;
  return await Promise.all(
    items.map((item) => {
      return getDownloadURL(item)
    })
  )
}

/**
 * 
 * @param {string} ruta direccion en la que se va a subir la imagen
 * @param {*} file archivo?
 */
export const subirImagenStorage = async ({ruta, file}) => {
  const storageRef = ref(storage, ruta);
  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
}






