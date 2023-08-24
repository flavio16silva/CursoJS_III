//Ternário, curto circuito e for loop

//Curto Circuito - Operador &&
//Comportamento especifico de operadores lógicos em expressões.

const resultado = true && false
console.log('----------- Curto Circuito - Operador && --------------')
console.log(resultado) //false - false && true
console.log(resultado) //false - true && false

//Quando o valor a esquerda do && é true, o && retorna o valor a direita. Caso sejam invertidos os valores, false é retornado novamente.
//Se os valores da expressão não são booleans não retorna boolean

console.log('----------- Curto Circuito - Operador Não Booleans --------------')
const result = 1 && 0
console.log(result)// 0 - 1 && 0
console.log(result)// 0 - 0 && 1

//Curto Circuito - Operador ||
console.log('----------- Curto Circuito - Operador || --------------')
const res = false || true
console.log(res) //true - false || true
console.log(res) //true - true || false

//Valores não são booleans
console.log('----------- Curto Circuito - Operador Não Booleans --------------')
const resul = 0 || 1
console.log(resul)// 1 - 0 || 1
console.log(resul)// 1 - 1 || 0

console.log('----------- Operador Ternário --------------')
//Operador Ternário
//Usado para escrever expressões em forma de condição
//Expressão é um pedaço de código que retorna um valor. 

const jogo = {
  nome: 'Final Jogo - Playstation 5',
  estaNoPrime: true
}
jogo.nome // Já esta retornando o nome do jogo
//console.log(jogo.nome) //Expressão que retorna um valor. Aqui sendo visualizado pelo console.log

//Iremos usar o ternário: basedo em uma condição que precisar 'obter' o valor, ou outro. 
//Estrutura: condição ? valor1: valor2
const x = 7
const y = 7 
const z = null
x === y ? true : false //true
console.log(x === y ? true : false)
console.log(x !== y ? true : false)
console.log( z ? true : false)

/* 1º melhor que IF
const pessoa = {
  nome: 'Joao',
  sexo: 'Masculino'
}

const agradecimento = pessoa.sexo === 'Masculino' ? 'obrigado' : 'obrigada' //sexo procede com masculino
console.log(agradecimento)
*/

//Usando if
const pessoa = {
  nome: 'Joao',
  sexo: 'Masculino'
}

let agradecimento = ''
if (pessoa.sexo === "Masculino") {          //Condição
      agradecimento = `Obrigado`
} else{
      agradecimento = 'Obrigada'
};

  console.log(agradecimento)

//Estrutura de Repetição - FOR  ou LOOP
//Executar um pedaço de codigo repetida vezes. 

console.log('----------- Estrutura de Repetição - FOR  ou LOOP --------------')
//const numeros = [1, 2, 3, 4, 5]
//const retorno = numeros[0] + numeros[1] + numeros[2]
//console.log(retorno) //6

//Propriedade: Length - comprimento, quantidade
//numeros.length
//console.log(numeros.length) //5, quantidade de itens no array

for (let i = 0; i < 3; i++) {
      console.log('i: ', i)
}

//let i = 0 - Inicialização de um contador
//i < 3 - Condição
//i++ - Atualização: Incremento do contador 

/*
1º execução
let i = 0 
i < 3 = true
código do bloco executado
i++


2º execução
1 < 3 = true
código do bloco executado
i++

3º execução
2 < 3 = true
código do bloco executado
i++

4º execução
3 < 3 = false

*/

const numeros = [1, 2, 3, 4, 5]

let resultados = 0                           // Não é limpada da memoria a cada do loop 
for (let i = 0; i < numeros.length; i++) {   //numeros.length retornará 5 que é a quantidade de numeros no array
    //console.log(i)                         //loop executado 5 vezes e valor de i mostrado a cada execução
    //numeros[i]                             //Será usado como index do i 
    resultados = resultados + numeros[i]
    
}
//Retorno fora do loop só é executado depois que o for termina de ser executado
console.log('resultados:', resultados)

//Ter cuidado com loop infinito - loop que nunca para de ser executado. 
//Array é um objeto disfarçado, por debaixo dos panos. 

//Push - Empurrar
//Empurrar um item no array, adicionar

const num = [1, 2, 3]
//1º forma: num[3] = 4
//2º forma: num[num.length] = 4
//num[3] = 4

console.log('valor do array num original: ', num)
num.push(4) //Forma correta
console.log('valor do array num(forma correta) após push: ', num)
console.log('valor do array empurrado:', num.push(5)) //Empurrando um item para o final do array
console.log('valor do array após o push:', num)
