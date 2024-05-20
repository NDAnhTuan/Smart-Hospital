import {

    getDocs, onSnapshot,collection,
    doc, getDoc, query,where,
    addDoc,
  
} from 'firebase/firestore';
import { db } from '../startApp.js';
import {
    getAuth, 
    signOut,    
    signInWithEmailAndPassword
} from 'firebase/auth';


const auth = getAuth();

const logbut = document.getElementsByClassName("img2")[0]
logbut.addEventListener("click", function() {
    signOut(auth).then(() => {
        localStorage.removeItem("uid");
        
        window.location.href = "../../hoang/file_main.html";
    })
})