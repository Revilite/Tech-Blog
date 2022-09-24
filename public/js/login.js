const submitButton = document.querySelector("#submit");




async function formHandler(event) {
    event.preventDefault();
    console.info("Hello Worlds");
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    window.location.replace("http://localhost:3001/api/users");
    const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    console.log(response)
}


submitButton.addEventListener("submit", formHandler);