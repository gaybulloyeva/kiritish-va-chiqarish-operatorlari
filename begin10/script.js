function solve() {
    let a = prompt("Birinchi sonni kiriting");
    let b = prompt("Ikkinchi sonni kiriting");

    let sum = +a + +b;
    let multiples = a * b
    let kva = a ** 2
    let kvb = b ** 2

    if(a!=0 && b!=0){
        document.getElementById("demo").innerHTML="Berilgan 2ta sonning yig'indisi "+sum+" ko'paytmasi "+multiples+" birinchi sonning kvadrati "+kva+" ikkinchi sonning kvadrati "+kvb
    }

    else{
        document.getElementById("demo").innerHTML="Kiritilgan son 0 ga teng bo'lmasligi kerak!"
    }
}