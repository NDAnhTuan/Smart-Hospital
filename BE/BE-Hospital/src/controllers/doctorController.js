
import {

  getDocs,

} from 'firebase/firestore';
import {db} from '../startApp.js'

import {
    collection,
  
  } from 'firebase/firestore';
// collection ref
const colRef = collection(db, 'Users');
const doctorController = {
    
    getUsers: async () => {
        const books = [];
        try {
            const snapshot = await getDocs(colRef);
            snapshot.forEach((doc) => {
                books.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            return books; // Return the processed data within the Promise
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle errors appropriately (consider rejecting the Promise)
        }
    }
}
export {doctorController};


