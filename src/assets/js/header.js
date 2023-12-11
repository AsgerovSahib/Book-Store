
    var joinUsModalDiv = document.querySelector(".joinUs_modal_div");
    var joinUsButton = document.querySelector(".header_joinUs_Btn");
    

    let joinUsBtn = document.querySelector(".joinUsBtn")

    joinUsButton.addEventListener("click", function () {
      joinUsModalDiv.style.display = "flex";
    });
    
    joinUsBtn.addEventListener("click", function () {
      joinUsModalDiv.style.display = "none";
    });
