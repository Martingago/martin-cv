import { storage } from "./firebase.config";
import { ref, getDownloadURL, listAll } from "firebase/storage";

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
