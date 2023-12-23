/*
Null: 
Quando usar Null em JS:
- Quando você quer que uma variável tenha um valor vazio.
- Para indicar a ausência de informações.
- Para intensionalmente representar a falta de um valor, ou que esse valor irá mudar na frente.
*/

//Exemplos:
let x = null //Variável com o valor nulo

let eMaiorDeIdade = null
const idade = 18
if(idade >= 18){
  eMaiorDeIdade = true
} else {
  eMaiorDeIdade = false
}
console.log(eMaiorDeIdade)

const user = null //trata-se de um usuario não identificado no sistema

//Resetar o valor de uma variavel:
eMaiorDeIdade = null //atribuindo um novo objeto para a variavel, resetando assim seu valor para nulo
console.log(eMaiorDeIdade)

/*
Será que null é realmente necessário:
- Na maioria dos casos não é
*/
 const pegaMaiorIdade = idade1 => {
  if (idade1 >= 18){
    return true
  }
    return false
 }
 const idade1 = 18
 const idade2 = 17

 console.log(pegaMaiorIdade(idade1))
 console.log(pegaMaiorIdade(idade2))


 /*
 Undefined:
 - O undefined é utilizado quando uma variável ainda não tem sido atribuída um valor. 
 - Undefined não é objeto
 */

 //Primeiro caso: Variavel declarada sem atribuição de valor, para depois ser atribuido. 
 let nome
 console.log(nome) //Vai retornar 'undefined' pois a variavel foi declarada mas não recebeu nenhum valor. 

 //Segundo caso: Quando um parametro é lançado e não é passado um argumento na invocação dessa função, esse parametro automaticamente recebe undefined.
 const a = b => console.log(b)
 a()

 //Terceiro caso: Quando uma função ou metodo não retorna valor explicitamente
 const pegaEmail = email => {
  `O email é ${email}` //retorna undefined porque a string não é retornada. Para correção incluir return
 }
 console.log(pegaEmail("oi@oi.com.br"))

 //Toda função em JS que não retorna valor, retorna undefined por padrão. 

 //Quarto caso: Até mesmo funções com metodos nativos podem retornar Undefined
 console.log(console.log()) //invocação do log, nunca retornará valor. É um metodo da linguagem que não retorna valor. 

 //Quinto caso: Tenta acessar uma propriedade inexistente num objeto, ou um item inexistente num array
 const musica = {
  nome: 'Valeu',
  banda: 'Nozes'
 }
 console.log(musica.ano) //acessando uma propriedade que não existe.
 console.log(musica.ano.abc) //Supondo que o objeto musica tem uma prop ano e essa prop tá armazenando uma prop abc

 /*
 Null e Undefined:
 São valores que representam falta de valores, null é um valor que inserimos no código. Intencionalmente especificando a falta de um avalor. 
 Já o undefined, geralmente não é inserido no código. 
 */





