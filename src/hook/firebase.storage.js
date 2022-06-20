import { storage } from "./firebase.config";
import { ref, getDownloadURL, listAll, uploadBytes } from "firebase/storage";
import { defineStore } from "pinia";


// función para obtener una sola imagen
/**
 * 
 * @param {string} uid //devuelve un string con la url de la imagen 
 * @returns 
 */
export const downloadURL  = async (uid) => {
  return await getDownloadURL(ref(storage, uid));
}

// Obtener la URL de las imagenes del Storage 
export const cargarImagenes = async (uid) => {
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


