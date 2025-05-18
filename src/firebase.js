import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDcprZxGCT1WaBPkY89p1ojjWigDysD6eU",
  authDomain: "tema-1-9823a.firebaseapp.com",
  databaseURL: "https://tema-1-9823a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tema-1-9823a",
  storageBucket: "tema-1-9823a.firebasestorage.app",
  messagingSenderId: "929443092733",
  appId: "1:929443092733:web:2b2926bfe95bae443f0694"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
