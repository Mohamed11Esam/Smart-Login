var loginForm = document.getElementById("loginForm");
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginAlert = document.getElementById("loginAlert");
var loginSuccessAlert = document.getElementById("loginSuccessAlert");
var allUsers = [];

if (localStorage.getItem("allUsers") !== null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  login();
});

function login() {
  var userData = {
    userEmail: loginEmail.value,
    userPassword: loginPassword.value,
  };

  if (isLoginValid(userData) == true) {
    loginSuccessAlert.classList.replace("d-none", "d-block");
    loginAlert.classList.replace("d-block", "d-none");
    setTimeout(function () {
      window.location.href = "../welcome/welcome.html";
    }, 1500);
  } else {
    loginAlert.classList.replace("d-none", "d-block");
    loginSuccessAlert.classList.replace("d-block", "d-none");
  }
}

function isLoginValid(userData) {
  for (var i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email.toLowerCase() == userData.userEmail.toLowerCase() &&
      allUsers[i].password.toLowerCase() == userData.userPassword.toLowerCase()
    ) {
      localStorage.setItem("userName", allUsers[i].name);
      return true;
    }
  }
}
