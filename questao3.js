//3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorDoJantar = 85

let taxaGarcom = valorDoJantar * 0.1

let valorConta = valorDoJantar + taxaGarcom

console.log(`O valor correspondente à taxa do garçom é R$${taxaGarcom.toFixed(2)} e o valor total a ser pago pelo jantar é R$${valorConta.toFixed(2)}`)
