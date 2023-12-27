





import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAPS3AigURroTi0Ukx6ajBNNLJdRBHsafc",
    authDomain: "library-cc233.firebaseapp.com",
    databaseURL: "https://library-cc233-default-rtdb.firebaseio.com",
    projectId: "library-cc233",
    storageBucket: "library-cc233.appspot.com",
    messagingSenderId: "704000816650",
    appId: "1:704000816650:web:1733e6f1c3eae7bca2d1f3",
  };



  


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

console.log(db);


const bookAbout = document.querySelector("#bookAbout");


function readBook(collection){


    const bookRef = ref(db,collection)
    onValue(bookRef,(snapshot)=>{

const data = snapshot.val()

console.log("data",data);

const info = Object.entries(data)

console.log("info",info);

const result = info.map((item,index)=>{

return  `    <div id="book_page">
<div class="book_header">
  <div class="book_text">
    <a class="back_click" href="">
      <button class="back_btn">< BACK</button>
    </a>
    <a href="">
      <button id="yearBtn" class="btn_year">2017</button>
    </a>
    <p class="book_name">${item[1].bookName}</p>
    <p class="book_dateAdd">2 days ago added</p>
    <p class="book_author">${item[1].bookAuthor}</p>
    <p class="book_infoText">
      ${item[1].bookDescription
      }
    </p>





      
    <form class="comment_form">
      <input
        class="comment_input"
        type="text"
        placeholder="your anonim comment..."
        id="commentInput"
      />
      <button id="shareBtn" type="submit" onsubmit="formOnSubmit(event)" class="send_btn">
        <img src="../../assets/icons/images/send.svg" alt="sendImg" />
      </button>
    </form>

    <div id="commentMain" class="book_comment">  

<!-- 
      <div class="nameDate_info">

         <div class="info_user">
        <p class="user_name">anonim</p>
        <p class="date">18:32 today</p> 

      </div> 


        <div class="comment_title">

          <p>comment title Woah, your project looks awesome! </p>
        </div>
       
      </div> -->

   
    </div>
  </div>


  
  <div class="book_img">
    <img
      class="book"
      style="object-fit: cover;"
      src="${item[1].bookImg}"
      alt="book"
    />
${item[1].isNew === true ?  `<span class="new">new</span>`: "" }
    
  </div>


</div>
</div>   `

})

bookAbout.innerHTML = result

    })
}

















const commentInput = document.querySelector("#commentInput");
const commentMain = document.querySelector("#commentMain");
const shareBtn = document.querySelector("#shareBtn");



let anonim;

async function renderData() {
  try {
    const data = await getPosts();
    console.log("data", data);

    const content = data.reverse().map((comment) => {
      const dateTime = convertTime(comment.creat);

      return `   <div class="nameDate_info">

        <div class="info_user">
       <p class="user_name">anonim</p>
       <p class="date">${dateTime}</p> 

     </div> 


       <div class="comment_title">

         <p>${comment.title}</p>
       </div>
      
     </div>   `;
    });

    commentMain.innerHTML = content;

  } catch (err) {
    console.log(err);
  }
}



shareBtn.addEventListener("click", async function (event) {
  event.preventDefault();

  try {
    const title = commentInput.value.trim();

    if(!title){
return

    }


  // ID = bookID
// let book_url = window.location.hash
// let book_length = book_url.length
// let book_id = book_url.slice(4,book_length)



    commentInput.value = "";

    const newInfo = {
      anonim,
      title,

      creat: new Date(),
    };

    console.log("commentData", newInfo);

    await addPosts(newInfo);
    renderData();         

  } catch (err) {
    console.log(err);
  }
});


const baseUrl = "https://blog-api-t6u0.onrender.com";


const getPosts = async () => {
  try {
    const response = await fetch(baseUrl + "/posts", { method: "GET" });

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err, "err");
  }
};

const addPosts = async (form) => {
  try {
    const response = await fetch(baseUrl + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });

    const data = await response.json(form);

    console.log(data, "data");

    return data;
  } catch (err) {
    console.log(err, "err");
  }
};

function convertTime(dateFormat) {
  const date = new Date(dateFormat);

  const timeString = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

  const dateString = `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${date.getFullYear()}`;

  const result = `${timeString}  ${dateString}`;

  return result;
}

function formOnSubmit(event) {
  event.preventDefault();
  console.log("submit");
}








readBook("books")

