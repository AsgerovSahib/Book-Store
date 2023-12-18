// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import { error, log } from "console";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAPS3AigURroTi0Ukx6ajBNNLJdRBHsafc",
//   authDomain: "library-cc233.firebaseapp.com",
//   projectId: "library-cc233",
//   storageBucket: "library-cc233.appspot.com",
//   messagingSenderId: "704000816650",
//   appId: "1:704000816650:web:1733e6f1c3eae7bca2d1f3",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);
console.log("giris search js");
//^  selector
let admin_search_input = document.querySelector("#admin_search_input");
let admin_search_button = document.querySelector("#admin_search_button");
let admin_result = document.querySelector("#admin_result");
let book_name_input = document.querySelector("#book_name_input");
let book_author_input = document.querySelector("#book_author_input");
let book_img_input = document.querySelector("#book_img_input");
let book_description_textarea = document.querySelector(
  "#book_description_textarea"
);
let about_title_input = document.querySelector("#about_title_input");
let about_image_url_input = document.querySelector("#about_image_url_input");
let about_description_textarea = document.querySelector(
  "#about_description_textarea"
);

//^-----------------------------------------------------------------------

//*  SEARCH JS

admin_search_button.addEventListener("click", async function (e) {
  e.preventDefault();
  admin_result.innerHTML = "";
  let value = admin_search_input.value;

  try {
    let respons = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}`
    );
    let data = await respons.json();
    console.log(data);
    admin_result.classList.add("active");

    data.items.map((item) => {
      let items = `
            <div onclick="getData('${item.id}')" class="admin_result_item">
                ${item.volumeInfo.title}
            </div>
        `;
      admin_result.innerHTML += items;
      console.log(items);
    });
  } catch (error) {
    console.log(error);
  }
});

// https://www.googleapis.com/books/v1/volumes?q=
async function getData(id) {
  try {
    let respons = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    let data = await respons.json();
    console.log(data);
    book_name_input.value = data.volumeInfo.title;
    book_author_input.value = data.volumeInfo.authors[0];
    book_img_input.value = data.volumeInfo.imageLinks.thumbnail;
    book_description_textarea.value = data.volumeInfo.description;
  } catch (error) {
    console.log(error);
  }
}
