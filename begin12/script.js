function solve() {
    let a = prompt("1-katet uzunligini kiriting");
    let b = prompt("2-katet uzunligini kiriting");

    let step1 = a ** 2;
    let step2 = b ** 2;
    let sum = step1 + step2;
    let root = Math.sqrt(sum);

    let P = +a + +b + root;

    if (a > 0 && b > 0) {
        document.getElementById("demo").innerHTML = "Berilgan to'g'ri uchburchakning gipotenuzasi " + root + " perimetri esa " + P
    }

    else {
        document.getElementById("demo").innerHTML = "kiritilgan son xato!"
    }
}