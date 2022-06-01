
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6KVYQoGB9McOcoFDrpirvUZ94cZqRU-Y",
  authDomain: "dfdd-227d8.firebaseapp.com",
  projectId: "dfdd-227d8",
  storageBucket: "dfdd-227d8.appspot.com",
  messagingSenderId: "205161990835",
  appId: "1:205161990835:web:032059532861f40959bec6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Login usuario mediante correo electronico
const auth = getAuth();


  export { db };
  export {auth}

