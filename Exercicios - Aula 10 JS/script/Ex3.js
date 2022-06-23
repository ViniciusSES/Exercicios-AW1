let carro = {
    marca: "VW",
    modelo: "Fusca",
    ano: "1982",
    preco: "20000",
};

//function calcular(){
    document.write("Marca: " + (carro.marca) + "<br> Modelo: " + (carro.modelo) +
    "<br> Ano: " + (carro.ano) + "<br> Preço: " + (carro.preco) + "<br>")
    document.write("<br> Preço com 5% off pagando a vista: " + "R$" + ((carro.preco * 95) / 100));
    document.write("<br> 50% de entrada: " + "R$" +  ((carro.preco / 2)));
    document.write("<br> O resto dividido em 12 parcelas " + "R$" + ((carro.preco / 2) / 12));
//}    
