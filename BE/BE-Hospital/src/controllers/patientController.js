import {

    getDocs, onSnapshot,collection,
    doc
  
} from 'firebase/firestore';
import {db} from '../startApp.js'
class patientController {
    async viewDoctors() {
        
        const allUsers = [];
        try {
            const subcolref = collection(db, 'Users', 'Doctor', 'Data');
            
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

}

export {patientController}