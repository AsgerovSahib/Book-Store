console.log("search page js girish");
//*in firebase
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

const books = ref(database, "books");

let list_search = document.getElementById("list-search");

const bookAdminItem = `
    <div class="item-search">
    <div class="avatar-search">
        <img src="../../assets/icons/book.svg">
    </div>
        <div class="content-slider-search">
                <h2>Order in Chaos</h2>
                <p class="content-search-name">Konstantin Koptelov</p>
                <p class="content-search-about">We work without holidays and weekends! Residents of Kiev can receive an order on the day of its registration. Customers from other cities of Ukraine can receive an order within 1-5 days, depending on the location of the settlement and the selected delivery method. Orders over UAH 1000 are delivered  free of charge *. You can see the available methods, exact terms and cost of delivery during checkout in the order basket, after selecting the delivery city</p>
        </div>
    </div>
    `;
list_search.innerHTML = bookAdminItem;

//^ selectors
let search_input = document.querySelector("#search_input");
let search_button = document.querySelector("#search_button");

//*Search button
// search_button.addEventListener("click", (e) => {
//   e.preventDefault();
//   callBook(search_input.value);
// });

const callBook = (name) => {
  console.log(name);
};

// //& search
search_button.addEventListener("click", async function (e) {
  e.preventDefault();
  let value = search_input.value;
  search_input.innerHTML = "";
  onValue(books, (item) => {
    const bookData = item.val();
    let bookDataToArr = Object.entries(bookData);
    console.log("bookDataToArr", bookDataToArr);

    let calledItem = bookDataToArr.filter((item) =>
      item[1].bookName.toLowerCase().includes(value.toLowerCase())
    );

    // let calledItem = bookDataToArr.filter((item) => item[1].bookName == value);
    console.log(calledItem);
    let dataİtem = calledItem
      .map(
        (item, index) =>
          `
                      <div class="item-search">
                      <div class="avatar-search">
                          <img src="${item[1].bookImg}">
                      </div>
                          <div class="content-slider-search">
                                  <h2>${item[1].bookName}</h2>
                                  <p class="content-search-name">${item[1].bookAuthor}</p>
                                  <p class="content-search-about">${item[1].bookDescription}</p>
                          </div>
                      </div>
                  `
      )
      .join("");

    list_search.innerHTML = dataİtem;
  });
});

//   try {
//     let respons = await fetch(
//       `https://www.googleapis.com/books/v1/volumes?q=${value}`
//     );
//     let data = await respons.json();
//     console.log(data);
//     let result = data.items
//       .map(
//         (item, index) =>
//           `
//               <div class="item-search">
//               <div class="avatar-search">
//                   <img src="${item.volumeInfo}">
//               </div>
//                   <div class="content-slider-search">
//                           <h2>${item[1].book_name}</h2>
//                           <p class="content-search-name">${item[1].book_author}</p>
//                           <p class="content-search-about">${item[1].book_description}</p>
//                   </div>
//               </div>
//           `
//       )
//       .join("");
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
