// ============ FOR EACH = para cada ============================

//Quando forEach pode ser usado? 
//Quando para cada item de array é preciso usar efeito colateral
//efeito colateral - qualquer mudança externa de estado. 
       //Ex.: Dentro de uma função, modificar algum valor que esteja fora da função.

       //Ex.: de efeito colateral com função
const obj = { prop: 'x'}
const y = () => {
  obj.prop = 'y'      //Modificando um valor que consta do lado de fora/externo da função. Alterando o estado de "x" que mudou para "y"
}
y()
console.log(obj.prop)

        //Ex.: de efeito colateral com for

 const numeros = [1, 2, 3]
 let resultado = 0                       //Primeiro declarado com zero        

 for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i]
 }

 console.log('resultado: ', resultado)                  //Depois declarado com seis, houve mudança. 
 
 //-------------------- Como o forEach funciona ----------------------------------
 /*
  - é um metodo de array, que recebe uma função como argumento. Precisamos encadear em um array que já existe.
                   const num = [1, 2, 3]
  - essa função será executada para cada item do array.  

 num.forEach((item, index, array) => {})

  - essa função pode receber 3 parametros: item, index, array
 
 */


 // ---------------------- Como encadeamos a invocação do forEach no array ------------------------
 const num = [1, 2, 3]
 //num.forEach()                   //Quando não inserimos um argumento na invocação do forEach, retorna por debaixo dos panos undefined. 
 // argumento: é o valor que vc insere na invocação de uma função. 
 
 //num.forEach(() => {             //ao inserir uma função o erro desaparece.
    //console.log('Oi')            //no console retorna: 3 Oi, ou seja, exibido três vezes.
    
 //}) 
 //No exemplo acima repetiu 3 vezes, relacionado a cada item do array
 //forEach não espera receber invocação de função 
 //forEach espera receber a declaração de uma função, ou a referencia dela. 

 //Obs.: O que é parametro: é uma variavel que criamos na declaração da função, dentro dos parenteses dela.

 // ============== PRIMEIRO PARAMETRO = ITEM 
  num.forEach((item, index, array) => {                             //para cada invocação da função, irá receber um item do array       
    console.log('item:', item, 'index:', index, 'array:', array)    //retorna no console: 1 2 3
    
 }) 

 // --------------- IMPRESSÃO NA TELA -------------------------
 /*
 item: 1 
 item: 2 
 item: 3 
 
 */

 // ============== SEGUNDO PARAMETRO = INDEX
 //Essa função pode receber um SEGUNDO parametro:index
 //index: recebe a posição do item para o qual essa função esta sendo executada. 
 //Ou seja, na primeira execução da função o index receberá zero
 // --------------- IMPRESSÃO NA TELA  -------------------------
 /*
 item: 1 index: 0
 item: 2 index: 1
 item: 3 index: 2 
 */


// ============== TERCEIRO PARAMETRO = ARRAY 
//A cada execução da função irá armezenar o proprio array que o forEach for encadeado. 
 // --------------- IMPRESSÃO NA TELA  -------------------------
/*
item: 1 index: 0 array: (3) [1, 2, 3]
item: 2 index: 1 array: (3) [1, 2, 3]
item: 3 index: 2 array: (3) [1, 2, 3]
*/

const dados = [10, 20, 30]
const e = (item, index, array) => {                                    
  console.log('item:', item, 'index:', index, 'array:', array)   
  
}
console.log('acesso a função:', e)                //atraves de 'e' tenho acesso a função
dados.forEach(e)              //aqui 'e' me dá função que armazena



//Podemos dar qualquer nome para os parametros, porque são variaveis.

const valores = [5, 10, 15]
let res = 0

valores.forEach (valor => {   //item                                  
  res = res + valor           //bloco de codigo
  
})
console.log(res)              //30

//forEach NUNCA retorna valor, independente do modo chamado abaixo:Sempre vai retornar UNDEFINED 
valores.forEach( () => 1) //return implicito
valores.forEach( () => {  //return explicito
  return 1
})



//=============================== METODO INCLUDE
//TRADUÇÃO: INCLUI
//INCLUDE SEMPRE RETORNA UM BOOLEAN

const w = [2, 4, 6]
w.includes(0)
console.log(w.includes(0))      //false
console.log(w.includes('2'))    //false
console.log(w.includes(6))      //true, esta incluso no array acima

const mensagem = 'Pipoca não tem perna mais pula'
mensagem.includes('pular')
console.log(mensagem.includes('pular')) //false, mesmo que coloque Pula, também não consta na string. Porque precisa ser identico os caracteres.


//=============================== METODO EVERY
//TRADUÇÃO: TODOS
//Quando precisa CHECAR SE TODOS os itens de um array correspondem aquela condição. 
//Sempre irá retornar o resultado de alguma comparação, seja usado operadores ou outros metodos.

const strings = ['1', '1', 1]
strings.every(string => string === '1')
console.log(strings.every(string => string === '1')) //false. Só retornaria true se todos os itens desse array fossem string '1'

//Esse metodo acima pode receber mais dois parametros:
strings.every((string, index, array) => string === '1')


