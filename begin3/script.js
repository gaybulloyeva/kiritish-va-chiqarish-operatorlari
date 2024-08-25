

function solve() {
    let a = prompt("To'g'ri to'rtburchakning enini kiriting")
    let b = prompt("To'g'ri to'rtburchakning bo'yini kiriting")

    let S = a * b;
    let P = (+a + +b) * 2;

    if (a > 0 && b > 0) {
        document.getElementById("demo").innerHTML =
            "Berilgan to'g'ri to'rtburchakning yuzi: " + S + " perimetri esa: " + P;
    }

    else{
        document.getElementById("demo").innerHTML="Kiritilgan son to'g'ri to'rtburchakning tomoni bo'la olmaydi!"
    }
}