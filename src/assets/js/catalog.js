
//catalog js start//

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
 



document.addEventListener("DOMContentLoaded", function () {
  var swiper1;
var swiper2
var swiper3
  try {
    function initializeSwiper() {
      swiper1 = new Swiper("#swiper1", {
        loop: true,
        slidesPerView: 5,
        slidesPerGroup: 1,
        navigation: {
          nextEl: "#swiper1next",
          prevEl: "#swiper1prev",
        },
      })
      
swiper2=new Swiper("#swiper2",{

   loop: true,
    slidesPerView: 5,
    slidesPerGroup: 1,

    navigation: {
      nextEl: "#swiper2prev",
      prevEl: "#swiper2next",
    },
   })

swiper3=new Swiper("#swiper3",{

    loop: true,
   slidesPerView: 5,
   slidesPerGroup: 1,

   navigation: {
      nextEl: "#swiper3prev",
      prevEl: "#swiper3next"
     },
  })

      ;
    }


    

    function readData(collection) {
      const readRef = ref(db, collection);
      onValue(readRef, (snapshot) => {
        try {
          const data = snapshot.val();
          const sliderArr = Object.entries(data);
          console.log("sl",sliderArr)
          let result = sliderArr.map((item) => {
            const bookName = item[1]?.bookName || "Undefined Book";
            const bookAuthor=item[1]?.bookAuthor ||"undefined Author"
            const bookID=item[0]
            console.log("ID",bookID);
            return `
            <div class="swiper-slide"   >
            <div class="swiper-slide-container">
            <div class="slide_img">
              <img src="${item[1].bookImg}">
              </div>

              <div class="${item[1].isNew ? 'new_releases' : 'book_isNew'}">
              New
              </div>
            
              <div class="catalog_slide_body">
              <div class="titleDiv">
                <p class="catalog_slide_title">${bookName}</p>
                </div>
                <div class="titleDiv">
                <p class="catalog-slide-author">${bookAuthor}</p> 
                </div>
                <button id="${bookID}" class="catalog-readMoreBtn" type="button">Read More</button>
              </div>
            </div>
               </div>
            </div>
            `;
          });
          document.querySelector("#swiper1 .swiper-wrapper").innerHTML = result.join('');

          initializeSwiper();
          
          swiper1.update();
          renderSlider3("books")

        } catch (error) {
          console.log("err",error);
        }


      });
    }

    



 function renderSlider3(collection){
  const readRef = ref(db, collection);
  onValue(readRef, (snapshot) => {
    try {
      const data = snapshot.val();

    const filterObj=Object.values(data).filter((item)=>item.isNew===true)  
const filterData=Object.entries(filterObj)
      console.log("fl",filterData)
      let result =filterData.map((item) => {
        const bookname = item[1]?.bookName || "Undefined Book";
        const bookauthor=item[1]?.bookAuthor ||"undefined Author"
        const bookID=item[0]
        console.log("id",bookID);
        return `
        <div class="swiper-slide"   >
        <div class="swiper-slide-container">
        <div class="slide_img">
          <img src="${item[1]?.bookImg}">
          </div>

          <div class="new_releases">
          New
          </div>
        
          <div class="catalog_slide_body">
          <div class="titleDiv">
            <p class="catalog_slide_title">${bookname}</p>
            </div>
            <div class="titleDiv">
            <p class="catalog-slide-author">${bookauthor}</p> 
            </div>
            <button id="${bookID}" class="catalog-readMoreBtn" type="button">Read More</button>
          </div>
        </div>
           </div>
        </div>
        `;}
      );
      document.querySelector("#swiper3 .swiper-wrapper").innerHTML = result.join('');
      initializeSwiper();
      swiper3.update();

    } catch (error) {
      console.error('Data processing error:', error);
    }
  });
 }



 readData("books");

} catch (error) {
    console.error('err', error);
  }



//catalog js end//









});


