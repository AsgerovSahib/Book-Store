
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase,set, ref,push,onValue} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

    var joinUsModalDiv = document.querySelector(".joinUs_modal_div");
    var joinUsButton = document.querySelector(".header_joinUs_Btn");
    const errorDiv = document.querySelector(".errorDiv");
    const errorMessage = document.querySelector(".errorMessage");
    
    let joinUsBtn = document.querySelector(".joinUsBtn")

    joinUsButton.addEventListener("click", function () {
      joinUsModalDiv.style.display = "flex";



    });
    
    // joinUsBtn.addEventListener("click", function () {
    //   joinUsModalDiv.style.display = "none";
    // });
// header joinUs//////////////////////

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

const firebaseConfig = {
    apiKey: "AIzaSyAPS3AigURroTi0Ukx6ajBNNLJdRBHsafc",
    authDomain: "library-cc233.firebaseapp.com",
    projectId: "library-cc233",
    storageBucket: "library-cc233.appspot.com",
    messagingSenderId: "704000816650",
    appId: "1:704000816650:web:1733e6f1c3eae7bca2d1f3"
  };

   const app = initializeApp(firebaseConfig);
   const db = getDatabase(app);

   function setData(collection,data){
    const colRef=ref(db,collection)
   set(colRef,data)
   }

   const joinUs=ref(db,"joinUs")

 function pushData(collection,data){

  const colRef=ref(db,collection)
  push(colRef,data)
 }

  //  function showErrorMsg(message,isError) {
  //   const errorDiv = document.createElement("div");
  //   errorDiv.classList.add("error-div")
  //   errorDiv.style.backgroundColor = "red";
  //   errorDiv.style.color = "white";

  //   const messageText = document.createElement("span");
  //   messageText.textContent = "Error:"+message
  //   errorDiv.appendChild(messageText);
  //   errorDiv.style.position = "fixed";
  //   errorDiv.style.top = "20px";
  //   errorDiv.style.right = "20px";
  //   errorDiv.style.padding = "10px";
  //   errorDiv.style.zIndex = "9999";
  //   errorDiv.style.borderRadius = "10px";
  //   document.body.appendChild(errorDiv);
  //   setTimeout(function () {
  //    errorDiv.remove();
  //   }, 3000);
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