const serie = {
  nome: 'Game of Thrones',
  temporadas: 8
}

//const frase = `A serie [] tem [] temporadas`
const frase = `A serie ${serie.nome} tem ${serie.temporadas + 10} temporadas`
console.log(frase)