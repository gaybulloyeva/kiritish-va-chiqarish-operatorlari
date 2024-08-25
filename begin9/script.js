function solve() {
    let a = prompt("Birinchi sonni kiriting");
    let b = prompt("Ikkinchi sonni kiriting");

    let step1 = a * b;
    let result = Math.sqrt(step1);

    if (a >= 0 && b >= 0){
        document.getElementById("demo").innerHTML="Berilgan 2ta sonning o'rta geometrigi "+result;
    }

    else{
        document.getElementById("demo").innerHTML="Siz manfiy son kiritdingiz!";
    }
}