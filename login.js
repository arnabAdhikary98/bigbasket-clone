let signupBtn = document.querySelector("#signupBtn")
let loginBtn = document.querySelector("#loginBtn")
let nameField = document.querySelector("#name-field")
let title = document.querySelector("#title")

loginBtn.addEventListener("click", function(){
    nameField.style.maxHeight = "0"
    title.innerHTML = "Log In"
    signupBtn.classList.add("disable")
    loginBtn.classList.remove("disable")
});

signupBtn.addEventListener("click", function(){
    nameField.style.maxHeight = "60px"
    title.innerHTML = "Sign Up"
    signupBtn.classList.remove("disable")
    loginBtn.classList.add("disable")
});