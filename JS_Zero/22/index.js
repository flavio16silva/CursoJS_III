//O operador lógico not (!), truthy e falsy

/*
Quando iremos usar o operador lógico not?
- Quando quisermos negar a validade de um valor. Ex: Não é
- Para inverter um boolean
- Para negar um boolean

*/

const x = 3
const resultado = x !== 3
//console.log(resultado)
console.log(!resultado) //inversão do boolean

//truthy e falsy
const usuario = null
if (usuario !== null) {
  console.log('executou if')
}

//Falsy
/*
O que é um valor falsy?
É um valor que é considerado falsy quando esta em um contexto booleano ou convertido para booleano.
Contexto boolenado é qualquer situação que envolva qualquer estrutura condicional - if e else por exemplo 
*/

//Truthy
/*
O que é um valor truthy?
Tudo que não é falsy, são os valores truthy.
É um valor considerado true em um contexto booleano, ou seja, ele é verdadeiro.
*/

const u = []
if (u) {
  console.log('Exibe tela de boas vindas')
}

