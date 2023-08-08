// ================ METODOS DE OBJETO
//TIPOS DE DADOS E TIPOS DE VALORES SÃO A MESMA COISA
//Primitivos ou Objetos, afeta como são comparados e armazenados em memoria

// ========= Primitivos
/*
- number
- boolean
- null
- undefined
- string
- bigint
- symbol

*/

// ========= Objetos - estrutura de dados em JS, em que as informações são organizadas em pares de chave e valor.
/*
 - objetos {}
 - arrays []
 - funções () => {}
*/

//Criando objeto:
const obj = {     //Um objeto sendo atribuido a uma constante

  prop: 'valor',
  prop2: 'valor 2'

} 
console.log(obj)


//Para que usar METODO em JS?
//cria-se um metodo quando precisamos executar uma função em meu codigo.
const objeto = {     

  prop: 'valor',
  //atalho para execução: metodo (x) {
  metodo: function () { // x
    return 1 //x
  }
  
}
console.log(objeto.metodo()) //1
objeto.metodo() //função atrelada a um objeto. Onde objeto não cria escopo

//metodo também pode receber argumentos, que deixam as funções mais flexiveis. Podendo repetir ela varias vezes com outros valores

//THIS
/*
const objeto = {     

  prop: 'valor',
    metodo: (x) => { 
    console.log(this)
    this.prop = x
  }
  
}
THIS: EM UMA ARROZ FUNCTION ARMAZENA O THIS DO ESCOPO EM QUE A ARROW FUNCTION FOI DECLARADA. 

objeto.metodo(1)
console.log(objeto.pro)

*/

const objetos = { prop: 'valor', prop2: 'valor 2'}
const objetos2 = {
  ...objetos,
  prop: 1
}

console.log(objetos)
console.log(objetos2)


// ==============  Quando podemos usar o tipo primitivo: null em JS ========================
//Intensionalmente representar a falta de um valor em seu codigo.

let eMaiorDeIdade = null
const idade = 18

if (idade >= 18) {
  eMaiorDeIdade = true
} else {
  eMaiorDeIdade = false
}
console.log(eMaiorDeIdade)

//Quando recebemos um valor externo:
let user = null //quando é um usuario não autenticado

//Resetar o valor da variavel
eMaiorDeIdade = null
console.log(eMaiorDeIdade)

//Não é necessário o uso de null na maioria dos casos

const pegaMaioridade = idade => { //podemos passar qual idade como parametro
  if (idade >= 18) {
    return true
  }  
  return false
}

const idadee = 18
const idade2 = 17

console.log(pegaMaioridade(idadee)) //true
console.log(pegaMaioridade(idade2)) //false

//================= UNDEFINED
//Quando encontramos undefined em JS? 
// Variavel seja iniciado em algum valor, para depois ser inserido valor nela. 

//Exemplo 1:
let A
console.log(A)

//Exemplo 2:
//quando um parametro é declarado e não é passado no argumento ou na invocação da função. Esse parametro automaticamente recebe undefined
const e = f => console.log(f)
e()

//Exemplo 3:
// quando uma função ou um metodo não retorna valor explicitamente
const pegaEmail = email => {      //retornando a string explicitamente atraves da palavra return
  /*return*/ `o email é ${email}` // nesse modo retorna undefined, porque não retorna valor
 } 
console.log(pegaEmail('teste@teste.com.br'))

console.log(console.log(7)) //Invocação do metodo console.log não irá retornar valor. Nem ao inserir valor como argumento

//Exemplo 4:
//Tenta acessar uma propriedade em um objeto ou item inexistente num array
const musica = {
  nome: 'Tudo indo',
  banda: 'Do nada'
}
console.log(musica.ano) //exibindo algo(propriedade) que não existe no objeto.
console.log(musica.ano === undefined) //verificando se existe
//console.log(musica.ano.abc) //Retorna erro que o objeto não é possivel ver essa propriedade abc. Não existe propriedade em Undefined


const arr = [1, 2, 3]

console.log(arr[3].teste) //Retorna erro

//=====================  Qual a diferença entre null e undefined?
//representam falta de valores
// null: nós inserimos no codigo de forma intencional
// undefined: não é inserido e sim encontrado. 





/*
const x = 3
const y = 7
let w = 0

if (x === '3' || y === '7' ) {
  w++
} else if (x === 4) {
  w = 5
} else if (y === 7) {
  w = 7
} else {
  w = 9
}

console.log(w) 
*/