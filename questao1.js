//1-Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

let precoMercadoria = 120;

let valorDoDesconto = precoMercadoria * 0.2;

let precoFinal = precoMercadoria - valorDoDesconto;

console.log(
  `O valor do desconto é R$ ${valorDoDesconto} e o preço a pagar é R$ ${precoFinal}.`
);
