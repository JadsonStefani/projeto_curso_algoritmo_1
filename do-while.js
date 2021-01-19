function acaoBotao(){
    var valor1, valor2, sair
    do{
        
        
        valor1 = prompt("Informe o primeiro valor: ")
        valor2 = prompt("Informe o segundo valor: ")
        
        
        alert("A soma dos dois valores é: "+ (parseInt(valor1) + parseInt(valor2)))
    
        sair = prompt("Deseja sair da execução? S/N")
    }while (sair == "N") 
    document.getElementById("paragrafo").innerText = "A soma dos dois valores é: "+ (parseInt(valor1) + parseInt(valor2))
}