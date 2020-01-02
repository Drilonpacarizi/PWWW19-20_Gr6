function check() {
  var x = document.getElementById("fullname");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function check2() {
  var x = document.getElementById("fullname");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// function checkPassword() {
//   var x = document.getElementById("password").nodeValue();
//   console.log(x);
// }
// var x = document.getElementById("password").value;
// console.log(x);

function test() {
  var x = document.getElementById("password").value;

  var pss = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (!x.match(pss)) {
    alert(
      "Passwordi duhet te kete : Nje shkronje te madhe , nje e vogel, nje numer ,6-20 karaktere"
    );
  }
}
