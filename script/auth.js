var ch1 = 0;
var ch2 = 0;

function check() {
  ch2 = 0;
  var x = document.getElementById("fullname");
  if (ch1 == 0) {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    ch1 += 1;
  }
}

function check2() {
  ch1 = 0;

  var x = document.getElementById("fullname");
  if (ch2 == 0) {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    ch2 += 1;
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
