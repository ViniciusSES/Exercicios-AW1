function Soma(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("result1").innerHTML = "Resposta: " + (n1 + n2);
}

function Fatora(){
    var n = parseInt(document.getElementById("n").value);
    var fatorial = n;

    for(i=1; i<n; i++){
        fatorial = fatorial*(n-i);
    }
    
    document.getElementById("result2").innerHTML = "Resposta: " + (fatorial);
}