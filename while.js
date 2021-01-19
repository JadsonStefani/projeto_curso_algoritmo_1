
function acaoBotao(){
    var nome, idade, qtdvezes,contador
    //alert("Sistema para saber se determinada pessoa é maior de idade ou não.")
    qtdvezes = prompt("Informe a quantidade de vezes que queres fazer a validação de idade!")
    contador = 0
    while (contador < qtdvezes) {
        //nome = prompt("Informe seu nsome completo: ", "Informe seu  nome completo")
        nome = prompt("Informe seu nome completo: ")
        //idade = prompt("Informe a idade de ",nome)   tem diferenças colocar a vírgula e o sinal de soma
        idade = prompt("Informe a idade de "+nome) 

        if ( idade > 18 ){
            document.getElementById("paragrafo").innerText = nome +" você é maior de idade."
            alert(nome +" você é maior de idade.");
        }else{
            document.getElementById("paragrafo").innerText = nome +" você é menor  de idade."
            alert(nome +" você é menor de idade.")
        }
    contador++
    }
}  