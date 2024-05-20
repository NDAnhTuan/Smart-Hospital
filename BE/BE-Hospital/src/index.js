

import {doctorController} from './controllers/doctorController.js';
import { patientController } from './controllers/patientController.js';
import {
    getAuth, 
    signOut,    
    signInWithEmailAndPassword
} from 'firebase/auth';


const auth = getAuth();
let uid;
signOut(auth);
signInWithEmailAndPassword(auth, 'nguyenducanhtuan0602@gmail.com', '123456abc')
.then((cred) => {//console.log('signInWithEmailAndPassword', cred.user.uid); 
    uid = cred.user.uid})
.catch((error) => {console.log('error: ' + error)})

// var date = new Date(2020, 1, 2);
// var timestamp = date.getTime();
// console.log('date: ' + timestamp);
const app = new doctorController();
const myPromise = await app.addDiagnosis("rrORR0WTQP4da4WyfJeB", "dmdmdmdmdm");

  

