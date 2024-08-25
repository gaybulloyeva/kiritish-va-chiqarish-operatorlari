

function solve() {
    let length = prompt("Kvadrat tomonini kiriting");

    let solution = length * 4;
    if (length > 0) {
        document.getElementById("demo").innerHTML = "Natija: " + solution
    }

    else{
        document.getElementById("demo").innerHTML = "Kiritilgan son kvadrat tomoni bo'la olmaydi"
    }
}

