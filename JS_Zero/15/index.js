//Parâmetros e argumentos em funções 
/*
O fato do uso de paramentros e argumentos nas funções permitem que elas fiquem mais flexiveis e reutilizaveis
Argumento: é um valor inserido na invocação da função e esses valores são armazenados nos paramentros da função.
Parametro: é uma variavel que recebe o valor que foi inserido como argumento. 
           São variaveis locais de uma função. Só funcionam no escopo da função.
           é uma variavel que criamos na declaração da função, dentro dos parenteses. 

*/

/*
Função de forma estatica
function somar() {
  return 1 + 1
}
console.log(somar()) - 2
*/

//Função de forma Dinamica

function somar(x, y) { //paramentro
  return x + y
}
somar(1, 1)            //argumento 
console.log(somar(1, 1))
console.log(somar(4, 3))


//Tem função que só precisa ter um argumento e um parametro
function dobrar(x) {
  return x * 2
}
console.log(dobrar(2))
console.log(dobrar(6))

//Parametro em uma função recebendo qualquer tipo de valor, ou qualquer expressão que resulte num valor:
function x (y){
  return y
}
console.log(x({prop: 1}))
console.log(x([1, 2, 3]))
console.log(x(7 + 7))
console.log(x('teste'))

//Função interna que recebe argumento
console.log(1)
console.log(1, 2, 3, 4)

//Declarar paramentro e não insere argumento:
function a (b) {
  return b
}
a()
console.log(a()) //essa invocação retorna undefined, ou seja, ausência de valor. Porque não foi passado um argumento para o parametro.

function c (d) {
  return d + 7
}
c()
console.log(c()) //NaN: not a number: tentando executar alguma operação matemaica que não é um numero. 

function w (r) {
  return r + 7
}
w()
console.log('Ba'+ w() +'a')//O JS faz conversões automaticas de tipos de dados quando necessário. 'NaN', foi convertido em uma String.

