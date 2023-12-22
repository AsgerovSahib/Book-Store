// //* for Rufet


const add_info=document.querySelector("#add_info")
 console.log("aad",add_info);

add_info.addEventListener("click",function(){

    let about_title_input=document.querySelector("#about_title_input").value.trim()
   
    let about_image_url_input=document.querySelector("#about_image_url_input").value.trim()
   
   let about_description_textarea=document.querySelector("#about_description_textarea").value.trim()


localStorage.setItem("aboutTitle",about_title_input)
localStorage.setItem("aboutDesc",about_description_textarea)
localStorage.setItem("aboutImg",about_image_url_input)

document.querySelector("#about_title_input").value=""
document.querySelector("#about_image_url_input").value=""
document.querySelector("#about_description_textarea").value=""
})