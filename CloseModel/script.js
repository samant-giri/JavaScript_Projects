const open = document.querySelector(".open");
const close1 = document.querySelector(".close1");
const close2 = document.querySelector(".close2");
const mc = document.querySelector(".model-container");


open.addEventListener("click", () => {
    mc.style.display = "block";
})

close1.addEventListener("click", () => {
    mc.style.display = "none";
})

close2.addEventListener("click", () => {
    mc.style.display = "none";
})

window.addEventListener("click", (e) => {
    if (e.target == mc) {
        mc.style.display = "none";
    }
})