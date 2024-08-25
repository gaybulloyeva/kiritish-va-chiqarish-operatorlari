function solve() {
    let x = prompt("x ga qiymat kiriting")

    let result = 4 * ((x - 3) ** 6) - 7 * ((x - 3) ** 3) + 2

    if (x != null) {
        document.getElementById("demo").innerHTML = "y= " + result
    }
}