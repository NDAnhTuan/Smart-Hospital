import {doctorController} from '../controllers/doctorController.js';
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
let uid;


const formLogin = document.getElementsByClassName('log-in')[0];
const enterLogin = document.getElementsByClassName('enter')[0];

async function handleLogin() {
    var username = document.getElementById('User-name').value
    var password = document.getElementById('Password').value
    await signInWithEmailAndPassword(auth, username, password)
    .then((cred) => {console.log('signInWithEmailAndPassword', cred.user.uid);
     uid = cred.user.uid;
     localStorage.setItem("uid", uid);
    })
    .then( async () => {
        const allUsers = [];
          try {
              const subcolrefMana = collection(db, 'Users', 'Manager', 'Data');
        
              const subsnapshot = await getDocs(subcolrefMana);
              subsnapshot.forEach((doc) => {
                 if (doc.id === uid) {
                    allUsers.push({
                        id: doc.id,
                       ...doc.data(),
                    });
                }
              })
              if (allUsers.length > 0) {
                window.location.href = '../Kim/index.html'
              } 
              else {
                window.location.href = '../thinh/btl-ltnc/bs.html'
              }
          } catch (error) {
              console.error("Error fetching data:", error);
              // Handle errors appropriately (consider rejecting the Promise)
          }
    })
    .catch((error) => {
        console.log('error: ' + error)
        alert('Tài khoản hoặc mật khẩu không chính xác')
    })
    return;
}

enterLogin.addEventListener('click', () => {
    handleLogin()
    .then(() => console.log(uid))
 
}) 

export {uid}