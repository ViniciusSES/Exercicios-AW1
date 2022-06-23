let carro = {
    marca: "Honda",
    modelo: "City",
    ano: "2020",
    preco: "85000",
};

//function calcular(){
document.write("Preço com 5% off pagando a vista: " + "R$" + ((carro.preco * 95) / 100));
document.write("; 50% de entrada: " + "R$" +  ((carro.preco / 2)));
document.write("; O resto dividido em 12 parcelas " + "R$" + ((carro.preco / 2) / 12));
//}

/*function aVista(){
    carro.preco = preco - (5/100)
}*/
    
