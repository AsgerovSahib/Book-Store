//* add book type for home page

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPS3AigURroTi0Ukx6ajBNNLJdRBHsafc",
  authDomain: "library-cc233.firebaseapp.com",
  projectId: "library-cc233",
  storageBucket: "library-cc233.appspot.com",
  messagingSenderId: "704000816650",
  appId: "1:704000816650:web:1733e6f1c3eae7bca2d1f3",
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Gerçek Zamanlı Veritabanını başlat ve servise bir referans al
const database = getDatabase(app);

const books = ref(database, "books");

let home_catalogSection_body = document.querySelector(
  ".home_catalogSection_body"
);

console.log("home_catalogSection_body", home_catalogSection_body);

let uniqueBookTypes = {}; 

onValue(books, (snapshot) => {
  const bookData = snapshot.val();
  let bookDataArr = Object.entries(bookData);


  bookDataArr.forEach((item) => {
    uniqueBookTypes[item[1].bookType] = true;
  });

  let bookType = Object.keys(uniqueBookTypes)
    .map((item) => `
        <button class="home_catalogSection_item">${item}</button>
    `)
    .join("");
  console.log("kitap türü", bookType);
  home_catalogSection_body.innerHTML = bookType;
});