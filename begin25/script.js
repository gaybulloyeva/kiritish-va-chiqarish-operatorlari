function solve() {
    let x = prompt("x ning qiymatini kiriting")
    x = +x
    let result = 3 * (x ** 6) - 6 * (x ** 2) - 7

    if (x != null) {
        document.getElementById("demo").innerHTML = "y= " + result
    }

    else {
        document.getElementById("demo").innerHTML = "x ga son bering"
    }
}