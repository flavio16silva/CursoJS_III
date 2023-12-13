//Introdução a Métodos

/*
Tipo de dado e tipo de valor são a mesma coisa.
Tipo de dado: São tipo de valores que podemos ter em nosso código.

Tipo de dados em JS:
Primitivos: number, null, undefined, boolean, string, bigint, symbol

Objetos: objetos, array, funções
*/

const obj = {
  prop: 'valor',
  metodo: function (x) {
    return x
  }
  /*Segunda opção de declar função como metodo:
  metodo (x) {
    return x
  }
  */

}

//Quando uma função é atribuida a propriedade de um objeto, ela é chamada de metodo.

console.log(obj.metodo(7))

//Como esse objeto pode ser multado atraves do metodo:
/*
O this esta armazenando o objeto do metodo do qual o this esta inserido.
const obj = {
  prop: 'valor',
  metodo: (x) {
    console.log(this)
  }
}  
objeto.metodo(7)

*/ 
const objt = {
  prop: 'valor',
  metodo (x) {
    console.log(this.prop)
  }
}  
objt.metodo(7)