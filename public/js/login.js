

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
    if(username && password && password.length >= 8){ //sign up
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
    window.location.replace("/")
}
else{
    window.alert("Your password has to be more than 8 characters long");
}
}

const loginUser = async function(event) { //log in
    event.preventDefault();
    const username = document.querySelector("#usernameLogIn").value;
    const password = document.querySelector("#passwordLogIn").value;
    if(username && password){
    const data = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(!data.ok){
        alert("Incorrect email or password, Please try again");
    }
    else{
        window.location.replace("/");
        
    }
    }

}




logInButton.addEventListener("submit", loginUser);
signUpButton.addEventListener("submit", createNewUser);
sSignUp.addEventListener("click", showLogIn);
sLogIn.addEventListener("click", showSignUp)
