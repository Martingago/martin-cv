import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6KVYQoGB9McOcoFDrpirvUZ94cZqRU-Y",
  authDomain: "dfdd-227d8.firebaseapp.com",
  projectId: "dfdd-227d8",
  storageBucket: "dfdd-227d8.appspot.com",
  messagingSenderId: "205161990835",
  appId: "1:205161990835:web:032059532861f40959bec6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app)
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert(user.displayName);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage)
  });
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};
