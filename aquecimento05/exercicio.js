// Funções, comparação e operadores de atribuição compostos
//JS é case sensitive, diferencia maiusculas, de minusculas

//===== operador de comparação =====
//igualdade: ==
//atribuição de valor: =
const teste = 1

//===== NÃO USE ESSE OPERADOR ========
console.log(teste == 1) //pegou a string 1 e converteu para o number 1

//testar por tipo e valor
//usando o operador de igualdade estrita: ===
console.log(teste === 1)

//testando se um valor não é igual a outro, ou seja, diferente
//===== NÃO USE ESSE OPERADOR ========
//operador !=

console.log(teste != '2') //true
console.log(teste != '1') //false

//OPERADOR ESTRITAMENTE DIFERENTE DE
console.log(teste !== '1') //true

//======= Operador de Comparação ===========
console.log(7 > 3) //true
console.log(7 > 8) //false
console.log(7 < 8) //true
console.log(7 < 7) //false
console.log(7 >= 7) //true

//FUNÇÃO
//É UM BLOCO DE CODIGO NOMEADO QUE PODE SER EXECUTADO USANDO O OPERADOR ()
//Encapsula linhas de codigo especifica que podem ser usadas varias vezes em diferentes partes do programa.
//Modularidade: dividindo o software em partes menores, havendo mais controle do codigo.
//Permite criar abstrações de codigo, oferecendo uma forma mais simples de trilhar o software mais complexo

//(), representa a ação a ser executada

//Criar ou declarar uma função em JS ======================= 
//anatomia da função:
function nome() {
  //declaração
  //conteudo da função
}
nome() //invocar, chamar ou executar a função. Sempre colocar o nome da função e o operador parentese juntos.

console.log(nome()) //undefined: representa a falta de um valor
console.log(nome) //não executa a função

//====== Pratica ===========

let numero = 1
function incrementa () {
   numero++
}

incrementa() //sempre invocar a função - 2
//Invocando mais vezes
incrementa() //- 3
incrementa() //- 4
console.log(numero)

//A declaração de uma função de cria escopo
// Escopo é a visibilidade de uma variavel.

const x = function() {
  const minhaConst = 'valor' //essa const não pode ser acessada fora do bloco da função. Ela esta presa dentro do bloco de codigo. 
}
//Quando uma variavel é criado "dentro" de um bloco de função ela NÃO pode ser utilizada "fora" desse bloco. 


//Variavel criada fora do bloco pode ser acessada fora do bloco:
function y () { // 1º
  console.log(minhaConst) //4º
}
const minhaConst = 'valor' // 2º, minhaConst ja estava na memoria quando executado. Antes da invocação. 
y() //3º - invocada

//ACESSAR FORA DA FUNÇÃO UM VALOR QUE TÁ DENTRO DA FUNÇÃO =========================

function pegaNome () {
  const nomes = 'joao'
   return nomes //EXPORTAR valor para fora 
}
//A invocação de uma função pode retornar um valor
//console.log(pegaNome()) //joao

const nomes = pegaNome() //armazenando o valor que a invocação retornou. Que consta no return
console.log(nomes)

//Exemplo
function pegaNumero () {
  return 5
}

const resultado = pegaNumero() + 2
console.log(resultado)