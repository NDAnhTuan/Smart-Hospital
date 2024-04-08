import {doctorController} from '../controllers/doctorController.js';

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
    .then((cred) => {console.log('signInWithEmailAndPassword', cred.user.uid); uid = cred.user.uid})
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