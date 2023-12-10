//Introdução a funções
/*
  O que é uma Função
  - É um bloco de códigos reutilizável, nomeado, que pode ser executado com tarefas específicas usando o operador ().  
*/

//Declarando/criando a chamada de uma função
/*
 - Quando criamos uma funão, encapsulamos linhas de codigo especificas que podem ser usadas varias vezes em diferentes partes de seu software
 - Funções trazem modularidade, ou seja, dividindo seu software em partes menores. Fazendo com que cada funçao seja responsavel por uma ação especifica. 
*/
//Anatomia da Função:
function nome () {
  //conteudo da função
}

//Chama, invoca uma função
nome() //expressão 

let numero = 1
function incrementar() {
  numero++
}
incrementar()
console.log(numero)

/*
Funções criam Escopo:
O que é Escopo:
- È o local onde as variáveis estão disponíveis para serem usadas.
- È a visibilidade de um valor
*/

function x () {
  const minhaConst = 'valor' //Toda variavel declarada dentro de um bloco de função, só existe e serão acessadas dentro desse bloco. 
}
//minhaConst //-> ao chamar a const fora da função retorna um erro no console dizendo que ela não foi definida. 

//Variavel criada fora do bloco pode ser acessada fora do bloco, conforme exemplo abaixo:
let n = 1
function aumentar() {
  n++
}
aumentar()
console.log(n)

//Como pegar uma variavel dentro do bloco da função:
function pegaNome() {
  const meuNome = 'Flavio'
     return meuNome              //exportar o valor da função para fora
     //return - podemos retornar: objeto, string, array, number, boolean, operadores e etc
}
//Na frente do "return" vc pode colocar uma expressão ou um valor. 

//A invocação de uma função pode retornar um valor
pegaNome()
console.log(pegaNome())

/*
Não devemos declarar variaveis com o mesmo nome dentro do mesmo escopo, ou seja, uma variavel de nome const nome, não pode tá no escopo local(dentro da função) e no escopo global (fora da função), isso resulta erro no console. 
*/

//Uso do return
function pegaNumero() {
  return 5
}
const resultado = pegaNumero() + 2
console.log(resultado)

