var c = document.getElementById("myCanvas");
var ctx1 = c.getContext("2d");

var mouseX, mouseY;

c.addEventListener("mouseup", mouseUp1, false);

function drawX(x, y) {
  ctx1.moveTo(x - 20, y - 20);
  ctx1.lineTo(x + 20, y + 20);
  ctx1.stroke();

  ctx1.moveTo(x + 20, y - 20);
  ctx1.lineTo(x - 20, y + 20);
  ctx1.stroke();
}

function mouseUp1(e) {
  mouseX = e.pageX - c.offsetLeft;
  mouseY = e.pageY - c.offsetTop;
  drawX(mouseX, mouseY);
}

function changeBackground() {
  let colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF"
  ];

  let x = Math.ceil(Math.random() * colorArray.length);

  document.getElementById("changeBG").style.backgroundColor = colorArray[x];
}

var canvas = document.getElementById("myCanvasCircle"),
  ctx = canvas.getContext("2d"),
  circle = {},
  drag = false,
  circleMade = false,
  mouseMoved = false;

function draw() {
  ctx.beginPath();
  ctx.arc(circle.X, circle.Y, circle.radius, 0, 2.0 * Math.PI);
  ctx.stroke();
}

function mouseDown(e) {
  circle.startX = e.pageX - this.offsetLeft;
  circle.startY = e.pageY - this.offsetTop;

  circle.X = circle.startX;
  circle.Y = circle.startY;

  if (!circleMade) {
    circle.radius = 0;
  }

  drag = true;
}

function mouseUp() {
  drag = false;
  circleMade = true;

  if (!mouseMoved) {
    circle = {};
    circleMade = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  mouseMoved = false;
}

function mouseMove(e) {
  if (drag) {
    mouseMoved = true;
    circle.X = e.pageX - this.offsetLeft;
    circle.Y = e.pageY - this.offsetTop;
    if (!circleMade) {
      circle.radius = Math.sqrt(
        Math.pow(circle.X - circle.startX, 2) +
          Math.pow(circle.Y - circle.startY, 2)
      );
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
  }
}

function init() {
  canvas.addEventListener("mousedown", mouseDown, false);
  canvas.addEventListener("mouseup", mouseUp, false);
  canvas.addEventListener("mousemove", mouseMove, false);
}

init();

var rez = [0, 0];
var nr1 = [0, 0];
var nr2 = [0, 0];
var d = 0;
var e = 0;

function getFirstNumber(id) {
  let x = document.getElementById(id).value;
  for (let i = 0; i < x.length; i++) {
    let c = x.charAt(i);
    if (!(c >= "0" && c <= "9")) {
      return false;
    }
  }
  nr1[d++] = parseInt(x);
  return true;
}

function getSecondNumber(id) {
  let x = document.getElementById(id).value;
  let i = x.length;
  while (i--) {
    let c = x.charAt(i);
    if (!(c >= "0" && c <= "9")) {
      return false;
    }
  }
  nr2[e++] = parseInt(x);
  return true;
}

function ktheRez() {
  if (getFirstNumber("nr1") && getSecondNumber("nr2")) {
    rez[0] = nr1[0] + nr2[0];
    return rez[0];
  } else if (getFirstNumber("nr1")) {
    alert("Check number 2(Row 1) ");
  } else if (getSecondNumber("nr2")) {
    alert("Check number 1(Row 1)");
  } else {
    alert("Check both numbers (Row 1)");
  }
}

function ktheRez2() {
  if (getFirstNumber("nr3") && getSecondNumber("nr4")) {
    rez[1] = nr1[1] + nr2[1];
    return rez[1];
  } else if (getFirstNumber("nr3")) {
    alert("Check number 2(Row 2)");
  } else if (getSecondNumber("nr4")) {
    alert("Check number 1(Row 2)");
  } else {
    alert("Check both numbers (Row 2)");
  }
}

function vendosNumrin1() {
  let x = ktheRez();
  let y = document.getElementById("rez");

  if (typeof x == "number") {
    y.placeholder = "Result : " + x;
  }
}

function vendosNumrin2() {
  let x = ktheRez2();
  let y = document.getElementById("rez2");

  if (typeof x == "number") {
    y.placeholder = "Result : " + x;
  }
}

function kryejVeprimet(x) {
  let a = document.getElementById("rezz1");
  let b = document.getElementById("rezz2");
  let c = document.getElementById("rezz3");
  console.log(x);
  switch (x) {
    case "mbledh":
      a.placeholder = "Result : " + (nr1[0] + nr1[1]);
      b.placeholder = "Result : " + (nr2[0] + nr2[1]);
      c.placeholder = "Result : " + (rez[0] + rez[1]);
      break;
    case "zbrit":
      a.placeholder = "Result : " + (nr1[0] - nr1[1]);
      b.placeholder = "Result : " + (nr2[0] - nr2[1]);
      c.placeholder = "Result : " + (rez[0] - rez[1]);
      break;
    case "shumezo":
      a.placeholder = "Result : " + nr1[0] * nr1[1];
      b.placeholder = "Result : " + nr2[0] * nr2[1];
      c.placeholder = "Result : " + rez[0] * rez[1];
      break;
    case "pjeseto":
      a.placeholder = "Result : " + nr1[0] / nr1[1];
      b.placeholder = "Result : " + nr2[0] / nr2[1];
      c.placeholder = "Result : " + rez[0] / rez[1];
      break;
  }
}
