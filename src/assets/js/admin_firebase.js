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
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

//^ Book add --------------------------
const books = ref(database, "books");
const catalog = ref(database, "catalog");

add_book_btn.addEventListener("click", () => {
  //*book type catch

  let arr = [];
  onValue(catalog, (item) => {
    const data = item.val();
    let catagorieArr = Object.entries(data);
    catagorieArr.forEach((item) => {
      arr.push(item[1].bookType);
    });
    if (!arr.includes(type_input.value)) {
      push(catalog, {
        bookType: type_input.value,
      });
    }
  });

  let BookInfo = {
    bookName: book_name_input.value,
    bookAuthor: book_author_input.value,
    bookImg: book_img_input.value,
    bookDescription: book_description_textarea.value,
    bookType: type_input.value,
    isNew: is_new.checked,
  };
  push(books, BookInfo);
  // push(catalog, { bookType: type_input.value });
  // console.log("book obj", BookInfo);
});

onValue(books, (item) => {
  const bookData = item.val();
  let bookDataToArr = Object.entries(bookData);
  // console.log("bookDataToArr", bookDataToArr);
  let bookItem = bookDataToArr
    .map(
      (item, index) =>
        `
          <tr class="a">
              <td class="mobil-id">${index}</td>
              <td class="custom_td">
                  <img class="admin_book_img" src="${item[1].bookImg}" alt="">
                  ${item[1].bookName}
              </td>
              <td class="admin_book_description">
                  <div class="description_body">
                      <p class="description_item">
                          ${item[1].bookDescription}
                      </p>
                  </div>
              </td>
              <td>${item[1].bookType}</td>
              <td>${item[1].bookAuthor}</td>
              <td>
                  <button class="delete_item" data-id="${item[0]}">
                      <i class="material-icons">&#xe872;</i>
                  </button>
              </td>
          </tr>
      `
    )
    .join("");

  books_tbody.innerHTML = bookItem;

  let delete_item = document.querySelectorAll(".delete_item");

  delete_item.forEach((el) =>
    el.addEventListener("click", function () {
      let id = el.dataset.id;
      console.log(id);
      deleteBookDetail(id);
    })
  );
});

// for join Us///

const join_tbody = document.querySelector("#join_tbody");
// console.log("body", join_tbody);

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
          <th>
          <button class="delete_itemUS" data-id="${user[0]}">
          <i class="material-icons">&#xe872;</i>
      </button>
          </th>

        </tr>`
    );
    join_tbody.innerHTML = result.join("");

    let delete_item = document.querySelectorAll(".delete_itemUS");

    delete_item.forEach((el) =>
      el.addEventListener("click", function () {
        let id = el.dataset.id;
        console.log(id);
        deleteUs(id);
      })
    );
  });
}
readData("joinUs");

// contact//

const contactBody = document.querySelector("#contactBody");
function readContact(collection) {
  const readRef = ref(database, collection);
  onValue(readRef, (snapshot) => {
    const data = snapshot.val();
    // console.log("data", data);

    const userArr = Object.entries(data);
    // console.log("userArr", userArr);

    const result = userArr.map(
      (user, index) =>
        `<tr id=${user[1].id}  >
      <th class="mobil-id" >${index + 1}</th>
      <th>${user[1].fullname}</th>
      <th>${user[1].email}</th>
      <th>${user[1].address}</th>
      <th>${user[1].phone}</th>
      <th>
        <button class="delete_itemComment" data-id="${user[0]}">
          <i class="material-icons">&#xe872;</i>
        </button>
      </th>

    </tr>`
    );

    contactBody.innerHTML = result.join("");

    let delete_item = document.querySelectorAll(".delete_itemComment");

    delete_item.forEach((el) =>
      el.addEventListener("click", function () {
        let id = el.dataset.id;
        console.log(id);
        deleteComment(id);
      })
    );
  });
}
readContact("contactUs");

let BookTypeId = document.querySelector("#BookTypeId");

// console.log(BookTypeId);

onValue(catalog, (item) => {
  const data = item.val();
  let arr = Object.entries(data);
  // console.log(arr);
  let result = arr.map(
    (item) =>
      `   <option id="bookTypeOption" value="${item[1].bookType}">${item[1].bookType}</option>
    `
  );
  BookTypeId.innerHTML = result;
});

let bookTypeOption = document.querySelectorAll("#bookTypeOption");
// console.log(bookTypeOption);

BookTypeId.addEventListener("change", () => {
  // console.log(BookTypeId.value);
  type_input.value = BookTypeId.value;
});

function deleteBookDetail(id) {
  let rmv = ref(database, "books/" + id);
  remove(rmv);
}

function deleteUs(id) {
  let rmv = ref(database, "joinUs/" + id);
  remove(rmv);
}

function deleteComment(id) {
  let rmv = ref(database, "contactUs/" + id);
  remove(rmv);
}
