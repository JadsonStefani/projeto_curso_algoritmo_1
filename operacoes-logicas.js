var nome, nota1, nota2, media, passou;
nome = prompt("Digite o nome do aluno : ")
nota1 = prompt("Digite a nota 1 de " + nome + " : ")
nota2 = prompt("Digite a nota 2 de " + nome + " :")

media = (parseInt(nota1) + parseInt(nota2)) / 2
passou = false;
if (media >= 5) {
    passou = true;
}

if (passou && (media >= 5 && media <=9))
   alert(nome + ", você foi aprovado(a).") 
else    
   alert(nome + ", você foi reprovado(a).")

