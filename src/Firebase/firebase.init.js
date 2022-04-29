import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBlCHoMGY6Hz8pC1md4ReTvHLMyStQ8DbI",
  authDomain: "dobybox-dff3a.firebaseapp.com",
  projectId: "dobybox-dff3a",
  storageBucket: "dobybox-dff3a.appspot.com",
  messagingSenderId: "681396097940",
  appId: "1:681396097940:web:8348c1a980cfca7c66b581",
  measurementId: "G-8T3NBJJW2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;