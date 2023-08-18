//METODOS: MAP, FILTER, REDUCE - metodos usados para transformar dados.
/*
Escreve codigos funcionais:
- aplicações mais previsiveis
- mas facil de testar
- e de encontrar erros.
*/


// ============================================ MAP ===========================================
//Quando usar o MAP ?
/*
 - Quando precisamos obter um array com a "mesma quantidade" de itens do array original.
 - É um metodo de array que precisa receber como "argumento" a declaração de uma função. 
 - É atraves dessa função que será especificado a forma de execução.

 Ex.: [1, 2, 3] => [3, 6, 9] - retornando o triplo do original, com a mesma quantidade de itens
*/
 
//Porque obter um novo array? Para também ter cada "item transformado".

console.log('============================================ MAP ===========================================')
const numbers = [1, 2, 3]
//console.log(numbers)
// numbers.map((item, index, array) => {  //Será executada para item do array numbers. Essa função pode receber até 3 parametros.
//   console.log(item, index, array)      //ver no console.
// } )  

//Ao usar o metodo MAP somente o primeiro parametro é obrigatorio
//Em caso de parametro unico, podemos remover os parenteses.

/*
Ex.:
numbers.map(item => {             - parametro unico
  console.log(item)      
})



PADRÃO: numbers.map(() => {})
*/



/*
REGRA: 
Essa função 'sempre' deve retornar um valor. 
Esse valor retornado será adicionado como item do array que o MAP gerar por debaixo dos panos.
*/


const double = numbers.map(item => {  //armazenando numa const a função para melhor impressão. 
  return (item * 2)                   //SEMPRE RETORNAR UM VALOR: "RETURN" SENDO USADO.   
} )

console.log(numbers)
console.log(double)                   //Obter no console o array [2,4,6]
console.log(double === numbers)       //Verificar se são iguais.



/*  =========== Uso do efeito colateral  - FOR EACH
const arr2 = [10, 20, 30]
const arr3 = []

arr2.forEach(item => {
  arr3.push(item * 2)
})
console.log(arr3)                  ARRAY(3) [20, 40, 60]
*/

/* Ex.: 1
const prices = [20, 10, 30, 25, 15, 40, 80, 5]
const salePrices = prices.map(price => price / 2)
console.log(salePrices)
*/



const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product =>{      //Recebendo o proprio objeto.
  if (product.price >= 30) {        //caso a condição seja verdadeira retorna um novo objeto, baseado no product que é recebido como parametro
    //product.price = product.price / 2  //MÁ PRÁTICA : Modificando todo o array, saindo da imultabilidade e ocorrendo multabilidade(mudanças)  
     return {
       ...product,                    //SPREAD, propriedades do objeto espalhadas
       price: product.price / 2       //Nesse novo objeto o preço estará pela metade
     }
   }
     return product                  //para não retornar undefined. Caso comente mostra os valos indefinidos
})
console.log(saleProducts)            
console.log(products)  
/*
Toda função que não retorna valor, retorna undefined por baixo dos panos.
QUANDO USAMOS SINAL DE ATRIBUIÇÃO '=' FORA DO MOMENTO QUE O PARAMETRO, CONST, PROPRIEDADE É CRIADA VOCÊ ESTA FAZENDO REATIBUIÇÃO DE VALOR, GERANDO MULTABILIDADE. 
*/ 


// =============================  FILTER ===================================
/*
Quando usar o filter ?

Quando precisamos obter um "novo array" com uma quantidade de itens MENOR que a do array original.
Exemplo: [1,2,3] => [1,2]: números menores que 3, usando o filter.

*/

console.log('=============================  FILTER ===================================')
/* Array aleatório */
const randomNumbers = [36, 99, 37, 63]
const numberGreatherThan37 = randomNumbers.filter(item => item > 37) 
/*
Irá varrer cada item do array e irá retornar true ou false. 
Adicionando o item no 'novo array' que será criado. 
Só irá retornar os 'valores true' a serem inseridos no novo array, senão o item será ignorado.

*/
console.log(numberGreatherThan37)

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium) //Só irá retornar os 'valores true' a serem inseridos no novo array, senão o item será ignorado.
console.log(premiumUsers)

// =============================  REDUCE ===================================

/*
Quando usar o Reduce?

- Quando baseado no array original você precisa "REDUZIR" o array a um valor. 
- Esse valor pode ser objeto, string, number ou até mesmo um novo array, ou seja qualquer valor. 
- Tem versatilidade para gerar um valor qualquer. 

[1, 2, 3] => [6] //soma dos numeros, retorna um unico numeros - reduzindo o array original

*/
console.log('=============================  REDUCE ===================================')


const num = [1, 2, 3]
const sumResult = num.reduce((accumulator, item) => accumulator + item, 0) 
/*
 - Segundo argumento é opcional = 0. Só usado na primeira execução, Inicial. Sempre colocar 0
 - Pode receber também como parametro index e array
 - primeira rodada - accumulator = 0 (que é o segundo parametro do reduce) / item = 1, que é o primeiro item do array
 - O resultado da soma de 0 + 1 irá ser colocada em accumulator, aqui: ((accumulator, item), para proxima execução

*/

console.log(sumResult)
//Essa função sempre deverá retornar um valor
//O parametro accumulator recebe o valor na proxima execução da função reduce. Esse valor é lembrado a cada vez na função.

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

//const rogerScore = phaseScores.reduce(() => {}, 0)
const rogerScore = phaseScores.reduce((acc, player) => {
  if (player.name === 'Roger Melo') {
    return acc + player.score
  }

  return acc 
}, 0)
console.log(rogerScore)
//Ternário:  player.name === 'Roger Melo' ? acc + player.score : acc, 0, sem as chaves
//acc = 0, player = primeiro objeto do array, retorna 0, 
//acc = 0, player = segundo objeto do array - executa o bloco if = 0 + 43
//acc = 43, player = terceiro objeto do array...

/*

Ler Docs:
1) Familiarizar
2) Não clicar nos links

leitura em savoring

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/