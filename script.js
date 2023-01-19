const menu_button = document.getElementById("open-btn");
const close_button = document.getElementById("close-btn");
let navbar = document.querySelector("nav");

menu_button.addEventListener('click', ()=>{
    navbar.classList.add("open-menu");
});

close_button.addEventListener('click', ()=>{
    navbar.classList.remove("open-menu");
});