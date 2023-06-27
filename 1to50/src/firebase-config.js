import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDkcWQZF9yzDe13tG40kIeMZxT9W6jtBIU",
    authDomain: "to50-74b77.firebaseapp.com",
    projectId: "to50-74b77",
    storageBucket: "to50-74b77.appspot.com",
    messagingSenderId: "916306733764",
    appId: "1:916306733764:web:ad63e2745be2eee5aeb791",
    measurementId: "G-009CJDJ8QW"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);