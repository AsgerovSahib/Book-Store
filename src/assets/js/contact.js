
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
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

document.querySelector("#sendBtn").addEventListener("click", function () { 

console.log("click");
    const db = getDatabase(app);    
// console.log(db);
  const user = ref(db, "contactUs/");

  const fullname = document.querySelector("#nameInput").value.trim();
  const address = document.querySelector("#addressInput").value.trim();
  const email = document.querySelector("#emailInput").value.trim();
  const phone = document.querySelector("#phoneInput").value.trim();
  const textarea = document.querySelector("#noteArea").value.trim();



  showMessage()

  const form = {
fullname,
address,
email,
phone,
textarea
  };

  push(user, form);



  document.querySelector("#nameInput").value = "";
  document.querySelector("#addressInput").value = "";
  document.querySelector("#emailInput").value = "";
  document.querySelector("#phoneInput").value = "",
 document.querySelector("#noteArea").value = "";
});




function showMessage(){

  const danger = document.querySelector("#danger");
  const success = document.querySelector("#success")
  const sendBtn = document.querySelector("#sendBtn")

if(nameInput.value === ""|| addressInput.value === ""|| emailInput.value === "" || phoneInput.value === "" || noteArea.value === ""  ){

  danger.style.display = "block"

}else{
    nameInput.value = ""  
    addressInput.value = ""
    emailInput.value = ""
    phoneInput.value = ""
    noteArea.value = ""
    success.style.display = "block";

    

  }

  setTimeout(()=>{

    danger.style.display = "none";
    success.style.display = "none"
  },1800)

}


 



function character(){

  let textarea = document.querySelector("#noteArea");
  let countWord = document.querySelector("#countWord");

  let limit = 100

textarea.addEventListener("input",function(){

  let text = textarea.value.length

  let result = text + "/" + limit

  countWord.innerHTML = result


  console.log(text);

  if(text > limit){

    countWord.style.color = "#ff2851";

    textarea.readOnly = true;


  }else{

    countWord.style.color = ""
    textarea.readOnly = false;

    // countWord.innerHTML = "0/" + limit;
    
    
  }





})

}


character()



