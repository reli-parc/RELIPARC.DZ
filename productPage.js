
const menu = document.getElementById("menu");
const actions = document.getElementById("actions");
const test = document.getElementById("test");
menu.addEventListener("click",()=>{
    hundleMenu();

})

function hundleMenu(){
menu.classList.toggle("is-active");
actions.classList.toggle("is-active");
test.classList.toggle("is-active");
}