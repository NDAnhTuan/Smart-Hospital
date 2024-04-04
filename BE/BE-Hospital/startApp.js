import {initializeApp} from 'firebase/app';
import {
  getFirestore,

} from 'firebase/firestore';
import {firebaseConfig} from './config/db/index.js';

// init firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore();
console.log('Hello world');
export {db};
