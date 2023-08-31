const numeros = [1, 2, 3, 4, 5]
const retorno = numeros[0] + numeros[1] + numeros[2]
console.log(retorno)
console.log(numeros.length)


const num = [1, 2, 3]
//num.forEach()
num.forEach(() => {
  console.log('Oi') 
})



const obj = {
  prop: 1,
  prop2: 2,
  prop3: [1, 2, 3]   //esse array é um objeto aninhado no objeto inicial
}

const obj2 = {
  ...obj,                                 //propriedades de obj foram espalhadas ali dentro - Spread
    prop: 'x',                              // alterou a propriedade de prop
   prop3: [...obj.prop3, 4]                //False, pq são dois arrays diferentes em memoria

}

obj2.prop3.push(4)
const obj20 = structuredClone(obj)   

console.log('prop3 do obj2:', obj20.prop3)
console.log('prop3 do obj:', obj.prop3)
console.log(obj.prop3 === obj20.prop3) 


// ===================CURSO B7WEB======================
console.log('=============== CURSO B7WEB =============')
const nomeCarro = 'Ferrari'
console.log(nomeCarro)

const precoBolo = 19.99
console.log('R$', precoBolo)

let cidade = 'São Paulo'
console.log(cidade)


