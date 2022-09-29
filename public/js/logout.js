const logout = async () =>{
  console.log(true);
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })
  if(!response.ok){
    window.alert("Failed to log out");
  }
  else{
    window.location.replace("/")
  }

}

document.querySelector("#logout").addEventListener("click", logout);