//Aprenda for loop, push e propriedade length.

//length - comprimento ou quantidade - retorna a quantidade de itens de um array

const n= [1, 2, 3, 4, 5]
console.log(n.length)

//Também funciona com um string
const str = 'abc'
console.log(str.length)

/*
Declaração do FOR:
O proposito de todo loop é repetir um pedaço de codigo repetidas vezes.
for (let i = 0; i < 3; i++){

}
*/
const num = [1, 2, 3, 4, 5]
for (let i = 0; i < num.length; i++) {
  // console.log(i) - retorna o array menor que sua quantidade
  //console.log(num[i]) - retorna os valores do array de acordo o index do array
}

let resultado = 0
const numeros = [1, 2, 3, 4, 5]
for (let i=0; i < numeros.length; i++){
  //let resultado = 0 - retirar daqui porque limpando a memoria a cada execução do bloco. Recebendo uma nova let resultado e zerando.
  resultado = resultado + numeros[i]
  //console.log(resultado) - dentro do FOR ele mostra cada soma executada 
}
console.log(resultado) //fora do FOR mostra o total da soma e só retorna o resultado depois de toda execução do laço.

//Meto de Array chamado PUSH - empurrar e retorna a quantiade de itens do array
//Argumento - é o valor que inserimos na invocação de uma função.
const a = [1, 2, 3]
a.push(4)
console.log(a)
