var nome, nota1, nota2, media, passou;

passou = false;
nome = prompt("Digite o nome do aluno : ")
nota1 = prompt("Digite a nota 1 do aluno: ")
nota2 = prompt("Digite a nota 2 do aluno: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 8)
    passou = true
    
if (passou || (media >= 5 && media <=7 ))
    alert(nome + ", você foi aprovado.")   
else   
   alert(nome + ", você foi reprovado.")
