//Ternário e expressões de curto-circuito

/*
 O que são expressões de curto-circuito?
 É um comportamento especifico dos operadores lógicos em uma expressão. 
*/

//Curto Circuito operador &&
const resultado = true && false //Nessa expressão retorna false
//const resultado = false && true //Nessa expressão retorna false
console.log(resultado)

//Curto Circuito operador ||
const res = true || false //Nessa expressão retorna true
//const res = false || true      //Nessa expressão retorna true
console.log(res)

//Expressão: é um pedaço de codigo que pode ser avaliado em um certo valor. Ou pedaço de codigo que pode retornar valor.
const jogo = {
  nome: 'Final Fantasy',
  estaNoPrime: true
}
console.log(jogo.nome) //jogo.nome = é um pedaço de codigo que retorna valor

/*
Operador Ternario ou "operador condicional"
 - è um operador usado para escrever uma condição é forma de expressão
 condicao ? valor1 : valor2
 - Prefira usar ternario quando sua verificação for pequena
 
 Quando usar um ternário?
  - Quando baseado em uma condição preciso obter um valor
*/

const x = 7
const y = 7
const z = null
x === y ? true : false
console.log(x !== y ? true : false)
console.log(z ? true : false)

const p = {
  nome: 'Fulano',
  sexo: 'masculino'
}
const agradecimento = p.sexo === 'masculino' ? 'obrigado' : 'obrigada'
console.log(agradecimento)
