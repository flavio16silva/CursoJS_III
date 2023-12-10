//Expressões e operadores incremento/decremento

//Assim como objetos arrays também são multaveis por padrão no JS

/*
O que é uma expressão em JS?
- É um trecho de código que retorna algum valor. 
- É um trecho de código que pode ser avaliado e resolvido em um certo valor. Ex: 2+3, "teste", true
- A expressão retorna o valor com ou sem o: console.log

console.log - é usado apenas para visualizar valor
*/

const jogo = {
    nome: 'Fortnite',
    plataforma: 'PC'
}

console.log(jogo)


//Espaços em branco nas expressões não fazem diferença no JS
console.log(7 + 3)
console.log(7 -    3)
console.log(7 /3)

/*
Operador de Incremento - quando precisamos incrementar variavel de 1 em 1
Em operador de incremento não podemos usar const, porque caso use não será permitido reatribuir valor. Debaixo dos panos tá tentando fazer
uma reatribuição: contagem = contagem + 1

*/
let contagem = 10;
contagem++                         //contagem = contagem + 1
console.log(contagem);

//pos-incremento: number++ 
console.log('=== number ===')
let number = 7
console.log(number++) //retorna o valor da let antes de ser incrementada = 7
console.log(number)   //valor da let incrementada = 8

//pre-incremento: ++number - Essa expressão já retorna o valor da let incrementado
console.log('=== valor ===')
let valor = 7
console.log(++valor)    // = 8

//Operador de Decremento - decrementar variavel de 1 em 1
//Pos-Decremento
console.log('=== num ===')
let num = 7
num--            //number = number - 1    :6
console.log(num--) //retorna o valor da let antes de ser decrementada e logo após decrementa a let

//Pre-Decremento
console.log('=== inteiro ===')
let n = 7
console.log(--n)  //Essa expressão já retorna o valor da let decrementado
