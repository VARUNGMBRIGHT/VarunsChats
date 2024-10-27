
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFndu8eyvS7Ck8Kd26LvmPnkMV5a-ZR90",
  authDomain: "reactchat-81b98.firebaseapp.com",
  projectId: "reactchat-81b98",
  storageBucket: "reactchat-81b98.appspot.com",
  messagingSenderId: "633368892742",
  appId: "1:633368892742:web:4197045fe403d733930147"
};





const app = initializeApp(firebaseConfig);

export const auth = getAuth() 
export const db = getFirestore()
export const storage = getStorage()