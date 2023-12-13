import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase,set, ref,push,onValue} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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

const adminLogin=ref(db,"adminLogin")
let adminName
let adminPassword
onValue(adminLogin,(snapshot)=>{
    const adminData=snapshot.val()
    console.log("adminData",adminData);
    const adminArr=Object.entries(adminData).reverse()
    console.log("adminArr",adminArr);
 adminName=adminArr[0][1]
 adminPassword=adminArr[1][1]
// console.log(adminName)
// console.log(adminPassword);
;
})
const admin_container=document.querySelector(".admin_container")

const login_container=document.querySelector(".login_container")
const login_btn = document.querySelector(".login_btn");
const errorDiv = document.querySelector(".errorDiv");
const errorMessage = document.querySelector(".errorMessage");

login_btn.addEventListener("click", function (e) {
    e.preventDefault();

    const login_userName = document.querySelector(".login_userName").value.trim();
    const login_password = document.querySelector(".login_password").value.trim();
    if (login_userName===adminName & login_password===adminPassword) {
        const loginObj = {
            userName: login_userName,
            password: login_password
        };
        localStorage.setItem("username",login_userName)
        localStorage.setItem("password",login_password)

login_container.style.display="none"
admin_container.style.display="block"
        document.querySelector(".login_userName").value = "";
        document.querySelector(".login_password").value = "";
        
        console.log("obj", loginObj);
    } 
    else if(!login_userName || !login_password){
        showErrorMsg("PLEASE FILL IN ALL INFORMATION");
    }
    else {
        showErrorMsg("Please write correct username and password");
    }
});

function showErrorMsg(message) {
    errorDiv.style.display="block"
    errorMessage.innerText = message;

    setTimeout(function () {
        errorDiv.style.display="none"
    }, 3000);
}

