//10 - Crie uma variavel que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.


const dataNascimento = 1990
let anoAtual = 2021

let idade
idade = anoAtual - dataNascimento

if (idade < 18){
    console.log("Você tem " + idade + " anos, então você é menor de idade!")
}
else {
    console.log(`Você tem ${idade} anos, então você é maior de idade!`)
}
