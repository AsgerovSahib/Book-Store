// const swiper = new Swiper('.swiper', {
    
//     loop: true,
//     slidesPerView: 5,
   

  
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
   
//   });

  // const readMoreBtn=document.querySelector(".catalog-readMoreBtn")

  // readMoreBtn.addEventListener("click",function(){


    
  // })


  var swiper1=new Swiper("#swiper1",{
    loop: true,
    slidesPerView: 5,
    navigation: {
      nextEl: "#swiper1prev",
      prevEl:"#swiper2next"
    },
  })

  var swiper2=new Swiper("#swiper2",{

    loop: true,
    slidesPerView: 5,
    navigation: {
      nextEl: "#swiper2prev",
      prevEl: "#swiper2next",
    },
  })

  var swiper3=new Swiper("#swiper3",{

    loop: true,
    slidesPerView: 5,
    navigation: {
      nextEl: "#swiper3prev",
      prevEl: "#swiper3next"
    },
  })