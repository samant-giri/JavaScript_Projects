const btn = document.querySelectorAll(".ripple-effect");

btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        
        const span = document.createElement("span");

        span.style.left = e.clientX - e.target.offsetLeft + "px";
        span.style.top = e.clientY - e.target.offsetTop + "px";
        button.appendChild(span);

        setTimeout(() => {
        span.style.display = "none";
        },500);

    })

    
})