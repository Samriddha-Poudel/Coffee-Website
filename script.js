const menuOpnbtn=document.querySelector("#menu-open-btn");
const menuClsbtn=document.querySelector("#menu-close-button");

menuOpnbtn.addEventListener("click", () =>{

document.body.classList.toggle("show-mbl-menu");
});


menuClsbtn.addEventListener("click", () => menuOpnbtn.click ());
