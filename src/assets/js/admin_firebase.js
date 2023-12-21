import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase,set, ref,push,onValue} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAPS3AigURroTi0Ukx6ajBNNLJdRBHsafc",
    authDomain: "library-cc233.firebaseapp.com",
    projectId: "library-cc233",
    storageBucket: "library-cc233.appspot.com",
    messagingSenderId: "704000816650",
    appId: "1:704000816650:web:1733e6f1c3eae7bca2d1f3"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


