const line = document.querySelectorAll(".middle .line");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
console.log(line);
let colorLine = -1;
console.log(colorLine);

next.addEventListener("click", () => {
    colorLine++;
    console.log(colorLine);
    lineColorer(colorLine);
    checkActive(colorLine);
})

prev.addEventListener("click", () => {
    colorLine--;
    console.log(colorLine);
    lineColorer(colorLine);
    checkActive(colorLine);
})

function checkActive(num) {
    if (num === -1) {
        prev.setAttribute("disabled", "true");
        prev.style.backgroundColor = "rgba(28, 27, 25, 0.46)";
        prev.style.cursor = "no-drop";
    } 

    else if (num === 2) {
        next.setAttribute("disabled", "true");
        next.style.backgroundColor = "rgba(28, 27, 25, 0.46)";
        next.style.cursor = "no-drop";
    }

    else {
        prev.removeAttribute("disabled");
        prev.style.backgroundColor = "rgba(28, 27, 25)";
        prev.style.cursor = "pointer";
        next.removeAttribute("disabled");
        next.style.backgroundColor = "rgba(28, 27, 25)";
        next.style.cursor = "pointer";
    }
}

function lineColorer(num) {
    for (let i = 0; i <= num; i++){
        line[i].style.backgroundColor = "rgb(118, 246, 20)";
    }

    for (let j = num + 1; j < 3; j++){
        line[j].style.backgroundColor = "crimson";
    }
}
