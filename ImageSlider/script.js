const imgContainer = document.querySelector(".img-container");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const btn = document.querySelectorAll(".slide-btn button")



let data = [];
let currImg = 0;
btn[currImg].classList.add("black");


async function imgData() {
    const res = await fetch("http://picsum.photos/v2/list?page=1&limit=10")
    data = await res.json();
    imgContainer.innerHTML = `<img src="${data[currImg].download_url}" alt="">`
}

function imgShow(currImg) {
    imgContainer.innerHTML = `<img src="${data[currImg].download_url}" alt="">`    
    document.querySelector(".black").classList.remove("black");
    btn[currImg].classList.add("black");
}



imgData()

prev.addEventListener("click", () => {
    if (currImg === 0) {
        currImg = 10;
    }
    imgShow(--currImg);
})

next.addEventListener("click", () => {
    if (currImg === 9) {
        currImg = -1;
    }
    imgShow(++currImg);
})