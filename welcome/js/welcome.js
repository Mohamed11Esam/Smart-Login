var welcomeMsg = document.getElementById("welcomeMsg");

window.addEventListener("load", function () {
  displayName();
});

function displayName() {
  welcomeMsg.innerHTML = `Welcome ${localStorage.getItem("userName")}`;
}
function Logout() {
  setTimeout(function () {
    window.location.href = "/index.html";
  }, 1500);
}
