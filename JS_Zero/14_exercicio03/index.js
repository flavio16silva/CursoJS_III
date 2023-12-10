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

function y () {
  return 7
}

//console.log(y() === 7)

/*
02

Declare uma variável contador e atribua o número um a ela. 
*/
//COMO RESOLVER OS EXERCICIOS SEM FAZER MUTAÇÃO - ALTERAMOS A LET PARA CONST
const contador = 1

/*
03

Crie uma função multiplicaContador que faz a variável 
contador receber o resultado de contador multiplicado 
por cem.

Use o operador abreviado para fazer a reatribuição.
*/

function pegaContadorMultiplicado(){ //alteração do nome da função de: multiplicaContador para o mostrado na função, porque o contador já virá multiplicado
  return contador * 100 //inclusão do return e alteração de contador *= 100 para o mostrado na função
}
//multiplicaContador()
//console.log(contador)

/*
04

Crie uma função divideContador que faz a variável 
contador receber o resultado de contador dividido 
por quatro.

Use o operador abreviado para fazer a reatribuição.
*/

function pegaContadorDividido(){
  return contador / 4
}

/*
05

Crie uma função incrementaContador que incrementa o contador 
em um.

Use o operador de pré incremento.
*/
function pegaContadorIncrementado (){
  return contador + 1
}
//console.log(pegaContadorIncrementado())

/*
06

Crie uma função decrementaContador que decrementa o contador 
em um.

Use o operador de pré decremento.
*/
function pegaContadordecrementado(){
  return contador - 1
}
//console.log(pegaContadordecrementado())

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
function pegaSetenta(){
  return {numero : 70}
}

/*
09

Use o retorno da função pegaSetenta para comparar se o valor 
da propriedade numero é maior ou igual a contador.
*/
/*
function pegaSetenta(){
  if ({numero: 70} >= contador){
  console.log('contador é maior ou igual')
  } else{
    console.log('contador é menor')
  }
}
pegaSetenta()
*/

pegaSetenta().numero >= contador


/*
10

Divida o contador por quatro usando a função que você criou.
*/


pegaContadorDividido()
//console.log(contador)
//console.log(pegaContadorDividido())


/*
11

Incremente o contador em um usando a função que você criou.
*/

pegaContadorIncrementado()
//console.log(contador)

/*
12

Decremente o contador em um usando a função que você criou.
*/

pegaContadordecrementado()
//console.log(contador)

/*
13

Crie uma função pegaNumeros que exporta os números 34, 
95 e 37.

Dica:

Use uma estrutura de lista.
*/

function pegaNumeros() {
  return numeros = [34, 95, 37]
}
pegaNumeros()
//console.log(pegaNumeros())

/*
14

Use o retorno da função pegaNumeros para comparar se o valor 
do terceiro número do array é diferente de contador.
*/
pegaNumeros()[2] !== contador
//console.log(contador)
//console.log(pegaNumeros()[2])
//console.log(pegaNumeros()[2] !== contador)


