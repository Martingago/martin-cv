import { storage } from "./firebase.config";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";
import { defineStore } from "pinia";

// Obtener la URL de las imagenes del Storage (lenguajes-programacion)

export const listadoImagenes = async (
  uid = "gs://dfdd-227d8.appspot.com/lenguajes-programacion"
) => {
  const listRef = ref(storage, uid);
  const resp = await listAll(listRef);
  const { items } = resp;
  //  Devuelve un array de strings("url")
  return await Promise.all(
    items.map((item) => {
      return getDownloadURL(item);
    })
  );
};


// función para obtener una sola imagen
/**
 * 
 * @param {string} uid //devuelve un string con la url de la imagen 
 * @returns 
 */
export const downloadURL  = async (uid = 'images/stars.jpg') => {
  return await getDownloadURL(ref(storage, uid));
}


export const cargarImagenes = async (uid) => {
  console.log(uid)
  const listRef = ref(storage, uid);
  const resp = await listAll(listRef);
  const {items } = resp;
  return await Promise.all(
    items.map((item) => {
      return getDownloadURL(item)
    })
  )
}


// Subir imagenes al Storage
export const uploadImages = defineStore("subirDatos", {
  state: () => {
    return {
      imagen: null,
    };
  },
  actions: {
    subirImagen({ruta,file}) {
      const storageRef = ref(storage, ruta);
      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });
    },
  },
});


