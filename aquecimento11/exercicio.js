// ============ FOR EACH = para cada ============================

//Quando forEach pode ser usado? 
//Quando para cada item de array é preciso usar efeito colateral
//efeito colateral - qualquer mudança externa de estado. 
       //Ex.: Dentro de uma função, modificar algum valor que esteja do fora da função.

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

 console.log(resultado)                  //Depois declarado com seis, houve mudança. 
 
 //-------------------- Como o forEach funciona ----------------------------------
 //é um metodo de array, precisamos encadear em um array que já existe.

 // ---------------------- Como encadeamos a invocação do forEach no array ------------------------
 const num = [1, 2, 3]
 //num.forEach()                   //Quando não inserimos um argumento na invocação do forEach, retorna por debaixo dos panos undefined. 
 // argumento: é o valor que vc insere na invocação de uma função. 
 
 //num.forEach(() => {             //ao inserir uma função o erro desaparece.
    //console.log('Oi')            //no console retorna: 3 Oi, ou seja, exibido três vezes.
    
 //}) 
 //no exemplo acima repetiu 3 vezes, relacionado a cada item do array
 //forEach não espera receber invocação de função 
 //forEach espera receber a declaração de uma função. 

 //Obs.: O que é parametro: é uma variavel que criamos na declaração da função, dentro dos parenteses dela. 
  num.forEach((item) => {          //para cada invocação da função, irá receber um item do array       
    console.log(item)              //retorna no console: 1 2 3
    
 }) 