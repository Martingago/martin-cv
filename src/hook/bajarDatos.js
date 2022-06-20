import { db } from "@/hook/firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";


export const getData = async (uid) => {
    const q = query(collection(db, uid))
    const querySnapshot = await getDocs(q);
    let tmp = [];
    querySnapshot.forEach((doc) => {
    //   //console.log(doc.id, " => ", doc.data());
    tmp.push(doc.data())    
    });
    return tmp;
}
