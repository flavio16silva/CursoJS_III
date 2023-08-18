/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo. 
  - Exiba o novo array no console.

  Dica: pesquise por remainder operator (%).
*/
console.log('==== 01 ====')
const randomNumbers = [10, 30, 15, 25, 50, 40, 5]
const num = randomNumbers.filter(item => item % 2 !== 0)  //Ou 2 === 1
console.log(num)

/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

console.log('==== 02 ====')
const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]
const menor = crazyNumbers.reduce((acc, crazyNumber) => {
  //OU return crazyNumber < 501 ? acc + 1 : acc, 0
    if (crazyNumber < 501) {
      return acc + 1
    }
    return acc
}, 0)

console.log(menor)  

/*
Minha forma
const menor = crazyNumbers.filter(valor => valor < 501)
console.log(menor)  
*/

/*
  03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e exiba o novo array no console.
  
  Dica: pesquise por exponentiation operator (**).
*/
console.log('==== 03 ====')
const numbers = [5, 7, 3]
const expo = numbers.map(item => item ** 2)
console.log(expo)


/*
  04

  - Utilizando o array abaixo, gere um novo array com apenas os filmes 
    lançados antes do ano 2000;
  - Exiba o novo array no console.
*/
console.log('==== 04 ====')
const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const movies = tarantinoMovies.filter(filme => filme.release < 2000)
console.log(movies)

/*
  05

  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/
console.log('==== 05 ====')
const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]

const show = tvShows.map((tvshow) => tvshow.name)    // ou (({name}) => name), usando destruction
console.log(show)
  


/*
  06

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/
console.log('==== 06 ====')
const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

const productList = cart.reduce((acc, product) => {       // Primeiro e Segundo Parametros
  // ((acc, {name}) => ${acc}- ${name}\n, '')
  return `${acc}- ${product.name}\n`
}, '')

console.log(productList)

/*
- Nome 1
- Nome 2
- Nome 3

Obs: 👆🏻 o objetivo do exercício é gerar a string acima. 

A string deve ter exatamente a formatação acima (com traço, quebra de linha, 
e cada item em uma linha). 

console.log é apenas uma forma de você visualizar a string que você está 
gerando. Não é o objetivo final do exercício.

O objetivo final NÃO É executar um console.log para cada nome. Mas sim gerar 
uma única string que contém uma lista exatamente como o exemplo acima. 
*/
