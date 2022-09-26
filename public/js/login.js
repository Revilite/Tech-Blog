const sSignUp = document.querySelector("#switchSignUp"); //Switch Buttons
const sLogIn = document.querySelector("#switchLogIn")

const signUpButton = document.querySelector("#signup"); //form ids
const logInButton = document.querySelector("#login");

const loginShown = document.querySelector("#loginShown"); //divs to toggle
const signupShown = document.querySelector("#signupShown")


function showLogIn(event) {
    event.preventDefault();
    signupShown.classList.add("silent")
    loginShown.classList.remove("silent")
}

function showSignUp(event){
    event.preventDefault();
    signupShown.classList.remove("silent");
    loginShown.classList.add("silent")
}



async function createNewUser(event) {
    event.preventDefault();
    const username = document.querySelector("#usernameSignUp").value;
    const password = document.querySelector("#passwordSignUp").value;

    window.location.replace("http://localhost:3001/api/users");
    const response = await fetch("/api/users", {
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

const loginUser = async function(event) {
    // event.preventDefault();
    // const username = document.querySelector("#usernameLogIn");
    // const password = document.querySelector("#passwordLogIn");
    // const data = fetch("/api/users", {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: {
    //         username, 
    //         password,
    //         isOnline: true,
    //     }
    // });
    // JSON.stringify(data);


}




logInButton.addEventListener("submit", loginUser);
signUpButton.addEventListener("submit", createNewUser);
sSignUp.addEventListener("click", showLogIn);
sLogIn.addEventListener("click", showSignUp)
