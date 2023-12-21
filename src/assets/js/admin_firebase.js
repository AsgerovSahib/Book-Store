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
const database = getDatabase(app);


//^ Book add --------------------------

add_book_btn.addEventListener("click", () => {
  let BookInfo = {
    bookName: book_name_input.value,
    bookAuthor: book_author_input.value,
    bookImg: book_img_input.value,
    bookDescription: book_description_textarea.value,
    bookType: type_input.value,
    isNew: is_new.checked,
  };
  const books = ref(database, "books");
  push(books, BookInfo);
  console.log("book obj", BookInfo);
});

