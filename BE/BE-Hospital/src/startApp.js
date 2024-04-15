import {firebaseConfig} from './config/db/index.js';
import { initializeApp } from '@firebase/app';
import {
    getFirestore,
  
  } from 'firebase/firestore';
initializeApp(firebaseConfig);
const db = getFirestore();

export {db};