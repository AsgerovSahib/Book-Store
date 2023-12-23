
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
const db = getDatabase(app);



const add_info=document.querySelector("#add_info")
 console.log("aad",add_info);

add_info.addEventListener("click",function(){

    let about_title_input=document.querySelector("#about_title_input").value.trim()
   
    let about_image_url_input=document.querySelector("#about_image_url_input").value.trim()
   
   let about_description_textarea=document.querySelector("#about_description_textarea").value.trim()
   const aboutUs=ref(db,"aboutUs")

// localStorage.setItem("aboutTitle",about_title_input)
// localStorage.setItem("aboutDesc",about_description_textarea)
// localStorage.setItem("aboutImg",about_image_url_input)

const AboutObj={
    about_title_input,
    about_image_url_input,
    about_description_textarea
}
set(aboutUs,AboutObj)


document.querySelector("#about_title_input").value=""
document.querySelector("#about_image_url_input").value=""
document.querySelector("#about_description_textarea").value=""
})