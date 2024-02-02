const posts = document.querySelector(".posts");


function fetchUsingXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
        if (xhr.status == 200) {
            display(xhr.response);
        }
        else {
            console.log("Some error occured...");
        }
    }
}

// fetchUsingXHR()

function fetchUsingFetchMethod() {
    const fetchResponse = fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "GET"
    })

    fetchResponse
        .then(response => {
            return response.json();
        }).then(result => display(result))
        // .then(result => display(result))
        .catch ((e) => console.log(e))
}

// fetchUsingFetchMethod();

async function fetchUsingAsyncAwaitMethod() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
    });

    const result = await response.json();
    display(result);
}

// fetchUsingAsyncAwaitMethod()

function helperFunction(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.send();

        xhr.onload = () => {
            if (xhr.status == 200) {
                resolve(xhr.response);
            }
            else {
                reject(xhr.response);
            }
        }

        
    })

    return promise;
}
    
async function fetchUsingAsyncAwaitAndXhrMethod() {
    const res = helperFunction("GET", "https://jsonplaceholder.typicode.com/posts");
    res.then(re => display(re))


}

fetchUsingAsyncAwaitAndXhrMethod()

function display(post) {
    posts.innerHTML = post.map((elem) => {
                return `<div class="post">
                    <h2>${elem.title}</h2>
                    <p>${elem.body}</p>
                </div>`
            }).join("");
}    

