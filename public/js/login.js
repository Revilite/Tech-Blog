

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


    console.log(username);
    if(username && password && password.length >= 8){
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
    console.log(response);
    window.location.replace("http://localhost:3001/api/users");
}
else{
    window.alert("Your password has to be more than 8 characters long");
}
}

const loginUser = async function(event) {
    event.preventDefault();
    const username = document.querySelector("#usernameLogIn").value;
    const password = document.querySelector("#passwordLogIn").value;
    if(username && password){
    const data = fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
            isOnline: true,
        })
    });
    if(data.ok){
        document.location.replace("/");
    }
    else{
        alert("Incorrect email or password, Please try again");
    };
    }

}




logInButton.addEventListener("submit", loginUser);
signUpButton.addEventListener("submit", createNewUser);
sSignUp.addEventListener("click", showLogIn);
sLogIn.addEventListener("click", showSignUp)
