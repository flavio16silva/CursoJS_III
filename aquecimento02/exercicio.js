// Interpolação
const serie = {
  nome: 'Game of Thrones',
  temporadas: 8
}

//const frase = `A serie [] tem [] temporadas`
const frase = `A serie ${serie.nome} tem ${serie.temporadas + 10} temporadas`
console.log(frase)

const teste = {
  def: 20
}

//Interpolação entre objetos
const tudo = `A serie ${serie.nome} tem ${serie.temporadas + teste.def} temporadas`
console.log(tudo)


//const aceita retribuição de valor?
//Se o que for reatribuído, for o valor de uma propriedade do objeto, a const irá aceitar essa retribuição.
//Porque objetos em JS são multaveis por padrão. 
//Ex.:
const filme = {
  nome: 'Game of Thrones',
  temporada: 8
}

//Alterando uma propriedade:
console.log('---- Alterando uma propriedade ---')
filme.temporada = 9
console.log(filme.temporada)

//const não garante imultabilidade no objeto. 
//Caso tente atribuir a retribuição para a objeto (identificador) = series, dará erro no console. 
//filme = 10
//Uncaught TypeError: Assignment to constant variable.at exercicio.js:35:8

//Atribuindo uma nova propriedade:
console.log('---- Atribuindo uma nova propriedade ---')
filme.roteiro = 'Joao'
console.log(filme)

//criando objeto vazio
console.log('---- Criando objeto vazio ---')
const seriado = {}
console.log(seriado)

//Quando devo usar objeto e quando usar variavel?
//Usamos objeto quando queremos agrupar em um só lugar caracteristicas relacionadas a uma coisa só. 
//Objeto é uma estrutura de dados em JS
//Estrutura de dados é uma forma de organizar dados. Ou seja, informações e essas serem acessadas no futuro. 