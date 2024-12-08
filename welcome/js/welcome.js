var welcomeMsg = document.getElementById("welcomeMsg");

window.addEventListener("load", function () {
  displayName();
});

function displayName() {
  welcomeMsg.innerHTML = `Welcome ${localStorage.getItem("userName")}`;
}
function Logout() {
  setTimeout(function () {
    window.location.href = "../sign in/Login.html";
  }, 1500);
}
