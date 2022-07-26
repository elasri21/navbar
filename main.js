const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const closeMenu = document.querySelector(".close");
const signIn = document.querySelector(".signin");
menu.addEventListener("click", function(){
    this.style.display = "none";
    closeMenu.style.display = "block";
    nav.style.display = "block";
    signIn.style.display = "block";
});
closeMenu.addEventListener("click", function(){
    this.style.display = "none";
    menu.style.display = "block";
    nav.style.display = "none";
    signIn.style.display = "none";
});

