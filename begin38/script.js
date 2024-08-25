function solve() {
    let A = prompt("1-koeffisentni kiriting")
    let B = prompt("2-koeffisentni kiriting")

    let step1 = Math.abs(B)
    let x1 = step1 / A
    let step2 = -Math.abs(B)
    let x2 = step2 / A






    if (A != 0) {
        if (B.includes("-")) {
            document.getElementById("demo").innerHTML = "x= " + x1
        }

        else {
            document.getElementById("demo").innerHTML = "x= " + x2
        }
    }

    else {
        document.getElementById("demo").innerHTML = "Kiritilgan son xato!"
    }
}