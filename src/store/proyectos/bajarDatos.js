import { db } from "@/hook/firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";


export const obtenerDB = async (uid) => {
    const q = query(collection(db, uid))
    const querySnapshot = await getDocs(q);
    let tmp = [];
    
    querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   //console.log(doc.id, " => ", doc.data());
    tmp.push(doc.data())    
    });
    return tmp;
}
