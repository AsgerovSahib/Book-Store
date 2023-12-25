const commentInput = document.querySelector("#commentInput");
const commentMain = document.querySelector("#commentMain");
const shareBtn = document.querySelector("#shareBtn");

const baseUrl = "https://blog-api-t6u0.onrender.com";

let anonim;

async function renderData() {
  try {
    const data = await getPosts();

    const content = data.reverse().map((comment) => {
      const dateTime = convertTime(comment.creat);

      return `   <div class="nameDate_info">

        <div class="info_user">
       <p class="user_name">anonim</p>
       <p class="date">${dateTime}</p> 

     </div> 


       <div class="comment_title">

         <p>${comment.title}</p>
       </div>
      
     </div>   `;
    });

    commentMain.innerHTML = content;
    console.log("data", data);
  } catch (err) {
    console.log(err);
  }
}

shareBtn.addEventListener("click", async function (event) {
  event.preventDefault();

  try {
    const title = commentInput.value.trim();

    if(!title){
return

    }



    commentInput.value = "";

    const newInfo = {
      anonim,
      title,
      creat: new Date(),
    };

    console.log("info", newInfo);

    await addPosts(newInfo);

    renderData();
  } catch (err) {
    console.log(err);
  }
});

const getPosts = async () => {
  try {
    const response = await fetch(baseUrl + "/posts", { method: "GET" });

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err, "err");
  }
};

const addPosts = async (form) => {
  try {
    const response = await fetch(baseUrl + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });

    const data = await response.json(form);

    console.log(data, "data");

    return data;
  } catch (err) {
    console.log(err, "err");
  }
};

function convertTime(dateFormat) {
  const date = new Date(dateFormat);

  const timeString = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

  const dateString = `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${date.getFullYear()}`;

  const result = `${timeString}  ${dateString}`;

  return result;
}

function formOnSubmit(event) {
  event.preventDefault();
  console.log("submit");
}
