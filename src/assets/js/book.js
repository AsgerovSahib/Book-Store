
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// import {
//   getDatabase,
//   ref,
//   push,
//   onValue
// } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// const firebaseConfig = {
//     apiKey: "AIzaSyAPS3AigURroTi0Ukx6ajBNNLJdRBHsafc",
//     authDomain: "library-cc233.firebaseapp.com",
//     databaseURL: "https://library-cc233-default-rtdb.firebaseio.com",
//     projectId: "library-cc233",
//     storageBucket: "library-cc233.appspot.com",
//     messagingSenderId: "704000816650",
//     appId: "1:704000816650:web:1733e6f1c3eae7bca2d1f3",
//   };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getDatabase(app);

// console.log(db);


// const bookAbout = document.querySelector("#bookAbout");


// function readBook(collection){


//     const bookRef = ref(db,collection)
//     onValue(bookRef,(snapshot)=>{

// const data = snapshot.val()

// console.log("data",data);

// const info = Object.entries(data)

// console.log("info",info);

// const result = info.map((item,index)=>{

// return  `    <div id="book_page">
// <div class="book_header">
//   <div class="book_text">
//     <a class="back_click" href="">
//       <button class="back_btn">< BACK</button>
//     </a>
//     <a href="">
//       <button id="yearBtn" class="btn_year">2017</button>
//     </a>
//     <p class="book_name">${item[1].bookName}</p>
//     <p class="book_dateAdd">2 days ago added</p>
//     <p class="book_author">${item[1].bookAuthor}</p>
//     <p class="book_infoText">
//       ${item[1].bookDescription
//       }
//     </p>





      
//     <form class="comment_form">
//       <input
//         class="comment_input"
//         type="text"
//         placeholder="your anonim comment..."
//         id="commentInput"
//       />
//       <button id="shareBtn" type="submit" onsubmit="formOnSubmit(event)" class="send_btn">
//         <img src="../../assets/icons/images/send.svg" alt="sendImg" />
//       </button>
//     </form>

//     <div id="commentMain" class="book_comment">  

// <!-- 
//       <div class="nameDate_info">

//          <div class="info_user">
//         <p class="user_name">anonim</p>
//         <p class="date">18:32 today</p> 

//       </div> 


//         <div class="comment_title">

//           <p>comment title Woah, your project looks awesome! </p>
//         </div>
       
//       </div> -->

   
//     </div>
//   </div>


  
//   <div class="book_img">
//     <img
//       class="book"
//       style="object-fit: cover;"
//       src="${item[1].bookImg}"
//       alt="book"
//     />
// ${item[1].isNew === true ?  `<span class="new">new</span>`: "" }
    
//   </div>


// </div>
// </div>   `

// })

// bookAbout.innerHTML = result

//     })
// }



// readBook("books")

