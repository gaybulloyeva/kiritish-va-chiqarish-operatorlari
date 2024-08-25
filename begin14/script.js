function solve() {
    let L = prompt("aylananing uzunligini kiriting")
    let pi = 3.14;

    let R = L * pi * 2;
    let S = pi * (R ** 2);

    if (L > 0) {
        document.getElementById("demo").innerHTML = "berilgan aylananing radiusi " + R + " yuzi esa " + S;
    }

    else {
        document.getElementById("demo").innerHTML = "kiritilgan son xato!"
    }
}