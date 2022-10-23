import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/';
 
const firebaseConfig = {
 apiKey: "AIzaSyDnQ_7D1O7unit_ML2-vOnygCZPD97Yjkc",
 authDomain: "clonapastebin.firebaseapp.com",
 databaseURL: "https://clonapastebin-default-rtdb.europe-west1.firebasedatabase.app",
 projectId: "clonapastebin",
 storageBucket: "clonapastebin.appspot.com",
 messagingSenderId: "514326737107",
 appId: "1:514326737107:web:4e4b26a799930ba0672426",
 measurementId: "G-52T2SEEF1Y"
};
 
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);