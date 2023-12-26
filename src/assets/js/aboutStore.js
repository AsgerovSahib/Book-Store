

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPS3AigURroTi0Ukx6ajBNNLJdRBHsafc",
  authDomain: "library-cc233.firebaseapp.com",
  projectId: "library-cc233",
  storageBucket: "library-cc233.appspot.com",
  messagingSenderId: "704000816650",
  appId: "1:704000816650:web:1733e6f1c3eae7bca2d1f3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);


document.addEventListener("DOMContentLoaded", function () {
  const store_title = document.querySelector(".store_title");
    
  const text = document.querySelector(".text");
    const books = document.querySelector(".books");

    const booksImage = books.querySelector("img");
   
      function readData(collection) {
        const readRef = ref(db, collection);
        onValue(readRef, (snapshot) => {
          const data = snapshot.val();
          console.log("dd",data);
store_title.innerHTML=data.about_title_input ||store_title.textContent

    text.innerHTML=data.about_description_textarea || text.textContent
    booksImage.src=data.about_image_url_input || books.image.textContent
          console.log("sssss",aboutData);

        });
    
      }
      readData("aboutUs");
      


  });

 
