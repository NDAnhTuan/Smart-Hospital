
import {

    getDocs, onSnapshot,
  
  } from 'firebase/firestore';
  import {db} from '../startApp.js'
  
  import {
      collection,
      doc
    
    } from 'firebase/firestore';
  // collection ref
  
  class doctorController  {
      constructor() {
          
      }
      // async getUsers() {
      //     const allUsers = [];
      //     try {
      //         const snapshot = await getDocs(Users);
      //         const temp = await Promise.all(
      //             snapshot.docs.map(async (doc) => {
      //               const subcolref = collection(db, 'Users', doc.id, 'Data');
      //               const subsnapshot = await getDocs(subcolref);
                    
      //               // Trích xuất và trả về dữ liệu từ các subdocument
                    
      //               return subsnapshot.docs.map((subdoc) => ({
      //                 id: subdoc.id,
      //                 ...subdoc.data(),
      //               }));
      //             })
      //           );
      //           allUsers.push(...temp.flat());
              
      //     } catch (error) {
      //         console.error("Error fetching data:", error);
      //         // Handle errors appropriately (consider rejecting the Promise)
      //     }
          
      //     return allUsers;
      // }
      async getPatient() {
          console.log("Getting patient");
          const allUsers = [];
          try {
              const subcolref = collection(db, 'Users', 'Patient', 'Data');
              
              const subsnapshot = await getDocs(subcolref);
              subsnapshot.forEach((doc) => {
                  allUsers.push({
                      id: doc.id,
                     ...doc.data(),
                  });
              })
          } catch (error) {
              console.error("Error fetching data:", error);
              // Handle errors appropriately (consider rejecting the Promise)
          }
          return allUsers;
          
      }

      //Medicine
      getMedicine = () => {};
      decreaseQuantifyMedicine = () => {};

      //MedExamSch
      UpdateDiagnosis = () => {};
      viewMyPatientMedExamSch = (id) => {};
      addPrescription = () => {};

      viewDevices = () => {};
      viewOnCallSchedule = (id) => {};
  }
   
  export {doctorController};
  
  
  