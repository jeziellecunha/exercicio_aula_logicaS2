## Workshop Back end - Reprograma

#### Exercício 1 Lógica aplicada

**Professora: Simara Conceição**

**Aluna: Jezielle Cunha**



​	Ao decorrer da resolução do exercício proposto pela professora Simara, foi possível fixar na memória o conteúdo exposto durante a aula  de Lógica aplicada do dia 15 de maio de 2021. Além de praticar mais o pensamento lógico e matemático. Como também, proporcionada a oportunidade de pesquisar sobre o assunto e descobrir alternativas para solucionar as questões de forma mais criativa.

​	Concomitantemente, foi necessário revisitar o conteúdo visto na aula anterior, Git e GitHub, reforçando e consolidando o conhecimento adquirido anteriormente. O que contribuiu para construção do aprendizado consistente. 

A seguir, serão comentadas todas as questões do exercício proposto.

**1-**  _Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar._

Multiplicando por 0,2 o valor recebido na variável precoMercadoria, foi obtido o valor da variável valorDoDesconto. Subitraindo let precoMercadoria por let valorDoDesconto, chegamos na let precoFinal. Por meio da função console.log é a presentada a mensagem contendo o valor do desconto e o valor final a pagar pela mercadoria.

**2-**  _Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem._

Recebendo o valor da distância em KM na variável distanciaKm e o valor da velocidade média na variável velocidadeMediaKmH, foi possivel calcular o tempo de duração da viagem (let tempoDeViagem) dividindo a primeira pela segunda e apresentando o resultado no console pela função console.log.

**3-**  _Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago._

Com o valor recebido na variável valorJantar, foi possível calcular a let taxaGarcom que somada ao valor inicial resultou no valor total da conta que foi atribuído à variável valorConta e exposto no console com uma interpolação.

**4-** _Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado._

As variáveis kmPercorridos e diasAlugados receberam respectivamente a quantidade de KM percorridos e dias de uso do carro alugado. Multiplicando kmPercorridos por 0.15 e diasAlugados por 60 e somando os resultados, chegamos na let valorAluguel que foi exibido usando console.log.

**5-** _Receba do usuários 3 números e calcule a média entre eles._

No quinto quesito, as variáveis numero1, numero2, numero3 receberam cada uma um número que foram somados, utilizando parenteses devido a ordem de precedência dos operadores aritméticos,  e da soma resultado dividido por 3 e apresentado no console.

**6-**  _Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente._

Para gerar um número aleatóriamente, foi utilizado a função Math.random(), e para restringir os números entre 1 e 7, foi usado o seguinte esquema: Math.floor(Math.random() * (max - min)) + min; obtida no seginte endereço eletrônico: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random A estrutura condicional considerada mais adequada para esse quesito foi switch/case, devido o número mais elevado de condições analisadas.

**7-** _Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais"._

No setimo quesito, dois valores foram recebido nas variáveis numero1 e numero2 respectivamente. Através da estrutura condicional if/ else, foi verificado se os números são iguais ou qual é o de maior valor entre eles. E apresentando o resultado da comparação no console.

**8-** _Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:_

_Se a media for igual ou maior que 7 - Aprovado_

_Se a media for maior e igual a cinco e menor que 7 - Recuperação_

_Se a media for menor que 5 - Reprovado_

O quesito 8 consiste em receber as notas de determinado aluno nas variáveis nota1, nota2 e nota3. Já na variável media foi calculada a média do aluno e utilizando a estrutura condicional if/else, foi verificado a situação do aluno segundo sua média.

**9-** _Crie uma variavel que retorna a palavra (impar/par) de acordo com seu parâmetro._

A variável chamada valor recebeu a função Math.random multiplicada por 10, onde gera um número automatica e aleatoriamente de 0 a 10. E a função Math.round arredonda o valor para não ter casas decimais. Também poderia ser usada Math.floor, porém irá arredondar para baixo. No parâmetro de if é verificado se valor que foi gerado é par calculando o módulo de 2, depois é apresentado no console.

**10-** _Crie uma variavel que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor._

Com as informações das variáveis dataNascimento e anoAtual é calculado o valor da variável idade. Com este valor, é verificado se a pessoa é maior ou menor de idade por meio da estrutura condicional if /else . Onde no escopo do if foi utilizada concatenação. Enquanto no escopo do else foi usada a interpolação.



​	É interessante mensionar que a interpolação, ao primeiro contato, causa estranhesa devido sua sintaxe mais diferentona. Porém, a prática torna a interpolação mais fácil de usar que a contatenação que visualmente é mais aceitável.


​    