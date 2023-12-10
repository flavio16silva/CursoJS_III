//Introdução a arrow functions 

/*
O fato do uso de paramentros e argumentos nas funções permitem que elas fiquem mais flexiveis e reutilizaveis
Argumento: é um valor inserido na invocação da função e esses valores são armazenados nos parametros da função.
Parametro: é uma variavel que recebe o valor que foi inserido como argumento. 
           São variaveis locais de uma função. Só funcionam no escopo da função.
           é uma variavel que criamos na declaração da função, dentro dos parenteses. 

*/

//Função padrão
function somar (x,y) {
  return x + y;
}

//Função Arrow
const somar2 = (x,y) => x + y

//Anatomia
//() => {}

//Como invocar uma arrow function: Importante dar um nome a função para ela ser invocada
const x = () => {}
x()
console.log(x()) //undefined: porque a função não retorna valor

/*Forma tradicional da Função:
function pegaMensagem (nome) {
  return `Meu nome é ${nome}`
}
pegaMensagem('Flavio')
console.log(pegaMensagem('Flavio'))
*/

//Forma Arrow Function - os parenteses do parametro: nome podem ser omitidos caso deseje, já que é apenas um parametro
const pegaMensagem = (nome) => `Meu nome é ${nome}` //Return implicito só funciona com uma "única expressão" ao lado direito da seta. 
pegaMensagem('Flavio')
console.log(pegaMensagem('Flavio'))

somar2(5,2)
console.log(somar2(5,2))

//O retorno implicito de uma arrow function pode não funcionar como esperamos, nesse caso no retorno de um objeto:
/*const pegaobj = (param1, param2) => {
  return {
    prop1: param1,
    prop2: param2
  }
}
pegaobj(1,2)
console.log(pegaobj(1,2))
*/

/*
Erro mostrado porque o JS não consegue interpretar a abertura de chaves como um objeto. 
Confundindo a abertura de chaves como inicio de bloco da função
"Sem parenteses"
const pegaobj = (param1, param2) => {  
    prop1: param1,
    prop2: param2
  }

*/

/*
Como retornar um objeto numa arrow:
Envolvendo o objeto em paranteses
"Com parenteses"
*/
const pegaobj = (param1, param2) => (
{  prop1: param1, 
   prop2: param2 
})
pegaobj(1,2)
console.log(pegaobj(1,2))
