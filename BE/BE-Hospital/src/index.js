

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
.then((cred) => {console.log('signInWithEmailAndPassword', cred.user.uid); uid = cred.user.uid})
.catch((error) => {console.log('error: ' + error)})

var date = new Date(2020, 1, 2);
var timestamp = date.getTime();
console.log('date: ' + timestamp);
// const app = new patientController();
// const myPromise = await app.addMedExamSch("hi", "hi", "3goKrkzQIqSCoP1t64kNieRh8AG2", "05420700984", );
// // console.log(myPromise);

  

