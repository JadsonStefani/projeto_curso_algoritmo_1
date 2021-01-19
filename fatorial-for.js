function acaoBotao(){
    var numero, fatorial

    alert("Sistema de cálculo fatorial!")
    numero = prompt("Informe qual o número que deseja calcular o fatorial")

    fatorial = 1
    for (var cont = 1; cont <= numero; cont++) {
        fatorial = fatorial * cont
    }
    document.getElementById("paragrafo").innerText = ("O fatorial de "+ numero+" é "+ fatorial)
}