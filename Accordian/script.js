const data = [{
        title: "What is the use of the accordion?",
        desc : "The accordion has traditionally been used to perform folk or ethnic music, popular music, and transcriptions from the operatic and light-classical music repertoire."
    },
    {
        title: "What is the difference between accordion and scrolling?",
        desc : "Summary: While accordions can simplify long content pages and minimize scrolling, they diminish content visibility and increase interaction cost. On desktop, use accordions for content-heavy pages where users will not need to access content under several accordions"
    },
    {
        title: "What is the accordion in software?",
        desc : "An accordion is a user interface component that allows the user to hide or reveal content."
    },
    {
        title: "What are the 2 main types of accordion?",
        desc : "There are two main kinds of accordion, distinguished by their different keyboards: button accordions and piano accordions. All accordions have a button keyboard on the left-hand side for bass chords, but on the right-hand side, where the melody is played, they can have either piano or button keys."
    },
    {
        title: "What is the role of accordion in accessibility?",
        desc : "Buttons are used as the accordions so that they are tab-able by keyboard users and accessible to screen readers. Each accordion button has a unique id associated with its aria-controls (each button controls this particular id which references the hidden content beneath it)."
    }
]

const container = document.querySelector("#container");

// container.innerHTML = data.map((elem) => `
// <div class="acc-item">
//             <div class="acc-heading">
//                 <h2>${elem.title}</h2>
//                 <i class="ri-arrow-down-line"></i>
//             </div>
//             <div class="acc-para">
//                 <p>${elem.desc}</p>
//             </div>
//         </div>
// `).join("")

data.forEach((elem) => {
    const div = document.createElement("div");
    div.classList.add("acc-item");
    div.innerHTML = `<div class="acc-heading">
                <h2 class="">${elem.title}</h2>
                <i class="ri-arrow-down-line"></i>
            </div>
            <div class="acc-para">
                <p>${elem.desc}</p>
            </div>`;
    container.append(div);    
})



const title = document.querySelectorAll(".acc-item");
console.log(title[0].childNodes)

title.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        // e.target.parentNode.parentNode.childNodes[2].classList.add("active")
        // console.log(e.target.parentNode.parentNode.childNodes[2]);
        if (e.target.parentNode.parentNode.childNodes[2].classList.contains("active")) {
            e.target.parentNode.parentNode.childNodes[2].classList.remove("active");
            e.target.parentNode.children[1].style.transform = "rotate(0)"
        }
        else {
            document.querySelectorAll(".active").forEach((elem) => {
                elem.classList.remove("active");
                elem.parentNode.children[0].children[1].style.transform = "rotate(0)";
            })

            e.target.parentNode.parentNode.childNodes[2].classList.add("active")
            e.target.parentNode.children[1].style.transform = "rotate(180deg)";
        }
    })
})



