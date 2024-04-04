

import {doctorController} from './controllers/doctorController.js';



const myPromise = await doctorController.getUsers();
console.log(myPromise);
  

