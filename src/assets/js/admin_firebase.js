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

// for join Us///



const join_tbody = document.querySelector("#join_tbody");
console.log("body", join_tbody);

function readData(collection) {
  const readRef = ref(database, collection);
  onValue(readRef, (snapshot) => {
    const data = snapshot.val();
    const userArr = Object.entries(data);
    let result = userArr.map(
      (user, index) =>
        `<tr  id="${user[1].id}}">
          <th class="mobil-id">${index + 1}</th>
          <th>${user[1].joinName}</th>
          <th>${user[1].joinEmail}</th>
        </tr>`
    );
    join_tbody.innerHTML = result.join("");
  });
}
readData("joinUs");

// contact//

const contact_tbody = document.querySelector("#contact_tbody");
function readContact(collection) {
  const readRef = ref(database, collection);
  onValue(readRef, (snapshot) => {
    const data = snapshot.val();
    console.log("data", data);
    
      const userArr = Object.entries(data)
      console.log("userArr", userArr);

      const result = userArr.map((user,index) => 
   
      `<tr id=${user[1].id}  >
      <th class="mobil-id" >${index+1}</th>
      <th>${user[1].fullname}</th>
      <th>${user[1].email}</th>
      <th>${user[1].address}</th>
      <th>${user[1].phone}</th>

    </tr>`)
        
          contact_tbody.innerHTML =result.join("").
      console.log("userData", userData);
    
  });
}
readContact("contactUs");
