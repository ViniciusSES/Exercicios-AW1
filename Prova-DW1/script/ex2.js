function calculaSal(){
    var funcN = document.getElementById("num").value
    var funcH = document.getElementById("horas").value
    var funcValHr = document.getElementById("vHora").value
    var funcFi = document.getElementById("numFilho").value
    var sal = funcH * funcValHr
    var funcAcresFi = sal + (funcFi * 0.1)*sal

    document.write("Numero do funcionario: " + (funcN))
    document.write("| Salário: " + (funcAcresFi))
}