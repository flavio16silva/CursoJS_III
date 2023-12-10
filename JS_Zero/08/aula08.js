/*
Introdução a estrutura de dados - Array
É uma forma de organizar informações em JS, essas informações são organizadas atraves de index. 
É uma lista de valores
Os valores colocados dentro de um array podem ser chamados de itens ou elementos
*/
//Exemplo de como declarar e utilizar arrays:
const compras = ['abacaxi', 'maçãs', 'torradas'] //Declarando o array com os nomes das frutas
console.log(compras)

//Como acessar um item no array
//Primeiro item do array começa com Zero
compras[0] //primeiro item
console.log(compras[2]) //terceiro item
console.log(compras[0 + 1]) //segundo item

//Substituir item em alguma posição no array
compras[0] = 'limão'
console.log(compras)

//Adicionando um novo item no array
compras[3] = 'banana'
console.log(compras[3])
console.log(compras)

//Declarando um array vazio ou com poucos itens
const carros = []
console.log(carros)
carros[0] = 'Mercedes'
carros[1] = ' Audi'
console.log(carros)

/*
Como nomear um array?
Seja substantivo e esteja no plural
Ex.: const compras = []
*/

const numerosImpares = [7, 9, 11]
const editoresDeCodigos = ['VSCode', 'VIM', 'Sublime Text']
const bandas = ['Led', 'Pink', 'Black']


//Objeto x Array

//Objeto - agrupar caracteristicas de alguma coisa
const pessoa = {
  nome: 'Paulo',
  peso: 80
}

//Array - lista de valores
const dadosPessoa = ['Paulo', 80]

const video = [
  {nome: 'Flash', ano: 2020},
  {nome: 'Liga', ano: 2023}
]

//Pegando o primeiro objeto do array acima:
console.log(video[1].nome)
//Pegando o primeiro carctere do objeto do array acima:
console.log(video[1].nome[0])
//Modificando a segunda propriedade do segundo objeto:
video[1].ano = 2024
console.log(video[1].ano)
//Adicionando nova propriedade no segundo item do array:
video[1].capitulo = 10
console.log(video[1].capitulo)
console.log(video)