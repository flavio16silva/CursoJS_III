//Estruturas de dados e introdução a Boolean

//Array Multidimensional ou aninhamento de Arrays
const trimestres = [
  ['Janeiro', 'Fevereiro', 'Março'],
  ['Abril', 'Maio', 'Junho'],
  ['Julho', 'Agosto', 'Setembro']
]
//Acessando o 'segundo' elemento do 'terceiro' array
trimestres[2][1]
console.log(trimestres[2][1])

//Acessando a 'primeira' letra do 'segundo' elemento do 'terceiro' array
trimestres[2][1][0]
console.log(trimestres[2][1][0])

//Adicionando os 3 meses que faltam no array
trimestres[3] = ['Outubro', 'Novembro', 'Dezembro']
console.log(trimestres[3])
console.log(trimestres)

//Propriedade de objetos também podem armazenar arrays
//Como acessar o tipo 'Voador' do array abaixo:
const pokemon = {
  nome: 'Charizard',
  tipos: ['Fogo', 'Voador']
}
pokemon.tipos[1]
console.log(pokemon.tipos[1])


/*
Tipo de dado ou Tipo de Valor
Tipo de Dado
- Primitivos: number, null, undefined, boolean, string, bigInt, symbol
- Objeto: objetos, arrays, funções
*/

//Boolean - Será usado quando precisarmos mostrar que algo é verdadeiro ou falso.
//Objeto armazenando boolean
//Exemplo 1:
const cidade = {
  nome: 'Salvador',
  climaEnsolarado: false
}
console.log(cidade.climaEnsolarado)

//Exemplo 2:
const jogo = {
  nome: 'Final Fantasy - PlayStation 5',
  estaNoPrime: true
}
console.log(jogo.estaNoPrime)


//Variaveis armazenando boolean
const estouEstudando = true
console.log(estouEstudando)

//Arrays armazenando boolean
const booleans = [true, false, true]
console.log(booleans[1])


