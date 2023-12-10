/* Imutabilidade e Estrutura de dados objeto

Código imultável tende a ter menos bugs

*/

let numeroImpar = 7
console.log('Atribuição: ' + numeroImpar)
numeroImpar = 3
console.log('Reatribuição: ' + numeroImpar)

const outronumeroImpar = 5
console.log('Usando const para atribuição: ' + outronumeroImpar)

//Uma propriedade de um objeto é como se fosse uma variavel, no sentido de que ela armazena um valor
//É possivel interpolar propriedades de objeto com interpolamos strings.
const serie = {
  nome: 'The Flash',  //propriedade de objeto
  temporadas: 10,     //propriedade de objeto
  abc: 7              //exemplo  
}

const Obj = {        //propriedade de outro objeto, sendo usado na mesma template string
  def: 3
}

 const frase = `A serie ${serie.nome} tem ${serie.temporadas + serie.abc + Obj.def} temporadas.` //template string
 console.log(frase)

/*
  Exceções para reatribuição do valor de uma constante
  Se estiver alterando uma "propriedade de um objeto", a const irá aceitar essa reatribuição. Porque, objetos em JS são mutáveis por padrão.
  
  Reatribuindo uma const:
  const serie = novo
  - Não funciona pois o JavaScript não permite alteração direta da constante
  - Ou seja, você precisa criar um novo objeto ou array

  Reatribuindo uma propriedade do objeto:
  serie.nome: novo
  - Funciona pois o JavaScript permite alteração das propriedades dos objetos

 */ 


const filme = {
  nome: 'Superman',
  temporadas: 7
}

filme.temporadas = 10
console.log("filmes:" + filme.temporadas)

/*
Expressão: è tudo que gera valor em JS
ex: 5 + 5 = 10, expressão matematica que gera valor
String é um valor em si
*/

//Criando nova propriedade no objeto:
filme.episodios = 70
console.log("Episodios do Filme: " + filme.episodios)

/*
Se a propriedade já existe no objeto ela será alterada.
Se a propriedade não existe no objeto, ela será criada. 
*/

/*
É possivel criar objeto vazio?
Sim, é possivel criar objeto sem propriedade
Exemplo: const obj = {}
*/

const objVazio = {}
console.log(objVazio)


/*
Quando vou usar objeto ou variavel?
Usar objeto = quando precisamos agrupar em um só lugar cararcteristicas relacionadas a uma coisa só. 
Ex.: 

*/
//Em vez de criar varias const
const nome = 'Paulo'
const peso = 80
const altura = 1.70
const idade = 42

/*
Objeto é uma estrutura de dados em JS
Criamos uma const que armazena todas as caracteristicas:
*/

const pessoa = {
  nome: 'Paulo',
  peso: 80,
  altura: 1.70,
  idade: 42
}
console.log(pessoa)


