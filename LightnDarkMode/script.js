const main = document.querySelector(".main");
const btn = document.querySelector("button");
// main.style.backgroundColor = "black"


btn.addEventListener("click", (e) => {
    if (main.style.backgroundColor == "white") {
        main.style.backgroundColor = "black";  
        e.target.innerText = "Change Dark to Light Mode"
    }
    else {
        main.style.backgroundColor = "white";
        e.target.innerText = "Change Light to Dark Mode"
    }
})