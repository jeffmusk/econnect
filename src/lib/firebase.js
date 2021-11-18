
import { initializeApp } from 'firebase/app';



//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCm0wHE-4-iqyPyV9WS0qcyyw5w_iZ7ufA",
    authDomain: "econnec-xiclica.firebaseapp.com",
    projectId: "econnec-xiclica",
    storageBucket: "econnec-xiclica.appspot.com",
    messagingSenderId: "491613804042",
    appId: "1:491613804042:web:992fea14e9d2a14ff1f1f3"
};

const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;


