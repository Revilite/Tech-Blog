const loginButton = document.querySelector("#signup");
async function formHandler(event) {
    event.preventDefault();
    const username = document.querySelector("#usernameSignUp").value;
    const password = document.querySelector("#passwordSignUp").value;

    window.location.replace("http://localhost:3001/api/users");
    const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
            isOnline: true,
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    console.log(response)
}


loginButton.addEventListener("submit", formHandler);