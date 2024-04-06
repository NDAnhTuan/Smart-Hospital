

import {doctorController} from './controllers/doctorController.js';
import { patientController } from './controllers/patientController.js';

const app = new patientController();
const myPromise = await app.viewDoctors();
console.log(myPromise);

  

