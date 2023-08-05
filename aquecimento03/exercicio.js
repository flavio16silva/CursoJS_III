const pessoa = {
  nome: 'João',
  peso: 70,
  altura: 1.7,
  idade: 34
}

// Array: estrutura de dados usada em JS
//È uma lista de valores, é um Array
/* Uma lista - como representar em JS
abacaxi
maças
torradas
*/

//Criando array
//Dentro do arrays temos os itens ou elementos são separados por virgula e espaço

const compras = ['abacaxi', 'maça', 'torradas']
console.log(compras)

//Como acessar um unico item de um array - nomenclatura: nomeDoarray[posicao]
//posicao é a mesma coisa de : index
//zero-based: começa com zero

console.log(compras[0])

//Ou armazena numa const:
const item = compras[2]
console.log(item)

//O que podemos inserir dentro dos colchetes:
//Podemos inserir qualquer expressão que resulte no index que desejamos obter.
compras[1 + 1]
console.log(compras[1 + 1])

//Podemos substituir um item no array. Subscrevendo o item numa determinada posição.
compras[0] = 'limão'
console.log(compras[0])
console.log(compras)

//Como adicionar um item no array:
compras[3] = 'laranja'
console.log(compras)
console.log(compras[3])

//Podemos tb criar array vazio ou com poucos itens e preencher depois.
const mercados = []
console.log(mercados)
mercados[0] = 'banana'
console.log(mercados)

//Recomendações para nomear array:
//substantivo e plural. Exemplos:
//Tenderá a ter itens do mesmo tipo de dados: Strings, Numeros e etc.
const numerosImpares = [1, 3, 5]
const editores = ['VScode', 'NeoVIM', 'Sublime']
const roupas = ['camisa', 'blusa', 'cinto']

//Quando usar ARRAY e OBJETO
//objeto: agrupamento de "caracteristicas" de alguma coisa. A tendencia é agrupar dentro do objeto. E dentro do objeto são chamadas de propriedades. Pares de propriedades: valor

const jogo = {
  //agrupando caracteristicas
  nome: 'FIFA',
  ano: 2020,
  modelo: 'TOP'
}
//Pesquisar no objeto:
jogo.ano //pesquisa pelo nome da propriedade

//array: quando precisamos de uma lista.
const informacoesJogo = ['FIFA', 2020, 'TOP']
//Pesquisar no array:
informacoesJogo[1] //pesquisa pela posição o item

//Como array e objeto se relacionam

const numerosPares = [2, 4, 6]
const series = ['OC', 'Friends', 'Flash']

//Um array pode ser uma lista de objetos:
//lista de objetos
const serie = [
  { nome: 'OC', ano: 2019 }, //cada objeto é um conjunto de caracteristicas de uma serie
  { nome: 'Friends', ano: 2020 },
  { nome: 'Flash', ano: 2000 }
]

//Obtendo nome da segunda serie do objeto:
console.log(serie[1])
//essa expressao retornou um objeto, e encadeando a propriedade: nome
console.log(serie[1].nome) //impressao do nome
console.log(serie[1].nome[0]) //impressao da primeira letra do nome: F

//modificar a propriedade ano:
serie[1].ano = 2009
console.log(serie[1])

//adicionando uma nova propriedade no item do array
serie[1].temporada = 10
serie[2].emissora = 'SYFY'
console.log(serie[1].temporada)
console.log(serie[2].emissora)
console.log(serie)

//Array de arrays
const filmes = [
  ['Star Wars', 'Aquaman', 'Spiderman'],
  ['Avengers', 'Iron Man', 'Captain America'],
  ['Flash', 'Superman', 'X-MEN']
]
//Array dentro de arrar, chamamos de array multidimensional ou aninhamento de array.
filmes[2]
console.log(filmes[2][1][0]) //superman, pegando S

//adicionando outro array
filmes[3] = ['Thor', 'Arrow', 'He-man']
console.log(filmes[3])
console.log(filmes)

//propriedades do objeto podem armazenar qualquer tipo de dado.
//podem armazenar array
const pokemon = {
  nomes: ['Charizard'],
  tipos: ['Fogo', 'Voador']
}
pokemon.tipos[1]
console.log(pokemon.tipos[1])

// ===================================================================================
//Em JS arrays não existem, nada mais são que objetos:
//Acessando de 2 formas:
//atraves da notação de ponto . pokemon.nome   --- mais legivel e mais rapida
//usando colchetes - pokemon['nome']

// ===================================================================================
//Tipos de dados que podemos ter em codigos: Primitivos ou objetos
//Primitivos: number, null, undefined, strng, boolean, bigint, symbol
//objeto: objetos, arrays, funções

// ===================================================================================
//Quando usar boolean no meu codigo?
//Quando formos representar algo que é: Verdadeiro(true) ou Falso(false)
const cidade = {
  nome: 'bahia',
  climaAbafado: true
}
//acessando o boolean:
console.log(cidade.climaAbafado) //nomeDoObjeto.propriedade

const EuEstouSentado = true
console.log(EuEstouSentado)

//array pode armazenar qualquer tipo de valor e também boolean:
console.log('======= ARRAY COM BOOLEAN ===========')
const booleans = [true, false, true, false, false, true]
console.log(booleans[3])

//Exemplo com OBJETO:
console.log('======= BOOLEAN ===========')
const game = {
  nome: 'Final Fantasy XVI - PlayStation 5',
  estaNoPrime: true
}

console.log(game.estaNoPrime)