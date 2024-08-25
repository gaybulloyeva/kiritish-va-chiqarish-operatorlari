function solve() {
    let A = prompt("1-koeffisentni kiriting")
    let B = prompt("2-koeffisentni kiriting")
    let C = prompt("3-koeffisentni kiriting")

    let D = B ** 2 - 4 * A * C

    let step1 = Math.abs(B)
    let step2 = -Math.abs(B)

    let x1 = ((step1 + Math.sqrt(D)) / 2) * A;
    let x2 = ((step1 - Math.sqrt(D)) / 2) * A;
    let x3 = ((step2 + Math.sqrt(D)) / 2) * A;
    let x4 = ((step2 - Math.sqrt(D)) / 2) * A;



    if (D > 0 && A != 0) {
        if (B.includes("-")) {
            document.getElementById("demo").innerHTML = "x1= " + x3 + " x2= " + x4
        }

        else {
            document.getElementById("demo").innerHTML = "x1= " + x1 + " x2= " + x2
        }
    }

    else {
        document.getElementById("demo").innerHTML = "Kiritilgan son xato!"
    }
}