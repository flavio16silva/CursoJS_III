//Operadores de atribuição compostos

let numero = 7
//number = number + 5
numero += 5
//number = number - 3
numero -= 3
//number = number * 2
numero *= 2
//number = number / 2
numero /= 2
numero--
numero++
console.log(numero)


//Operadores de Comparação
//operador de igualdade ==
const n = 'valor'
console.log(n == 'valor') //true
console.log(n == 'Valor') //false
//JS é case sensitve, pois diferencia maiusculo de minusculo

const x = '1'
console.log(x == 1) //ocorre uma conversão implicita de uma string '1' para numero 1

//Testando por tipo e valor - igualdade estrita
console.log(x === 1)  //false

//Testando se um valor é diferente de outro
x != '2'
console.log(x != '2') //true
console.log(x != '1') //false

const y = 1
console.log( y != '1') //false, ocorre uma conversão implicita de uma string '1' para numero 1
//usar operador estritamente diferente dê !==
console.log( y !== '1') //true

//Operadores maior que e menor que
const b = 4 > 6
console.log(b)    //false
const c = 7 > 3
console.log(c)    //true
const d = 8 <= 10
console.log(d)    //true
const e = 10 <= 8
console.log(e)    //false