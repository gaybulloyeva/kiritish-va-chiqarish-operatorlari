function solve() {
    let Tf =prompt("temperaturani kiriting")

    let Tc = (Tf - 32) * (5 / 9)

    if (Tf !=null) {
        document.getElementById("demo").innerHTML = "Natija: " + Tc
    }

    else {
        document.getElementById("demo").innerHTML = "Faqat son qabul qiladi!"
    }

}