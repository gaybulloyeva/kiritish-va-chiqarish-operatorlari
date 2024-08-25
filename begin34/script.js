// function solve() {
//     let x = prompt("shkoladning og'irligini kiriting")
//     let a = prompt("shkolad narxini kiriting")
//     let y = prompt("konfetning og'irligini kiriting")
//     let b = prompt("konfetning narxini kiriting")

//     let shkolad = x * a
//     let konfet = y * b
//     let cost = shkolad - konfet

//     if (shkolad <= 0 && konfet <= 0) {
//         document.getElementById("demo").innerHTML = "kiritilgan ma'lumot xato!"
//     }

//     if (shkolad > konfet) {
//         document.getElementById("demo").innerHTML = "shkolad konfetdan " + cost + " so'm qimmat"
//     }

//     else {
//         document.getElementById("demo").innerHTML = "shkolad konfetdan qimmat emas"
//     }

//     if (shkolad == konfet) {
//         document.getElementById("demo").innerHTML = "shkolad va konfetning narxi teng"
//     }
// }












function solve() {
    let a = prompt("olmalar soni")
    let num = prompt("nechtadan")

    let step = a / num
    let result = Math.floor(step)
    let qoldi = a % num

    if (a > 0 && num > 0) {
        document.getElementById("demo").innerHTML = a + " ta olma " + num + " tadan " + result + " qutiga ketadi" + qoldi + " ta ortib qoldi"
    }

    else {
        document.getElementById("demo").innerHTML = "0dan katta son kiritish kerak"
    }
}












//100 7tadan 