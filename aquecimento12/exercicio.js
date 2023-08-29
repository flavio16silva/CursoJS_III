//Spread e Objeto x Tipos primitivos em JavaScript
//Todo tipo primitivo é IMULTAVEL, ou seja, é uma coisa que nunca muda.
//STRING, NULL, BOOLEAN, NUMBER, UNDEFINED

const trimestres = [
  ['Janeiro', 'Fevereiro', 'Março'],
  ['Abril', 'Maio', 'Junho'],
  ['Julho', 'Agosto', 'Setembro']
]

trimestres[3] = ['outubro', 'novembro', 'dezembro']
trimestres[3][0] = 'Outubro' //outubro ficou com 'O', maisculo
console.log(trimestres[3][0])
console.log(trimestres[3])
console.log(trimestres)

//Tentando fazer mudança num valor primitivo, ou seja string.
//const x = 'abc'
//x[0] = 'A'  - string a ser mudada, mas é imultável

//Fazendo alteração na variavel que recebe a string pode mudar.
let x = 'abc'
x = 'A'
console.log(x)

// =========  Replace =========
//Retorna uma nova string já com a nova expressão que foi especificada.
const mensagem = 'Oi!, Seu pai é legal!'

console.log('=========  Replace =========')
const novaMensagem = mensagem.replace('legal', 'jovem')
mensagem.replace('legal', 'jovem')
console.log(mensagem)
console.log(novaMensagem)

// ============ OBJETO ===============
//ARRAY, OBJETO, FUNÇÃO
// Em JavaScript O OBJETO É MULTÁVEL - PODE SER ALTERADO, mesmo armazenado em uma const
// Objetos são passados por referência

console.log('============ OBJETO ===============')
const obj = { prop: 1}
obj.prop2 = 2                          //inserindo nova propriedade no objeto
console.log(obj.prop2)
console.log(obj)                       //impressão do novo objeto após alteração. 

const arr = ['a', 'b', 'c']
arr[3] = 'd'
console.log(arr)

// ============ PASSAGEM DE VALOR ==================
const mens = 'Uma bela Mensagem'
const objeto = {}

// const z = 7
// const y = 7
// console.log(z === y) //true

const v = { prop: 1, prop: 2 }
const p = v //{ prop: 1, prop: 2 }
console.log('Primeira passagem de valor:', v === p)   //false
console.log('Segunda passagem de valor:', v === p)   //true - Ambos apontando para o mesmo objeto em memoria, no exato mesmo local. O que 'v' recebeu não é uma copia de 'p', mas sim uma referencia desse objeto 'p'.
// - Referencia: é um pedaço de código que recebe outro pedaço de código. 

//Toda vez que criamos uma nova expressão é criado um novo espaço na memoria, a cada criação de um objeto. Toda vez que abro e fecho chaves é criado um novo espaço de memoria, alocando o objeto em cada espaço de memoria diferente. 
//São objetos identicos, com mesmas caracteristicas, mas não são o mesmo objeto. *** 


const objs = [
  {a: 1, b: 2},
  {c: 3, d: 4},
  {e: 5, f: 6}
]
const h = param => { //passando a propria referencia do objeto e não uma cópia
  //console.log(param === objs)
  param.g = 7
}
h(objs[2])
console.log((objs[2]))
console.log(objs)


// =============== Como manter a imultabilidade dos objetos
//Spread: Espalhar
//na criação de um array, na criação de um objeto, como argumento de uma função (na invocação)
//è usado para espalhar propriedades de um objeto em outro objeto, ou itens de array em outro array

console.log('=========== Spread ==============')
const objetos = { prop: 1}
objetos.prop2 = 2
console.log('maneira tradicional:', objetos)

//Maneira correta

const obs = { prop: 1}
const obs2 = {...obs} //espalhando as propriedades em obs2, ou seja, em um novo objeto obs2
console.log('maneira correta:', obs2)

//Posso adicionar novas propriedades nesse novo objeto.
const obs3 = {...obs, prop2: 2}
console.log('obs:', obs)
console.log('obs3:', obs3)

const o = { prop: 1, prop2: 2}
const u = {
  ...o,
  prop: 'x',
  prop: 3
}
//Quando duas propriedades de mesmo nome dentro de um objeto a última subescreve a anterior.
console.log('o:', o)
console.log('u:', u)

const t = (a, b, c) => {
  console.log(a, b, c)
}
const f = [1, 2, 3]
t(...f)
