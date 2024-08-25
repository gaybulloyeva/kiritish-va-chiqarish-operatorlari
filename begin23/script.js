function solve() {
    let A = prompt("A sonni kiriting")
    let B = prompt("B sonni kiriting")
    let C = prompt("C sonni kiriting")

    if (A != null && B != null && C != null) {
        document.getElementById("demo").innerHTML = "alishgan qiymat A: " + B + " B: " + C + " C: " + A
    }
}