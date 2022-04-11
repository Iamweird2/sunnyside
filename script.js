let burger = document.querySelector(".burger");
let dropdown = document.querySelector(".dropdown");
burger.addEventListener("click", ()=>{
    dropdown.classList.toggle("dropdown-active");
})