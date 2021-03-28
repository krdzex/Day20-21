var shift = 0;
var capsLock = 0;
function dodajSlovo(slovo) {

    if (slovo == "shift") {
        shift = 1;
        return;
    }
    if (slovo == "capsLock") {
        if (capsLock == 1) {
            capsLock = 0;
            return;
        }
        capsLock = 1;
        return;
    }
    if (slovo == "submit") {
        alert(document.getElementById("textArea").innerHTML);
        return;
    }
    if (slovo == "space") {
        document.getElementById("textArea").innerHTML += " ";
        return;
    }
    if (slovo == "backSpace") {
        document.getElementById("textArea").innerHTML = document.getElementById("textArea").innerHTML.slice(0, -1);
        return;
    }
    if (slovo == "enter") {
        document.getElementById("textArea").innerHTML += "\n";
        return;
    }
    if (shift == 1 && capsLock == 1) {
        document.getElementById("textArea").innerHTML += slovo.toUpperCase();
        capsLock = 0;
        shift = 0;
        return;
    }
    if (shift == 1) {
        document.getElementById("textArea").innerHTML += slovo.toUpperCase();
        shift = 0;
        return;
    }

    if (capsLock == 1 && shift == 0) {
        document.getElementById("textArea").innerHTML += slovo.toUpperCase();
        return;
    }
    document.getElementById("textArea").innerHTML += slovo;

}