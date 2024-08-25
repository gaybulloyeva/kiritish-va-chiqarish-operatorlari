function solve() {
    let alfa = prompt("Gradusni kiriting")
    let gradus = 180

    let result =  alfa / 180

    if (alfa > 0 && alfa <= 360) {
        document.getElementById("demo").innerHTML = "Natija: " + result + " π"
    }

    else {
        document.getElementById("demo").innerHTML = "Kiritilgan son 0 va 360 gradus orasida bo'lishi kerak"
    }

    if (alfa == 180) {
        document.getElementById("demo").innerHTML = "Natija: π"
    }
}