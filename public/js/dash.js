const newButton = document.querySelector("#newButton");
const newPost = document.querySelector("#newPost");
const submitButton = document.querySelector("#submit");



async function showBlock(event){
    event.preventDefault();
    if(newPost.classList.contains("silent")){
    newPost.classList.remove("silent");
    }
    else{
        newPost.classList.add("silent");
    }
}

async function formHandeler(event){
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const body = document.querySelector("#body").value;

    const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
            title,
            body,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        document.location.replace("/dashboard");
    }
    else{
        window.alert("Failed to add post");
    }
}



newButton.addEventListener("click", showBlock);
submitButton.addEventListener("submit", formHandeler);