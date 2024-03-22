window.addEventListener("load", () => {

    const modSun = document.querySelector(".mod-sun");
    const modMoon = document.querySelector(".mod-moon");
    const body = document.querySelector("body");
    const menuOpen = document.querySelector(".menu-open");
    const menuClose = document.querySelector(".menu-close");
    const colMenu = document.querySelector(".col-menu");
    const close = document.querySelectorAll(".close");
    const select = document.querySelector("#select");

    select.addEventListener("change", () => {
        if(select.value == "es"){
            location.href = "./index.html"
        }
        else if(select.value == "en"){
            location.href = "/indexE.html"
        }
    })
    
    menuOpen.addEventListener("click", () => {
        body.classList.toggle("body-menu");
        colMenu.style.display = "flex";
        menuOpen.style.display = "none";
        menuClose.style.display = "block";
    })
    menuClose.addEventListener("click", () => {
        body.classList.toggle("body-menu");
        colMenu.style.display = "none";
        menuOpen.style.display = "block";
        menuClose.style.display = "none";
    })
    modSun.addEventListener("click", () => {
        body.classList.add("clear-mode");
        modSun.style.display = "none";
        modMoon.style.display = "block";
    })
    modMoon.addEventListener("click", () => {
        body.classList.remove("clear-mode");
        modMoon.style.display = "none";
        modSun.style.display = "block";
    })

    for(let i=0; i<close.length; i++){
        close[i].addEventListener("click", () => {
            body.classList.toggle("body-menu");
            colMenu.style.display = "none";
            menuOpen.style.display = "block";
            menuClose.style.display = "none";
        })
    }
})