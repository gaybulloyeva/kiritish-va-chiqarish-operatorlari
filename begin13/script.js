function solve() {
    let R1 = prompt("aylananing 1-radiusini kiriting");
    let R2 = prompt("aylananing 2-radiusini kiriting");
    let pi = 3.14;

    let S1 = R1 * pi;
    let S2 = R2 * pi;
    let S3 = pi * (R1 - R2);

    if (R1 > R2) {
        document.getElementById("demo").innerHTML = "Berilgan 1-aylananing yuzi " + S1 + " 2-aylalaning yuzi esa " + S2 + " ularning ayirmasi " + S3;
    }

    else {
        document.getElementById("demo").innerHTML = "Birinchi aylananing radiusi ikkinchisinikidan katta bo'lishi kerak!"
    }
}