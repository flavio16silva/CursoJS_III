//Arrow functions x funções tradicionais e operadores lógicos 

//Arrow functions
//Vantagens: 
//1) Não precisa do this, não tem o contexto de execução;
//2) Pode ser aninhada.
//3) Mesma caracteristicas de uma função tradicional


function multiplicar (x, y) {
  return x *y ; //return só usando dentro de função, retorna um valor e para a execução do restante.
  //Ex.: console.log(....)
}
console.log(multiplicar(5,5))

// ========= Arrow functions ==================
//const multiplicar2 = (x, y) => x * y

//Anatomia da criação de uma arrow function
//() => {}
const x = () => {

}
x() //anatomia da invocação de uma arrow function

//============ Transformar uma function tradicional numa Arroz Function ============
//function tradicional:
// function pegaMensagem (nome) {
//   return `meu nome é ${nome}`
// }

// console.log(pegaMensagem('Joao'))

//Arrow Function - Exemplo de mudança da função acima
const pegaMensagem = (nome) => `Meu nome é ${nome}` //Direita da seta será executado primeiro. 
console.log(pegaMensagem('Joao'))

const somar = (x, y) => x + y //Direita da seta será executado primeiro
console.log(somar(5, 5))

//Quando o retorno implicito de uma arrow function não funciona:
// - quando uma const é chamada a direita da seta
// - no retorno de um objeto
// const pegaObj = (param1, param2) => {
//   return {
//     prop1: param1,
//     prop2: param2
//   }
// }
// console.log(pegaObj(1, 2))

const pegaObj = (param1, param2) => ({ //inclusão dos parenteses
  //return {
    prop1: param1,
    prop2: param2
  //}
})
console.log(pegaObj(1, 2))

//Retorno implicito só funciona uma apenas uma expressao ao lado direito da seta

//nome é o parametro
//Quando vc tem uma função de parametro único pode tirar os parenteses 
/*const pegaMensagem1 = nome => `Meu nome é ${nome}` 
console.log(pegaMensagem1("Marcos"))
*/

//Arrumação: Quebrando a linha caso a linha seja extensa
const pegaMensagem1 = nome => 
    `Meu nome é ${nome}` 

console.log(pegaMensagem1("Marcos"))

// ================= Operadores Lógicos =====================
//È atraves de operadores logicos que podemos controlar o fluxo de informações do codigo
//1º Operador: e - &&

const a = 3
const b = 7
const resul = a === 3 && b === 7 //Se a expressão a esquerda e direita são true 
console.log(resul)

//2º Operador: ou - OR
//Umas das duas expressoes retorna true para ser verdadeiro
const resultado = a !== 3 || b !== 7
console.log(resultado)

// ============== Estrutura Condicional ================
//Tomar decisões em seu codigo

//IF: SE
const d = 3
const e = 7
let z = 0

//Se a expressão dentro dos parenteses retorna false, as linhas de codigo dentro do bloco não são executadas. 
//Sempre só um dos blocos será executado, ou seja, o que retorna true primeiro
if ( d === '3' || e === '7' ) { 
      z++
} else if (d === 3) {
  z = 5
} else { //ELSE - SENÃO
  z = 9
}   
console.log(z)

