import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAPS3AigURroTi0Ukx6ajBNNLJdRBHsafc",
    authDomain: "library-cc233.firebaseapp.com",
    databaseURL: "https://library-cc233-default-rtdb.firebaseio.com",
    projectId: "library-cc233",
    storageBucket: "library-cc233.appspot.com",
    messagingSenderId: "704000816650",
    appId: "1:704000816650:web:1733e6f1c3eae7bca2d1f3",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let book_url = window.location.hash;
let book_length = book_url.length;
let book_id = book_url.slice(4, book_length);
const book_name = document.querySelector(".book_name")
const book_author = document.querySelector(".book_author")
const book_infoText = document.querySelector(".book_infoText")
const book = document.querySelector(".book")
const newD = document.querySelector(".new")
function readBook(collection) {
    const bookRef = ref(db, collection);
    onValue(bookRef, (snapshot) => {
        const data = snapshot.val();
        const info = Object.entries(data);
        let activeBook = info.filter((item) => item[0] == book_id);
        book_name.innerHTML = activeBook[0][1].bookName
        book_author.innerHTML = activeBook[0][1].bookAuthor
        book_infoText.innerHTML = activeBook[0][1].bookDescription
        book.src = activeBook[0][1].bookImg
        activeBook[0][1].isNew === true ? newD.classList.add("active") : newD.classList.remove("active")
    });
}
readBook("books");

const commentInput = document.querySelector("#commentInput");
const baseUrl = "https://blog-api-t6u0.onrender.com";

async function getPosts() {
    try {
        const response = await fetch(baseUrl + "/posts", { method: "GET" });
        return await response.json();
    } catch (err) {
        console.error("Error fetching posts:", err);
    }
}
const commentMain = document.querySelector("#commentMain");

async function renderData() {
    try {
        const data = await getPosts();
        const FilteredData = data.filter((item) => item.id == book_id)
        console.log(FilteredData);
        const content = FilteredData.map((comment) => (
            `
              <div class="nameDate_info">
                  <div class="info_user">
                      <p class="user_name">anonim</p>
                      <p class="date">${convertTime(comment.creat)}</p> 
                  </div>
                  <div class="comment_title">
                      <p>${comment.title}</p>
                  </div>
              </div>
            `
        )).join('');

        commentMain.innerHTML = content;
    } catch (err) {
        console.error("Error rendering data:", err);
    }
}
renderData();

const shareBtn = document.querySelector("#shareBtn")
shareBtn.addEventListener('click',async function () {
  const title = commentInput.value.trim();
  if (title) {
      const newInfo = {
          id: book_id,
          anonim: true, 
          title,
          creat: new Date(),
      };
      console.log(newInfo);
      await addPosts(newInfo);
      renderData()
      commentInput.value = "";
  }
})

async function addPosts(form) {
    try {
        const response = await fetch(baseUrl + "/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        return await response.json();
    } catch (err) {
        console.error("Error adding post:", err);
    }
}

function convertTime(dateFormat) {
    const date = new Date(dateFormat);
    const timeString = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    const dateString = `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;
    return `${timeString} ${dateString}`;
}