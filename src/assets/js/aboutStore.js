

document.addEventListener("DOMContentLoaded", function () {

  const store_title = document.querySelector(".store_title");
    
  const text = document.querySelector(".text");
    const books = document.querySelector(".books");

    const booksImage = books.querySelector("img");
    const newStoretitle = localStorage.getItem("aboutTitle") || store_title.textContent
    const newText = localStorage.getItem("aboutDesc") || text.textContent

  const newImage = localStorage.getItem("aboutImg") || books.image.textContent;
  
    store_title.innerHTML = newStoretitle;
    text.innerHTML = newText;
    
    if (booksImage) {
        booksImage.src = newImage;
      }
  });

