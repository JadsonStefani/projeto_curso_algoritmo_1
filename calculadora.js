
function acaoBotao(){
    var valor1,valor2, resultado, operacao;
    alert("Calculando a matemática de dois valores.")
    alert("Informe dois números e qual a operação matemática que quer realizar com eles.")
    valor1 = prompt("Informe o primeiro valor: ")
    valor2 = prompt("Informe  o segundo valor: ")
    operacao = prompt("Digite + para somar, - para diminuir, * para multiplicar e / para dividir os números.")
    
    /*if(operacao == "+"){
        resultado = parseInt( valor1 ) + parseInt( valor2 )
    }else if(operacao == "-"){
        resultado = parseInt( valor1 ) - parseInt( valor2 )
    }else if(operacao == "*"){
        resultado = parseInt( valor1 ) * parseInt( valor2 )
    }else if(operacao =="/"){
        resultado = parseInt( valor1 ) / parseInt( valor2 )
    }*/
    switch (operacao){
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;
        default:    
            alert("Operação Inválida!")
            break;
    }
    document.getElementById("paragrafo").innerText = ("O resultado da operação é: "+resultado)
}
