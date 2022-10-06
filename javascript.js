    let num = prompt("Deseja Fazer a Conversao em Dolar ou Euro?")
    let valor = prompt("Qual o Valor?")
    

    if (num == "euro"){
        let valorEuro = 5.11
        let resultadoEuro = valor * valorEuro
        alert("Valor em Euro: " + resultadoEuro.toFixed(2))
    }else if(num == ("dolar")) {
        let valorDolar = 5.19
        let resultadoDolar = valor * valorDolar
        alert ("Valor em Dolar: " + resultadoDolar.toFixed(2))
    }
    
    
    
    
    