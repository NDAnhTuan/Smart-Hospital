import {

    getDocs, onSnapshot,collection,
    doc
  
} from 'firebase/firestore';
import {db} from '../startApp.js'
class managerController {
    getUsers = () => {};
    //Doctor
    getDoctors = () => {};
    addDoctor = () => {};
    deleteDoctor = () => {};
    updateDoctor = () => {};

    //Patient
    addPatient = () => {};
    deletePatient = () => {};
    updatePatient = () => {};

    //Orther
    addIDDoctorToMedExamSch = (idDoctor) => {};
    addOnCallSchedule = () => {};

    //Device
    addDevice = () => {};
    deleteDevice = () => {};
    updateDevice = () => {};
    

    //Medicine
    addMedicine = () => {};
    deleteMedicine = () => {};
    updateMedicine = () => {};
    increaseQuantity = () => {};
}
