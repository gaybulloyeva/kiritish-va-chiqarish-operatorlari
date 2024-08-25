function solve() {
    let a = prompt("1-sonni kiriting");
    let b = prompt("2-sonni kiriting");

    let solution = (+a + +b) / 2;

    if (a != null && b != null) {
        document.getElementById("demo").innerHTML = "Kiritilgan 2ta sonning o'rta arifmetigi " + solution;
    }
}