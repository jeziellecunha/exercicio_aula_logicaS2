/*8 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

- Se a media for igual ou maior que 7 - Aprovado
- Se a media for maior e igual a cinco e menor que 7 - Recuperação
- Se a media for menor que 5 - Reprovado*/

let nota1 = 5
let nota2 = 7
let nota3 = 8
let media = (nota1 + nota2 + nota3)/3

if (media >= 7){
    console.log("Aluno aprovado.")
}
else if (media<7 && media>=5){
    console.log("Aluno em recuperação.")
}
else{
    console.log("Aluno reprovado.")
}