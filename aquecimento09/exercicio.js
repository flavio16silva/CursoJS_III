// Operadores Lógicos

// ! NOT: não
// Será usado quando precisar negar/ inverter um boolean.
const x = 3
const resultado = x === 3

console.log(resultado)

// Valores Falsy/falsey e Truthy
const usuario = null               //Nesse caso null não é um boolean
if (usuario  === null) {          //Alterar de === para !== e olhar no console
  console.log('executou if!')    // Não será executado
}

//O que é um Valor Falsy?
// Um valor que é considerado false quando encontra-se em um contexto booleano

const user = {}
if (user) {
  console.log('Exibe na tela!')
}

//O que é um Valor Truthy?
// Um valor que é considerado true quando encontra-se em um contexto booleano

const arr = [0, 1, 2]
// Array com valores truthy
console.log(Boolean())