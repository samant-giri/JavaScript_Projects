const btn = document.querySelectorAll(".btn");
const msg = document.querySelector("#msg");
console.log(btn);

let text = 'X';
document.querySelector("#turn").innerText = `${text}'s Turn`;

btn.forEach((elem, id) => {
    elem.addEventListener("click", () => {
        msg.style.display = "none";
        if (!elem.innerText) {
            elem.innerText = text;
        // elem.setAttribute("disabled", "true");
        
            text = text === "X" ? '0' : "X";
        
        document.querySelector("#turn").innerText = `${text}'s Turn`;
        gameResult();
        }
    })
})

function clearBoard () {
    btn.forEach((elem) => {
        elem.innerText = "";
        // elem.setAttribute("disabled", "false");
    })
    text = "X";
    document.querySelector("#turn").innerText = `${text}'s Turn`;
}

function showMsg(i) {
    msg.innerText = `${btn[i].innerText} WON`;
    msg.style.display = "block";
    clearBoard();
}

document.getElementById("restart").addEventListener("click", () => {
    clearBoard();
    msg.style.display = "none";
});

function gameResult() {
    // console.log("samam");
    let i = 0;
    while (i < 9) {
        if (btn[i].innerText == btn[i + 1].innerText && btn[i + 1].innerText == btn[i + 2].innerText) {
            if (btn[i].innerText) {
                showMsg(i);
                return;
            }
        }
        i += 3;
    }

    i = 0;

    while (i < 3) {
        if (btn[i].innerText == btn[i + 3].innerText && btn[i + 3].innerText == btn[i + 6].innerText) {
            if (btn[i].innerText) {
                showMsg(i);
                return;
            }
        }
        i += 1;
    }

    if (btn[0].innerText == btn[4].innerText && btn[4].innerText == btn[8].innerText) {
        if (btn[0].innerText) {
            showMsg(0);
            return;
            }
    }

    if (btn[2].innerText == btn[4].innerText && btn[4].innerText == btn[6].innerText) {
        if (btn[2].innerText) {
            showMsg(2);
            return;
            }
    }

    i = 0;

    let isFilled = true;

    for (i = 0; i < 9; i++){
        if (!btn[i].innerText) {
            isFilled = false;
            break;
        }
    }

    if (isFilled) {
        msg.innerText = `Game tied, play again`;
        msg.style.display = "block";
        clearBoard();
    }



    
}