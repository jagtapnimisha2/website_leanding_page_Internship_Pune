let menu = document.querySelector("ul");
let bars= document.querySelector(".header .fa-bars");
bars.addEventListener("click",function(){
    menu.classList.toggle("open");
})
// loging section
let section = document.querySelector(".login-section");
let userIcon=document.querySelector(".header .fa-user");
userIcon.addEventListener("click",function(){
    section.classList.toggle("show");
})