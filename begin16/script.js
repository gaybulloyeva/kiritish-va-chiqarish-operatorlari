function solve() {
    let x1 = prompt("1-sonni kiriting")
    let x2 = prompt("2-sonni kiriting")

    let result = Math.abs(x2 - x1)

    if (x1 != x2) {
        document.getElementById("demo").innerHTML = "Kiritilgan nuqtalar orasidagi masofa " + result
    }

    else {
        document.getElementById("demo").innerHTML = "ikkita bir xil nuqta kiritdingiz"
    }
}