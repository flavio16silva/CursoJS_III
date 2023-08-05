//Assim como objeto, Arrays são multaveis por padrão.
//Array são objetos
//const não garante imultabilidade em arrays

const numeros = [1, 2, 3]
numeros[3] = 4
console.log(numeros)

//O que é Expressão em JavaScript?
//é um pedaço de codigo que retorna um valor.

const game = {
  nome: 'Final Fantasy - PlayStation 5',
  estaNoPrime: false
}
console.log(game.nome) //aqui vemos uma "expressão" que retorna um valor

//Para o JS não exsite problemas em espaços em branco
console.log(7 + 3)
console.log(10 * 2)

//============ Operador de Incremento ++ =================================
//Incrementa uma variavel de um em um
let numero = 7
//numero = numero + 1: O que esta a direita do sinal de atribuição é executado primeiro, e entao incrementamos nossa variável.
numero++ //incremento - atalho para a variavel receber o valor que ela armazena somado a um
console.log(numero)

//================ pós incremento ou pré incremento =====================
console.log('========== pós incremento ou pré incremento ======================')
//pós incremento: numero++
//1º Essa expressao retorna o valor que a LET tem antes de ser incrementada.
//2º E depois incrementa a LET

//pré incremento: ++numero
//1º Acrescenta e então retorna o novo valor da let
console.log(++numero)

//Decremento
//================ pós decremento ou pré decremento =====================
console.log('========== pós decremento ou pré decremento ======================')
//numero = numero - 1
//Não podemos usar CONST porque faz retribuição por baixo dos panos
numero--
console.log(numero--)
console.log(numero)

//Pre Decremento
//retorna o valor da LET já decrementado
console.log(numero)
console.log(--numero)

//========== Operadores de Atribuição Compostos ======================
console.log('========== Operadores de Atribuição Compostos ======================')
//Incrementa uma variavel em mais de um valor
//Escrever menos e chegar no mesmo resultado
let valor = 7
//numero = numero + 5, e a mesma coisa da expressão abaixo:
valor += 5
console.log(valor)

//numero = numero - 3, e a mesma coisa da expressão abaixo:
valor -= 3
console.log(valor)

//valor = valor * 2, e a mesma coisa da expressão abaixo:
valor *= 2
console.log(valor)

//valor = valor / 2, e a mesma coisa da expressão abaixo:
valor /=2
console.log(valor)
valor--
valor++
console.log(valor)

