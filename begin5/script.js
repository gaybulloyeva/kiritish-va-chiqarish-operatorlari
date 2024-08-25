function solve() {
    let side = prompt("Kubning yon tomonini kiriting");

    let V = side ** 3;
    let S =6*(side**2)

    if(side>0){
        document.getElementById("demo").innerHTML="Berilgan aylananing hajmi "+V+" to'la sirti esa "+S;
    }

    else{
        document.getElementById("demo").innerHTML="Kiritilgan son kubning yon tomoni bo'la olmaydi!"
    }
}