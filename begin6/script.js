function solve() {
    let a = prompt("Parallelepiped tomonini kiriting");
    let b = prompt("Parallelepiped tomonini kiriting");
    let c = prompt("Parallelepiped tomonini kiriting");

    let V = a * b * c;
    let S = 2 * ((a * b) + (b * c) + (a * c));

    if (a > 0 && b > 0 && c > 0) {
        document.getElementById("demo").innerHTML = "Berilgan parallelepipedning hajmi " + V + " to'la sirti esa " + S
    }

    else{
        document.getElementById("demo").innerHTML = "Kiritilgan son xato!"   
    }
}