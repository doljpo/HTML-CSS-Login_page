var loginPosition = document.getElementById("login-form");
var registerPosition = document.getElementById("register-form");
var selectedButtonPosition = document.getElementById("selected-option");

function showLoginForm() {
    loginPosition.style.left = "0%";
    registerPosition.style.left = "100%";
    selectedButtonPosition.style.left = "0%";
}

function showRegisterForm() {
    loginPosition.style.left = "-100%";
    registerPosition.style.left = "0%";
    selectedButtonPosition.style.left = "50%";
}

function toggleRememberMe() {
    document.getElementById("remember-check").checked = !document.getElementById("remember-check").checked;
}