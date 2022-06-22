let carro = {
    marca: Honda,
    modelo: City,
    ano: 2020,
    preco: 85000,
    aVista: function(){
        console.log("Preço com 5% off: " + carro.preco - (5/100));
    }
};

console.log(carro.ano);

/*function aVista(){
    carro.preco = preco - (5/100)
}*/
    
