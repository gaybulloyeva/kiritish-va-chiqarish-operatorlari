
function solve() {
    let length = prompt("Kvadrat tomonini kiriting");

    let solution = length ** 2;
    if (length > 0) {
        document.getElementById("demo").innerHTML = "Natija: " + solution
    }

    else {
        document.getElementById("demo").innerHTML = "Kiritilgan son kvadratning tomoni bo'la olmaydi!"
    }
}