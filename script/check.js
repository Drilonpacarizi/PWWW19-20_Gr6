let storedLog = sessionStorage.getItem("login");
console.log(typeof storedLog);
if (storedLog == "true") {
  document.getElementById("signup").removeAttribute("href");
  document.getElementById("login").removeAttribute("href");
  document.getElementById("login").innerHTML = "Logout";
  document.getElementById("login").setAttribute("href", "#");

  document.getElementById("login").setAttribute("onclick", "logout()");
}

function logout() {
  event.preventDefault();
  sessionStorage.setItem("login", false);

  document.getElementById("login").innerHTML = "Login";

  let a = document.getElementById("login");
  a.removeAttribute("onclick");
  a.setAttribute("href", "auth.html");
  storedLog = sessionStorage.getItem("login");

  let b = document.getElementById("signup");
  b.setAttribute("href", "auth.html");
}
