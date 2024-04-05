

import {doctorController} from './controllers/doctorController.js';


const app = new doctorController();
const myPromise = await app.getPatient();
console.log(myPromise);

  

