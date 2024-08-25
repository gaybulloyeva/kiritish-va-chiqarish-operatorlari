function solve() {
    let diameter = prompt("Aylananing diametrini kiriting");

    const pi = 3.14;
    let L = pi * diameter;

    if (diameter > 0) {
        document.getElementById("demo").innerHTML = "Berilgan aylananing diametri " + L
    }

    else {
        document.getElementById("demo").innerHTML = "Kiritilgan son aylananing diametri bo'la olmaydi!"
    }
}