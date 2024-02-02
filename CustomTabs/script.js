const h3 = document.querySelectorAll(".tabs h3");
const p = document.querySelectorAll(".desc p");

h3.forEach((elem, index) => {
    elem.addEventListener("click", (e) => {
        if (document.querySelector(".active")) {
            document.querySelectorAll(".active").forEach((ele) => {
                ele.classList.remove("active");
            })
        }

        e.target.classList.add("active");
        p[index].classList.add("active");
    })
})