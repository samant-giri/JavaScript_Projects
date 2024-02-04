const btn = document.querySelectorAll(".btn h3");
const p = document.querySelectorAll(".cards p");

btn.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index === 0) {
            p.forEach((elem) => {
                elem.style.display = "initial";
            })
        }

        else {
            p.forEach((elem) => {
                if (elem.className === button.innerText) {
                    elem.style.display = "initial";
                } else {
                    elem.style.display = "none";
                }
            })
        }
    })
})