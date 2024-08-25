function solve() {
    let R = prompt("Doiraning radiusini kiriting")
    let pi = 3.14

    let L = 2 * pi * R
    let S = pi * (R ** 2)

    if (R > 0) {
        document.getElementById("demo").innerHTML = "Berilgan doiraning uzunligi " + L + " yuzasi esa " + S
    }

    else {
        document.getElementById("demo").innerHTML = "Kiritilgan son xato!"
    }
}