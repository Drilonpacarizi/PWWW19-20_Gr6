p1y = p2y = 40;
pt = 10;
ph = 100;
bx = by = 50;
bd = 6;
xv = yv = 4;
score1 = score2 = 0;
ais = 2;
window.onload = function() {
  canvas = document.getElementById("gc");
  context = canvas.getContext("2d");
  setInterval(update, 1000 / 30);
};
function reset() {
  //   console.log("reset called");
  bx = canvas.width / 2;
  by = canvas.height / 2;
  xv = -xv;
  yv = 3;
}

let test = "";
window.addEventListener(
  "keydown",
  function(event) {
    test = "";
    let str =
      "KeyboardEvent: key='" + event.key + "' | code='" + event.code + "'";
    let el = document.createElement("span");
    el.innerHTML = str + "<br/>";
    test = event.key;
  },
  true
);

function update() {
  bx += xv;
  by += yv;
  if (by < 0 && yv < 0) {
    yv = -yv;
  }

  if (by > canvas.height && yv > 0) {
    yv = -yv;
  }

  if (bx < 0) {
    if (by > p1y && by < p1y + ph) {
      xv = -xv;
      dy = by - (p1y + ph / 2);
      yv = dy * 0.3;
    } else {
      score2++;
      reset();
      if (checkWinner(score2)) {
        score1 = 0;
        score2 = 0;
        alert("Player 2 is the winner ! gz ! ");
        p1y = p2y = 40;
      }
    }
  }
  if (bx > canvas.width) {
    if (by > p2y && by < p2y + ph) {
      xv = -xv;
      dy = by - (p2y + ph / 2);
      yv = dy * 0.3;
    } else {
      score1++;
      reset();
      if (checkWinner(score1)) {
        score1 = 0;
        score2 = 0;
        alert("Player 1 is the winner ! gz!  ");
        p1y = p2y = 40;
      }
    }
  }

  if (test === "ArrowRight") {
    p2y += 2 * ais;
  } else if (test === "ArrowLeft") {
    p2y -= 2 * ais;
  } else {
  }

  if (test === "d") {
    p1y += 2 * ais;
  } else if (test === "a") {
    p1y -= 2 * ais;
  } else {
  }

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "white";
  context.fillRect(0, p1y, pt, ph);
  context.fillRect(canvas.width - pt, p2y, pt, ph);
  context.fillRect(bx - bd / 2, by - bd / 2, bd, bd);

  context.fillText(score1, 100, 100);
  context.fillText(score2, canvas.width - 100, 100);
}

function checkWinner(s1) {
  return s1 == 3;
}
