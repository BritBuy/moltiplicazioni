var int1 = Math.floor(Math.random() * 100);
var int2 = Math.floor(Math.random() * 100);
var int3 = int1 * int2;
document.getElementById("question").innerHTML = "Quanto fa " + int1 + " x " + int2 + "?";
function modify() {
    document.getElementById("question").style.display = "none";
    document.getElementById("insert").style.display = "block";
    document.getElementById("game2").innerHTML = "Salva modifiche";
}
function ok() {
    document.getElementById("question").style.display = "block";
    document.getElementById("insert").style.display = "none";
    document.getElementById("game2").innerHTML = "Modifica moltiplicazione";    
}
function reset() {
    int1 = Math.floor(Math.random() * 100);
    int2 = Math.floor(Math.random() * 100);
    int3 = int1 * int2;
    document.getElementById("question").innerHTML = "Quanto fa " + int1 + " x " + int2 + "?";
}
function send() {
    if (document.getElementById("answear").value == int3) {
        reset();
        alert(document.getElementById("answear").value + " è la risposta corretta!")
    } else {
        alert(document.getElementById("answear").value + " non è la risposta corretta.");
    }
}