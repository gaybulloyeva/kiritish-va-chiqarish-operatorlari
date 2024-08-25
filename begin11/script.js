function solve() {
    let a = prompt("Birinchi sonni kiriting");
    let b = prompt("Ikkinchi sonni kiriting");

    let sum = +a + +b;
    let multiples = a * b;
    let modul1 = Math.abs(a);
    let modul2 = Math.abs(b);

    if (a != 0 && b != 0) {
        document.getElementById("demo").innerHTML = "Berilgan 2ta sonning yig'indisi " + sum + " ko'paytmasi " + multiples + " birinchi sonning moduli " + modul1 + " ikkinchi sonning moduli " + modul2
    }

    else {
        document.getElementById("demo").innerHTML = "Kiritilgan son 0 ga teng bo'lmasligi kerak!"
    }
}