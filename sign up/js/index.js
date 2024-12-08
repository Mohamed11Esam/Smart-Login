// varibales
var registerForm = document.getElementById("registerForm");
var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var nameAlert = document.getElementById("nameAlert");
var emailAlert = document.getElementById("emailAlert");
var passwordAlert = document.getElementById("passwordAlert");
var existEmailAlert = document.getElementById("existEmailAlert");
var successAlert = document.getElementById("successAlert");
var allUsers = [];

if (localStorage.getItem("allUsers") !== null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

registerForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Form prevent Default

  if (CheckAllInputAreValid()) {
    addUser();
  } else {
    console.log("error");
  }
});

function addUser() {
  var newUser = {
    name: signUpName.value,
    email: signUpEmail.value,
    password: signUpPassword.value,
  };
  if (isExist(newUser) == true) {
    existEmailAlert.classList.replace("d-none", "d-block");
    successAlert.classList.replace("d-block", "d-none");
  } else {
    allUsers.push(newUser);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    existEmailAlert.classList.replace("d-block", "d-none");
    clearForm();
    successAlert.classList.replace("d-none", "d-block");

    setTimeout(function () {
      window.location.href = "./sign in/LogIn.html";
    }, 1500);
  }
}

function clearForm() {
  signUpName.value = null;
  signUpEmail.value = null;
  signUpPassword.value = null;
}

function isExist(newUser) {
  for (var i = 0; i < allUsers.length; i++) {
    if (newUser.email.toLowerCase() == allUsers[i].email.toLowerCase()) {
      return true;
    }
  }
}

function ValidateAllInput(regex, element, alertMsg) {
  var pattern = regex;
  if (pattern.test(element.value) == true) {
    alertMsg.classList.replace("d-block", "d-none");
    return true;
  } else {
    alertMsg.classList.replace("d-none", "d-block");
    return false;
  }
}

function CheckAllInputAreValid() {
  if (
    ValidateAllInput(/^[a-zA-z]{2,}$/, signUpName, nameAlert) &&
    ValidateAllInput(
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
      signUpEmail,
      emailAlert
    ) &&
    ValidateAllInput(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      signUpPassword,
      passwordAlert
    )
  ) {
    return true;
  } else {
    return false;
  }
}
