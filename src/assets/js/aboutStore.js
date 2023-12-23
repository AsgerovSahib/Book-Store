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
    // const newStoretitle = localStorage.getItem("aboutTitle") || store_title.textContent
    // const newText = localStorage.getItem("aboutDesc") || text.textContent

  // const newImage = localStorage.getItem("aboutImg") || books.image.textContent;
  
    store_title.innerHTML = newStoretitle;
    text.innerHTML = newText;
    
    if (booksImage) {
        booksImage.src = newImage;
      }
  });

  function readData(collection) {
    const readRef = ref(database, collection);
    onValue(readRef, (snapshot) => {
      const data = snapshot.val();
      const userArr = Object.entries(data);
const newStoretitle=user[1]


      // let result = userArr.map(
      //   (user, index) =>
      //     `<tr  id="${user[1].id}}">
      //       <th class="mobil-id">${index + 1}</th>
      //       <th>${user[1].joinName}</th>
      //       <th>${user[1].joinEmail}</th>
      //     </tr>`
      // );
      // join_tbody.innerHTML = result.join("");
    });
  }
  readData("aboutUs");
  