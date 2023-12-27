
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


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
///////////////////////////////////////////////////////////////////////////////////////////
var joinUsModalDiv = document.querySelector(".joinUs_modal_div");
var joinUsButton = document.querySelector(".header_joinUs_Btn");
const errorDiv = document.querySelector(".errorDiv");
const errorMessage = document.querySelector(".errorMessage");

let joinUsBtn = document.querySelector(".joinUsBtn");
let mobileJoin = document.querySelector(".mobileJoin");

joinUsButton.addEventListener("click", function () {
  if (joinUsModalDiv.style.display === "flex") {
    joinUsModalDiv.style.display = "none";
  } else {
    joinUsModalDiv.style.display = "flex";
  }
});
if(mobileJoin){mobileJoin.addEventListener("click", function () {
  if (joinUsModalDiv.style.display === "flex") {
    joinUsModalDiv.style.display = "none";
  } else {
    joinUsModalDiv.style.display = "flex";
  }
})}

// document.addEventListener("DOMContentLoaded", function() {
// joinUsBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const joinUs_fullName = document
//     .querySelector("#joinUs_fullName")
//     .value.trim();
//   const joinUs_email = document.querySelector("#joinUs_email").value.trim();

//   if (!joinUs_fullName || !joinUs_email) {
//     showMessage("PLEASE WRITE YOUR USERNAME AND EMAIL", true);
//   } else if (!joinUs_email.includes("@")) {
//     showMessage("WRITE VALID EMAIL", true);
//   } else {
//     const joinObj = {
//       joinName: joinUs_fullName,
//       joinEmail: joinUs_email,
//     };
//     push(joinUs, joinObj);
//     document.querySelector("#joinUs_fullName").value = "";
//     document.querySelector("#joinUs_email").value = "";
//     showMessage("Successfull process", false);
//     joinUsModalDiv.style.display = "none";
//     console.log("join", joinObj);
//   }


// });

// document.addEventListener("DOMContentLoaded", function() {



  joinUsBtn.addEventListener("click",function(e){
    e.preventDefault()
      const joinUs_fullName=document.querySelector("#joinUs_fullName").value.trim()
      const joinUs_email=document.querySelector("#joinUs_email").value.trim()
        
      if(!joinUs_fullName || !joinUs_email){
       showMessage("PLEASE WRITE YOUR USERNAME AND EMAIL",true)
    
      }
      else if(!joinUs_email.includes("@")){
       showMessage("WRITE VALID EMAIL",true)
      }
      else{
        const joinObj={
         joinName:joinUs_fullName,
         joinEmail:joinUs_email
        }
        push(joinUs,joinObj)

      
        document.querySelector("#joinUs_fullName").value = ""
    document.querySelector("#joinUs_email").value = ""
        showMessage("Successfull process",false)
        joinUsModalDiv.style.display = "none";
        console.log("join",joinObj);
      }
    })
    const joinUs=ref(db,"joinUs")

   function setData(collection,data){
    const colRef=ref(db,collection)
   set(colRef,data)
   }


 function pushData(collection,data){

  const colRef=ref(db,collection)
  push(colRef,data)
 }


//   function showMessage(message, isError) {
//     const messageDiv = document.createElement("div");
//     if (isError) {
//       messageDiv.textContent = "ERROR: " + message;
//       messageDiv.classList.add("message", "error");
//       messageDiv.style.backgroundColor = "red";
//       messageDiv.style.color = "white";
//       messageDiv.style.fontSize = "16px";


//     } else {
//       messageDiv.textContent = message;
//       messageDiv.classList.add("message", "success");
//       messageDiv.style.backgroundColor = "green";
//       messageDiv.style.color = "white";

//     }

// const joinUs = ref(db, "joinUs");

// function pushData(collection, data) {
//   const colRef = ref(db, collection);
//   push(colRef, data);
// }
// function setData(collection, data) {
//   const colRef = ref(db, collection);
//   set(colRef, data);
// }

function showMessage(message, isError) {
  const messageDiv = document.createElement("div");
  if (isError) {
    messageDiv.textContent = "ERROR: " + message;
    messageDiv.classList.add("message", "error");
    messageDiv.style.backgroundColor = "red";
    messageDiv.style.color = "white";
    messageDiv.style.fontSize = "16px";
  } else {
    messageDiv.textContent = message;
    messageDiv.classList.add("message", "success");
    messageDiv.style.backgroundColor = "green";
    messageDiv.style.color = "white";
  }

  messageDiv.style.position = "fixed";
  messageDiv.style.top = "0";
  messageDiv.style.right = "0";
  // messageDiv.style.padding = "10px";
  messageDiv.style.zIndex = "9999";
  document.body.appendChild(messageDiv);
  setTimeout(function () {
    messageDiv.remove();
  }, 3000);
}


//mo

let hamburgerBtn = document.querySelector(".hamburgerBtn");
let sideMenu = document.querySelector(".side-menu");
let closeBtn = document.querySelector(".closeBtn");
if(hamburgerBtn){hamburgerBtn.addEventListener("click", function () {
  sideMenu.style.left = "0";
});
closeBtn.addEventListener("click", function () {
  sideMenu.style.left = "-675px";

})}