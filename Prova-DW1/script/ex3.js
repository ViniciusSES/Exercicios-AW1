function reducao(){
    var sal = document.getElementById("sal").value
    var porcent
    var vRed
    var newSal

    if(sal <= 280){
        newSal = sal - (sal * 0.2)
        porcent = "20%"
        vRed = sal - newSal
    }

    if(sal >= 280 && sal <= 700){
        newSal = sal - (sal * 0.15)
        porcent = "15%"
        vRed = sal - newSal
    }

    if(sal >= 700 && sal <= 1500){
        newSal = sal - (sal * 0.1)
        porcent = "10%"
        vRed = sal - newSal
    }

    if(sal >= 1500){
        newSal = sal - (sal * 0.05)
        porcent = "5%"
        vRed = sal - newSal
    }

    document.write("Salario antes da redução: " + (sal))
    document.write(" Percentual Reduzido: " + (porcent))
    document.write(" Valor da redução: " + (vRed))
    document.write(" Salario após a redução: " + (newSal))

}