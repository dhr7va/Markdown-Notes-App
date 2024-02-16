import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD3trr91tKiKzaL-NIQmuNChJD1GHdffS4",
    authDomain: "notes-app-da3fb.firebaseapp.com",
    projectId: "notes-app-da3fb",
    storageBucket: "notes-app-da3fb.appspot.com",
    messagingSenderId: "78561828532",
    appId: "1:78561828532:web:95ed7f71638e9aab26c1e1",
    measurementId: "G-1LF23GZRBR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")


