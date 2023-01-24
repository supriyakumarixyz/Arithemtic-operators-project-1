function calc() {

    var s1 = parseFloat(document.getElementById("s1").value);
    var s2 = parseFloat(document.getElementById("s2").value);
    var oper = document.getElementById("operators").value;
    if (oper == '+') {
        document.getElementById("outcome").value = s1 + s2;
    }
    if (oper == '-') {
        document.getElementById("outcome").value = s1 - s2;
    }
    if (oper == '/') {
        document.getElementById("outcome").value = s1 / s2;
    }
    if (oper == '*') {
        document.getElementById("outcome").value = s1 * s2;
    }
}

