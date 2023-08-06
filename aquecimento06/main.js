/* 
Relembrando: busque resolver os exercícios apenas com as 
informações fornecidas acima da linha "Dica:". 

Leia as dicas apenas se precisar. 
*/

/*
01

Ao abrir o console do navegador, você verá que o console.log 
abaixo está exibindo false. 

Para que true seja exibido, você só precisa fazer 2 pequenos 
ajustes dentro da função. Os ajustes devem ser feitos dentro 
da função, não mexa em nada no console.log.

Faça os 2 pequenos ajustes e verifique se true foi exibido.

Após fazer true ser exibido, remova o console.log do código.

Dica: 

Ajuste 1: exporte o valor que está dentro da função.
Ajuste 2: modifique o tipo do valor que está sendo 
exportado.
*/

function y() {
  return 7 //EXPORTAR ATRAVES DO 'RETURN'
} // O VALOR ESTAVA STRING '7' E ALTERADO PARA NUMBER 7

//console.log(y() === 7) //Operador de comparação estrita. Função sendo invocada

/*
02

Declare uma variável contador e atribua o número um a ela. 
*/

//De LET para CONST
const contador = 1 //mudamos de const para let, porque uma const não permite reatribuição. Assim a função do proximo exercicio perdeu o erro.

/*
03

Crie uma função multiplicaContador que faz a variável 
contador receber o resultado de contador multiplicado 
por cem.

Use o operador abreviado para fazer a reatribuição.
*/
function pegaContadorMultiplicado() {
  //contador *= 100 //Operador abreviado
  return contador * 100 //Ao inves de fazer mutação, estou retornando um valor
}

console.log(contador) //1
//multiplicaContador() //invocando a função
//console.log(contador) //100

/*
04

Crie uma função divideContador que faz a variável 
contador receber o resultado de contador dividido 
por quatro.

Use o operador abreviado para fazer a reatribuição.
*/
function pegaContadorDividido() {
  //contador /= 4
  return contador / 4
}
//divideContador()
//console.log(contador)

/*
05

Crie uma função incrementaContador que incrementa o contador 
em um.

Use o operador de pré incremento.
*/
function pegaContadorIncrementado() {
  //++contador // pré incremento
  return contador + 1
}
//incrementaContador()
//console.log(contador)

/*
06

Crie uma função decrementaContador que decrementa o contador 
em um.

Use o operador de pré decremento.
*/
function pegaContadorDecrementado() {
  //--contador //pre decremento
  return contador - 1
}
//decrementaContador() //invocando a função
//console.log(contador)

/*
07

Execute a função multiplicaContador.
*/

pegaContadorMultiplicado()
//console.log(pegaContadorMultiplicado())

/*
08

Crie uma função pegaSetenta que retorna um objeto com uma 
propriedade numero que armazena o número setenta.
*/
function pegaSetenta() {
  return { numero: 70 } //retorna o objeto: Propriedade: numero/ valor: 70
}
//console.log(pegaSetenta())

/*
09

Use o retorno da função (invocação de) pegaSetenta para comparar se o valor da propriedade numero é maior ou igual a contador.
*/

console.log(pegaSetenta().numero >= contador)

/*
10

Divida o contador por quatro usando a função que você criou.
*/

pegaContadorDividido()
//console.log(pegaContadorDividido())
//console.log(contador)

/*
11

Incremente o contador em um usando a função que você criou.
*/

pegaContadorIncrementado()
//console.log(pegaContadorIncrementado())
//console.log(contador)

/*
12

Decremente o contador em um usando a função que você criou.
*/

pegaContadorDecrementado()
//console.log(pegaContadorDecrementado())
//console.log(contador)

/*
13

Crie uma função pegaNumeros que exporta os números 34, 
95 e 37.

Dica:

Use uma estrutura de lista.
*/
function pegaNumeros() {
  return [34, 95, 37]
}

//pegaNumeros()
//console.log(pegaNumeros())

/*
14

Use o retorno da função pegaNumeros para comparar se o valor 
do terceiro número do array é diferente de contador.
*/

console.log(contador)
console.log(pegaNumeros()[2])
console.log(pegaNumeros()[2] !== contador)

//======================================================================================

//Uma função pode receber parametros e argumentos
//Argumentos: valor inserido na invocação da função.
//Parametro: é uma variavel que recebe o valor que foi inserido como argumento. Variavel que pode ser usada dentro da função.
//Parametro: variavel local/escopo de uma função.

function somar (x, y) { //x, y são parametros que irão armazenar os valores da invocação da função
  //return 1 + 1 //valores estão estaticos, mesmo invocando varias vezes sempre somará 1 + 1. Deixar ela mais flexivel com valores diferentes.
  return x + y   //variavel local/escopo de uma função
}

//Mesma função com valores diferentes sendo invocadas
//somar(1, 1)
//somar(4, 3)

somar() //invocação da função
console.log(somar(1, 1))
console.log(somar(4, 3))

//Podemos armazenar as invocações em CONST
const resultado1 = somar(1, 1)
const resultado2 = somar(4, 3)
console.log(resultado1)
console.log(resultado2)

//Qual a diferença entre Parametro e Argumento?
//Parametro - é uma variavel que cria na declaração da função, dentro dos parenteses dela. 
    /*
      function somar (x, y) {
        return x + y 
      }
    */
//Essas variaveis só funionam dentro do escopo da função.
//Cada um desses parametros armazenam o valor que for inserido aqui, como primeiro argumento da invocação da função.
//Podem ser incluidos varios parametros, mas não precisam ser muitos


//Argumento
// É o valor que vc insere na invocação da função e esse valor é armazenado no parametro da função
//const resultado2 = somar(4, 3)

function dobrar (x) { //x recebe 2
return x * 2

}

dobrar(2) //esse valor da invocação é recebido por 'x' lá no parametro
console.log(dobrar(2))
dobrar(3)
console.log(dobrar(3))

//Qualquer tipo de valor pode ser inserido como parametro

function teste (y) {
  return y
}

//Exemplo da função recebendo quelquer tipo de valor
teste({prop: 1}) //objeto
teste([1, 2, 3]) //array
teste(7 + 7)     //numeros

console.log(teste({prop: 1}))
console.log(teste([1, 2, 3]))
console.log((7 + 7))

//console.log, é uma função interna da linguagem que pode receber varios valores.

//Declarar parametro e não inserir argumento:
function valor (x) {
  //return x
  return x + 7
}

valor() //irá retornar: undefined, ou seja ausencia de valor
console.log(valor())

//Caso some return x + 7 retorna NaN
// NaN:  Not a Number: não é um numero

console.log('Ba' + valor() + 'a')