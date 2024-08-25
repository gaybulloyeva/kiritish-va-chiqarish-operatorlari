function solve() {
    let x = prompt("Konfet og'irligini kiriting")
    let a = prompt("Konfet narxini kiriting")

    let y = x * a

    if (x != null && a != null) {
        document.getElementById("demo").innerHTML = x + " kg konfet " + y + " so'm turadi"
    }

    else {
        document.getElementById("demo").innerHTML = "son kiriting"
    }
}