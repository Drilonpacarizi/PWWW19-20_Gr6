var rez = [0, 0];
var nr1 = [0, 0];
var nr2 = [0, 0];
var d = 0;
var e = 0;


function getFirstNumber(id) {
    let x = document.getElementById(id).value;
    for (let i = 0; i < x.length; i++) {
        let c = x.charAt(i);
        if (!(c >= '0' && c <= '9')) {
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
        if (!(c >= '0' && c <= '9')) {
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
        alert("Numri 2(Rreshti 1) ka karaktere");
    } else if (getSecondNumber("nr2")) {
        alert("Numri 1(Rreshti 1) ka karaktere");
    } else {
        alert("Numri 1 (Rreshti 1) dhe Numri 2 (Rreshti 1) kane karaktere");
    }
}

function ktheRez2() {
    if (getFirstNumber("nr3") && getSecondNumber("nr4")) {

        rez[1] = nr1[1] + nr2[1];
        return rez[1];
    } else if (getFirstNumber("nr3")) {
        alert("Numri 2(Rreshti 2) ka karaktere");
    } else if (getSecondNumber("nr4")) {
        alert("Numri 1(Rreshti 2) ka karaktere");
    } else {
        alert("Numri 1 (Rreshti 2) dhe Numri 2 (Rreshti 2) kane karaktere");
    }
}


function vendosNumrin1() {
    let x = ktheRez();
    let y = document.getElementById("rez");

    if (typeof x == 'number') {
        y.placeholder = "Rezultati : " + x;


    }
}

function vendosNumrin2() {
    let x = ktheRez2();
    let y = document.getElementById("rez2");

    if (typeof x == 'number') {
        y.placeholder = "Rezultati : " + x;
    }
}

function kryejVeprimet(x) {
    let a = document.getElementById("rezz1");
    let b = document.getElementById("rezz2");
    let c = document.getElementById("rezz3");
    console.log(x);
    switch (x) {
        case "mbledh":

            a.placeholder = "Rezultati : " + (nr1[0] + nr1[1]);
            b.placeholder = "Rezultati : " + (nr2[0] + nr2[1]);
            c.placeholder = "Rezultati : " + (rez[0] + rez[1]);
            break;
        case "zbrit":
            a.placeholder = "Rezultati : " + (nr1[0] - nr1[1]);
            b.placeholder = "Rezultati : " + (nr2[0] - nr2[1]);
            c.placeholder = "Rezultati : " + (rez[0] - rez[1]);
            break;
        case "shumezo":
            a.placeholder = "Rezultati : " + (nr1[0] * nr1[1]);
            b.placeholder = "Rezultati : " + (nr2[0] * nr2[1]);
            c.placeholder = "Rezultati : " + (rez[0] * rez[1]);
            break;
        case "pjeseto":
            a.placeholder = "Rezultati : " + (nr1[0] / nr1[1]);
            b.placeholder = "Rezultati : " + (nr2[0] / nr2[1]);
            c.placeholder = "Rezultati : " + (rez[0] / rez[1]);
            break;
    }
}
