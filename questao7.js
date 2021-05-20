//7 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let numero1 = 10;

let numero2 = 13;

if (numero1 === numero2) {
  console.log(`Os números ${numero1} e ${numero2} são iguais.`);
} else if (numero1 > numero2) {
    console.log(`O primeiro número: ${numero1} é maior que o segundo número: ${numero2}.`)
}else if (numero2 > numero1){
  console.log(`O segundo número: ${numero2} é maior que o primeiro número: ${numero1}.`)
}
else{ 
   console.log("Digite entradas válidas.") 
}
