function avalia() {
    var parafuso1 = document.getElementById("parafuso1").value
    var parafuso2 = document.getElementById("parafuso2").value
    var parafuso3 = document.getElementById("parafuso3").value
    var parafuso4 = document.getElementById("parafuso4").value

    var total =
        parseInt(document.getElementById("parafuso1").value) +
        parseInt(document.getElementById("parafuso2").value) +
        parseInt(document.getElementById("parafuso3").value) +
        parseInt(document.getElementById("parafuso4").value)

    var media = total / 4

    var resp

    if (parafuso1 < 2000 || parafuso2 < 2000 || parafuso3 < 2000 || parafuso4 < 2000) {
        //document.write("REPROVADO")
        var myobj=document.getElementById("resp");
        myobj.style.backgroundColor = "red";
        myobj.innerHTML= "Reprovado";
    }
    else if (media > 3000) {
        //document.write("APROVADO")
        var myobj=document.getElementById("resp");
        myobj.style.backgroundColor = "green";
        myobj.innerHTML= "Aprovado";
    }
    else if (media >= 2000 || media <= 3000) {
        //document.write("NORMAL")
        var myobj=document.getElementById("resp");
        myobj.style.backgroundColor = "yellow";
        myobj.innerHTML= "Normal";
    }
}